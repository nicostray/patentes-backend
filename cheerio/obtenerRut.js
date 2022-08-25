const rutApi = require('../axios/rutApi');
const extraerElementosRut = require('../helpers/extraerElementosRut');

function obtenerRut (rut) {
    
    return new Promise(function (resolve,reject) {
        rutApi(rut)
            .then(res => {
                resolve(extraerElementosRut(res))
            })
            .catch(err => {
                reject(err)
            })
    })
}

module.exports = obtenerRut;