'use strict';
var app = require('../../server/server');
var generator = require('generate-password');

module.exports = function(Person) {

  Person.validatesUniquenessOf('telefono','email','username');

  Person.recoveryPassword = function (email,cb) {


  Person.findOne({ where: {email: email} }, function(err, user) {
    if (err) {
      cb(err);
    } else if (user) {

      var password = generator.generate({length: 10,numbers: true});
      user.password = Person.hashPassword(password);

        Person.upsert(user,(err,res)=>{

          if (err) {
            var errorm = new Error("No se encuentra la persona");
            errorm.status = 401;
            cb(errorm);
          }else {

            Person.app.models.Email.send({
              to: email,
              from: 'you@gmail.com',
              subject: 'Cambio de password',
              text: 'my text',
              html: 'tu nueva contraseña <br><br>'+password+' <em>por favor ten cuidado con tus datos de acceso</em>'
            }, function(err, mail) {
              console.log('email sent!');});
              cb(null,{msg:'se actualizo correctamente,revisa el correo.'});
          }
      });

    }else {
      var errorm = new Error("No se encuentra la persona");
      errorm.status = 401;
      cb(errorm);

    }
});
  }

  Person.remoteMethod(
'recoveryPassword',
{
  accepts: [
    {arg: 'Email', type: 'string', required: true}
  ],
  returns: [{arg: 'response', type: 'array'}],
}
);

  Person.afterRemote('login', function(ctx, modelInstance, next) {
    if (ctx.result)
    {
         Person.findById(ctx.result.userId,{include: [
           {relation: 'address',scope: {fields:['id','address','days']} }]},(error,p)=>{
         if (!error ) {
              var p = p.toJSON()
             ctx.result.cedula=  p.cedula;
             ctx.result.nombre=  p.nombre;
             ctx.result.email=  p.email;
             ctx.result.telefono=  p.telefono;
             ctx.result.ciudad=  p.ciudad;
             ctx.result.rol=  p.rol;
             ctx.result.gotas=  p.gotas;
             ctx.result.politicas =  p.politicas;
             ctx.result.fecha=  p.fecha;
             ctx.result.username=  p.username;
             ctx.result.personId = ctx.result.userId;
             ctx.result.tokenId = ctx.result.id;
             ctx.result.address = p.address;
             ctx.result.unsetAttribute('id');
             ctx.result.unsetAttribute('userId');
             ctx.result.unsetAttribute('created');


          }
      next();
    });
}else
 next();
 });

 Person.beforeRemote( 'create', function( ctx, modelInstance, next) {
    ctx.req.body.pass = ctx.req.body.password;

    if (!ctx.req.body.address) {
      var err = new Error("No se puede guardar sin la direccion");
      err.statusCode = 400;
      console.log(err.toString());
      next(err);
    }else {
        ctx.req.body.addressP = ctx.req.body.address;

        next();
    }
});

Person.observe('after save', function(ctx, next) {

   if (ctx.isNewInstance !== undefined) { //new user

      Person.login({"username" : ctx.instance.username,"password" : ctx.instance.pass}, (loginErr, loginToken)=>
     {

         if (loginToken) {

            ctx.instance.personId = loginToken.personId;
            ctx.instance.ttl = loginToken.ttl;
            ctx.instance.tokenId = loginToken.id;

            //crear addressnew
            if (ctx.instance.addressP) {
              let AdressPerson = app.models.AddressPerson;
             AdressPerson.create({
                 personId : ctx.instance.id,
                 address : ctx.instance.addressP.address,
                 days : ctx.instance.addressP.days
             },(e,addr)=>{
                     if(!e){
                        ctx.instance.addressPerson = [] ;
                        ctx.instance.addressPerson.push({address:addr.address,days:addr.days,id:addr.id});
                     }else {
                         ctx.instance.addressPerson = "error";
                     }
                     ctx.instance.unsetAttribute('addressP');
                    next();
             });
            }
         }else {

           next();
         }
     });

   }else {
      next();
   }

});



};
