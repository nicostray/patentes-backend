function verificarPatente (patente) {
    if(patente.length === 6){
        return true
    }else{
        return false
    }
}

module.exports = verificarPatente;