'use strict';
var app = require('../../server/server');


module.exports = function(Person) {

  Person.validatesUniquenessOf('telefono','email','username');

  Person.afterRemote('login', function(ctx, modelInstance, next) {
    if (ctx.result)
    {
         Person.findById(ctx.result.userId,(error,p)=>{
         if (!error ) {
             ctx.result.cedula=  p.cedula;
             ctx.result.nombre=  p.nombre;
             ctx.result.ciudad=  p.ciudad;
             ctx.result.rol=  p.rol;
             ctx.result.gotas=  p.gotas;
             ctx.result.fecha=  p.fecha;
             ctx.result.realm=  p.realm;
             ctx.result.username=  p.username;
             ctx.result.emailVerified = p.emailVerified;
             ctx.result.telefono=  p.telefono;
             ctx.result.email=  p.email;
             ctx.result.tokenId = ctx.result.id;

          }
      next();
    });
}else
 next();
 });

 Person.observe('after save', function(ctx, next) {
    if (ctx.isNewInstance !== undefined) { //new user
      console.log( Person.hashPassword(ctx.instance.password));
      Person.login({"username" : ctx.instance.username,"password" : Person.hashPassword(ctx.instance.password)}, (loginErr, loginToken)=>
      {

          if (loginToken) {
             ctx.instance.userId= loginToken.userId;
             ctx.instance.ttl= loginToken.ttl;
             ctx.instance.tokenId= loginToken.id;

             next();
          }else {
            next();
          }
      });
    }else {
       next();
    }

});
/*
     Person.observe('after save', async (ctx,next)=> {

        if (ctx.isNewInstance !== undefined) { //new user
          ctx.instance.userId = "";

        let login = await  Person.login({"username" : "string","password" : "string"}, (loginErr, loginToken)=>
           {
               if (loginToken) {

                  ctx.instance.userId = loginToken.userId +"";
                 //  ctx.instance.id= loginToken.id;
                  ctx.instance.ttl = loginToken.ttl +"";

                  console.log("login",ctx.instance.userId);
                  console.log(loginToken);

                  return ;
               }
               return;
           });

        }else return;
});


*/

};
