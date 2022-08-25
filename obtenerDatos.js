const obtenerPatente = require("./cheerio/obtenerPatente")
const obtenerRut = require("./cheerio/obtenerRut")

const obtenerDatos = async (patente) => {
   const datosPatente = await obtenerPatente(patente)
   if(datosPatente!== 'error'){
      const direccionPersona = await obtenerRut(datosPatente.vehiculo[0].valor)
      datosPatente.vehiculo.shift() //elimino el rut
      const respuesta = Object.assign({}, datosPatente, direccionPersona);
      return respuesta
   }else {
      return 'error'
   }

}

module.exports = obtenerDatos;