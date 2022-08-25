const axios = require('axios');

function rutApi (rut) {

    return new Promise(function (resolve,reject) {
        axios({
            method: 'post',
            url: `https://r.rutyfirma.com/pr/${rut}`,
          })
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


module.exports = rutApi;