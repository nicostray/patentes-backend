const express = require('express');
const verificarPatente = require('./helpers/verificarPatente');
const obtenerDatos = require('./obtenerDatos');
const app = express()
const cors = require('cors')

const port = process.env.PORT || 3050;

app.listen(port,() => {
   console.log('Corriendo en el puerto',port)
})


app.use(cors({
    origin: 'https://stray.cl'
}))


app.get('/',(req,res) => {
   res.send('<h1>Backend de patentes chilenas</h1>')
})

app.post('/api/:patente', async (req, res) => {
   const patente = req.params.patente;
   if(verificarPatente(patente)){
      const respuesta = await obtenerDatos(patente)
      if(respuesta !== 'error'){
         res.send(respuesta)
      }else{
         res.status(400)
         res.send('patente no encontrada')
      }
   }else{
      res.status(400)
      res.send('bad request.')
   }
   
})