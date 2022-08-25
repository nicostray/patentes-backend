
# Backend de patentes chilenas

Es necesario correr en local este servidor para hacer uso de la web
https://stray.cl/patentes-chile/  
  
  

## Referencias a la API

#### Obtener datos de patente

```http
  POST http://localhost:3050/api/:patente
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `patente` | `string` | **Requerido**. Patente que se buscará |

Nota: Para consumirla desde otros sitios, basta con cambiar la configuración de cors.