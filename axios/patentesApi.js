const axios = require('axios');
const FormData = require('form-data');

function patentesApi (patente) {
    let formData = new FormData();
    formData.append('frmTerm', patente)
    formData.append('frmOpcion', "vehiculo")

    return new Promise(function (resolve,reject) {
        axios.post('https://www.patentechile.com/resultados',formData)
    .then(
        (res) => {
            const result = res.data
            resolve(result)
        },
        (error) => {
            reject(error);
        }
    )
    })
}


module.exports = patentesApi;