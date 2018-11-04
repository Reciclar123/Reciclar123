'use strict';
var app = require('../../server/server');

module.exports = function(Reciclaje) {


  Reciclaje.recoger =  function(id, cb) {
    let result = [];
     Reciclaje.findById(id,  (err, reciclaje)=>{

       if (err || !reciclaje)
         {
          cb(null, {"change":false,"err":"no-send"})
         }

        const Material = app.models.MaterialPerson;
        const TipoMaterial = app.models.tiposMaterial;
        reciclaje = reciclaje.toJSON();

        Material.find(
        {where:{ or: reciclaje.materiales}},(error,materiales)=>{
           if (!error ) {

              let tiposMaterial = [];
              for (var i = 0; i < materiales.length; i++)
                  tiposMaterial.push({id:materiales[i].tipoId})

              TipoMaterial.find({where:{ or: tiposMaterial}},(er,tipos)=>{

                    if (!er) {

                      for (var i = 0; i < materiales.length; i++)
                      {
                         let material = materiales[i];
                         let tipoOb = tipos[tipos.findIndex(x => x.id == material.tipoId)];
                         let tipo =  (tipoOb) ? tipoOb.descripcion : 'Mixto';
                         let id = material.id;
                         let unidadOb = (tipoOb) ?  tipoOb.unidades[tipoOb.unidades.findIndex(x => x.id == material.unidadId)] : null;
                         let unidades = (unidadOb) ? unidadOb.descripcion : 'Caja pequeña' ;
                        result.push({id,tipo,unidades});
                      }

                    }

                  cb(null,result,id);
              });


           }
           else {
              cb(null,result);
           }
        });




     });

    }


    Reciclaje.calificar = async function(data, cb) {

        const reciclaje = await Reciclaje.findById(data.id);
      //  console.log(reciclaje.materiales);
        let gotasRedimir = Math.round(Math.random());
         //reciclaje.updateAttributes({gotasRedimir,calificacionEstado,calificacionVolumen,recicladorRecolecto},(err,data)=>{
          //    if (!err) {
            //  data;
              //}
              let calificacionEstado = data.calificacionEstado;
              let calificacionVolumen = data.calificacionVolumen;
              let recicladorRecolecto = data.recicladorRecolecto;
              let id = data.id;

              cb(null,{gotasRedimir,calificacionEstado,calificacionVolumen,recicladorRecolecto,id});

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
