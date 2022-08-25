
function estructurarPatente (datos) {

    const datosVehiculo = {
        "vehiculo" : [
            {
                "propiedad" : "Rut",
                "valor" : datos[0]
            },
            {
                "propiedad" : "Patente",
                "valor" : datos[2]
            },
            {
                "propiedad" : "Tipo",
                "valor" : datos[3]
            },
            {
                "propiedad" : "Marca",
                "valor" : datos[4]
            },
            {
                "propiedad" : "Modelo",
                "valor" : datos[5]
            },
            {
                "propiedad" : "Año",
                "valor" : datos[6]
            },
            {
                "propiedad" : "Color",
                "valor" : datos[7]
            },
            {
                "propiedad" : "N° Motor",
                "valor" : datos[8]
            },
            {
                "propiedad" : "N° Chasis",
                "valor" : datos[9]
            },
            {
                "propiedad" : "Multas",
                "valor" : datos[10]
            }
        ]
    }

    return datosVehiculo;
}

module.exports = estructurarPatente;