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

             next();
          }else {

            next();
          }
      });
    }else {
      delete ctx.instance.pass;
       next();
    }

});


};
