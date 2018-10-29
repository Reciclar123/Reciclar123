'use strict';
var app = require('../../server/server');


module.exports = function(Person) {

Person.validatesUniquenessOf('telefono','email','username');


  Person.afterRemote('login', function(ctx, modelInstance, next) {
var person = {};


    if (ctx.result)
    {

    Person.findById(ctx.result.userId,(error,p)=>{

      if (!error ) {

        ctx.result.nombre=  p.nombre;
          ctx.result.rol=  p.rol;
            ctx.result.cedula=  p.cedula;
              ctx.result.gotas=  p.gotas;
                ctx.result.telefono=  p.telefono;
                ctx.result.email=  p.email;
                ctx.result.ciudad=  p.ciudad;
      }


      next();

    });




}else
 next();

  });
};
