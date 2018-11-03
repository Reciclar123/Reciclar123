'use strict';
var app = require('../../server/server');


module.exports = function(Person) {

  //Person.validatesUniquenessOf('telefono','email','username');

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
    ctx.req.body.addressP = ctx.req.body.address;
   //ctx.req.body.unsetAttribute('address');
    next();
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

                        ctx.instance.addressPerson = addr ;

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
     delete ctx.instance.pass;
      next();
   }

});

/* Person.observe('after save', async (ctx, next)=> {

    if (ctx.isNewInstance !== undefined) { //new user
      let addressnew = null;
      if (ctx.instance.addressPerson !== null) {
          let    addressPerson = app.models.addressPerson;
           addressnew = await addressPerson.create({
              personId : ctx.instance.id,
              address : ctx.instance.addressPerson.address,
              days : ctx.instance.addressPerson.days
          },(e,addr)=>{ if(!e)console.log(addr);});

          if(addressnew)
          {
             let address = [];
             address.push(addressnew);
             console.log(address);
             ctx.instance.updateAttributes({address: address});
          }
          //ctx.instance.unsetAttribute('addressPerson');
      }

     // create login
     let login = await Person.login({"username" : ctx.instance.username,"password" : ctx.instance.pass}, (loginErr, loginToken)=>
      {

          if (loginToken) {
             ctx.instance.personId = loginToken.personId;
             ctx.instance.ttl = loginToken.ttl;
             ctx.instance.tokenId = loginToken.id;
             next();
          }else {
            next();
          }
      });

    }else {
       next();
    }

});

*/
};
