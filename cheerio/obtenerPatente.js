const cheerio = require('cheerio');
const patentesApi = require('../axios/patentesApi');
const estructurarPatente = require('../helpers/estructurarPatente');

function obtenerPatente (patente) {
    let texto = []
    
    return new Promise(function (resolve,reject) {
        patentesApi(patente)
        .then(res => {
            const $ = cheerio.load(res)
            $('table td').each((i, el) => {
                const num = i
                const info = $(el).html()
                if(num !== 0 && num !== 5 && num !== 6){
                    if(info.includes("<")){
                        return null
                    }else{
                        texto.push(info)
                    }
                }    
            })
            const respuesta = estructurarPatente(texto)
            if(respuesta.vehiculo[0].valor !== undefined){
                resolve(respuesta)
            }
                resolve('error')
            
        })

        .catch(err => {
            console.log(err)
            reject()
        })
    })
}

module.exports = obtenerPatente;