'use strict';
var app = require('../../server/server');

module.exports = function(Materialperson) {

Materialperson.solicitudes = function (options,cb) {

       let find = {};

        if (options !== undefined) {
           options = JSON.parse(options);
            find = {where: { and : [{status:'publicado'}, {tipoId: { like: options.tipoId} }]}};
        }else {
           find = {where: {status:'publicado'}};
        }
        Materialperson.find(find,function (err,materiales)
        {
              let result = [] ;
              const AddressPerson = app.models.AddressPerson;
              if (materiales) {
                 var i = 0

                let address = [];

                 for (var i = 0; i < materiales.length; i++)  //searh address para recoger materiales
                 {
                       if (materiales[i].addressRecoleccionId) {
                         address.push({id:materiales[i].addressRecoleccionId})
                       }
                 }

                AddressPerson.find({where:{ or: address}},(er,direcciones)=>{

                  for (var i = 0; i < materiales.length; i++)
                  {
                     let material = materiales[i];
                     let id = material.id;
                     let addressOb = direcciones[direcciones.findIndex(x => x.id == material.addressRecoleccionId)];
                     if (addressOb && addressOb.address) {
                       let address = addressOb.address;
                       result.push({id,address});
                     }
                  }

                  cb(null,result);
                });

             }else {
               cb(null,result);
             }
        });
}

Materialperson.remoteMethod('solicitudes',{
accepts: [{arg: 'options', type: 'string',required:false,root: true}],
returns: [{arg: 'materiales', type: 'array'}],
http: {path: '/solicitudes', verb: 'get'}});

};
