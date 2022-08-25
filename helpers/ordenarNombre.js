function ordenarNombre (cadena) {
    let nombre = cadena.split(' ')
    const primerApellido = nombre[0]
    nombre.shift()

    const segundoApellido = nombre[0]
    nombre.shift()

    nombre.push(primerApellido)
    nombre.push(segundoApellido)

    return nombre.join(' ')
}

module.exports = ordenarNombre;