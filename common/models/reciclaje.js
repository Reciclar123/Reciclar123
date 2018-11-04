'use strict';
var app = require('../../server/server');

module.exports = function(Reciclaje) {


  Reciclaje.recoger =  function(id, cb) {
    let result = [];
     Reciclaje.findById(id,  (err, reciclaje)=>{ // si encuentra reciclaje

       if (err || !reciclaje)
         {
          cb(null,err);
         }

        const Material = app.models.MaterialPerson;
        const TipoMaterial = app.models.tiposMaterial;
        reciclaje = reciclaje.toJSON();

        Material.find(
        {where:{ or: reciclaje.materiales}},(error,materiales)=>{
           if (!error && materiales) {


        let tiposMaterial = [];

        for (var i = 0; i < materiales.length; i++)  //searh TipoMaterial
                  tiposMaterial.push({id:materiales[i].tipoId})

          //update models
         Material.updateAll({
              or: reciclaje.materiales
          },{status:'entregado',recicladorRecolecto:reciclaje.recicladorRecolecto},(errsave,info)=>{

              if (!errsave) {

                TipoMaterial.find({where:{ or: tiposMaterial}},(er,tipos)=>{

                      if (!er) {


                       let gotasRedimir = 0;
                        for (var i = 0; i < materiales.length; i++)
                        {
                           let material = materiales[i];
                           let tipoOb = tipos[tipos.findIndex(x => x.id == material.tipoId)];
                           let tipo =  (tipoOb) ? tipoOb.descripcion : 'Mixto';
                           let id = material.id;
                           let unidadOb = (tipoOb) ?  tipoOb.unidades[tipoOb.unidades.findIndex(x => x.id == material.unidadId)] : null;
                           let unidades = (unidadOb) ? unidadOb.descripcion : 'Caja pequeña' ;
                           if (unidadOb) {
                                gotasRedimir+= unidadOb.gotasRecompensa;
                           }
                          result.push({id,tipo,unidades});
                        }

                        reciclaje.status = "recogido";
                        reciclaje.gotasRedimir = gotasRedimir;
                        Reciclaje.upsert(reciclaje);
                          cb(null,result,id);

                      }else {
                        var errorm = new Error("No se encuentra el tipo Material");
                        errorm.status = 401;
                        cb(errorm);;
                      }

                });

              }
          });


           }
           else {
             var errorm = new Error("No se encuentra los materiales");
             errorm.status = 401;
             cb(errorm);

           }
        });




     });

    }


    Reciclaje.calificar = function(data, cb) {

         Reciclaje.findById(data.id,(err,reciclaje)=>{

           if (!err && reciclaje) {

             //changue gotas donador
             const Person = app.models.Person;
             Person.findById(reciclaje.personId,(error,person)=>{

                  if (!error && person) {

                      let calificacionEstado = data.calificacionEstado;
                      let calificacionVolumen = data.calificacionVolumen;
                      let recicladorRecolecto = data.recicladorRecolecto;
                      let gotasRedimir = reciclaje.gotasRedimir*calificacionEstado*calificacionVolumen;
                      let id = data.id;
                      person.gotas = person.gotas + gotasRedimir;
                      Person.upsert(person);

                      cb(null,{calificacionEstado,calificacionVolumen,recicladorRecolecto,id});

                  }else {
                    var errorm = new Error("No se encontro al donador");
                    errorm.status = 401;
                    cb(errorm);
                  }
             });


           }else {
             var errorm = new Error("No se encuentra el reciclaje");
             errorm.status = 401;
             cb(errorm);
           }
        });

         //});
    }


  Reciclaje.remoteMethod(
'calificar',
{

  accepts: [
    {arg: 'body', type: 'object', http: { source: 'body' } },
  ],
  returns: [{arg: 'data', type: 'array'},],

}
);


  Reciclaje.remoteMethod(
'recoger',
{

  accepts: [
    {arg: 'id', type: 'string', required: true}
  ],
  returns: [{arg: 'materiales', type: 'array'},{arg: 'reciclajeid', type: 'string'}],
  http: {path: '/:id/recoger', verb: 'get'}
}
);
};
