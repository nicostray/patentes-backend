const ordenarNombre = require("./ordenarNombre")

function extraerElementosRut (datos) {
    const aux = datos.split('<td>')
    const aux1 = (aux.map(element => element.replace('</td>','')))
    const aux2 = (aux1.map(element => element.replace('<tr>','')))
    const aux3 = (aux2.map(element => element.replace('</tr>','')))

    
    const respuesta = {
        "propietario" : [
            {
                "propiedad" : "Nombre",
                "valor" : ordenarNombre(aux3[1])
            },
            {
                "propiedad" : "Rut",
                "valor" : aux3[2]
            },
            {
                "propiedad" : "Dirección",
                "valor" : aux3[4]
            },
            {
                "propiedad" : "Ciudad",
                "valor" : aux3[5]
            },
            
        ]
    }

    return respuesta
}

module.exports = extraerElementosRut;