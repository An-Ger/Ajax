const { response } = require('express');
const express = require('express')
const app = express();
app.all('/json-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    const data = {
        name: 'Yorn'
    }
    let str = JSON.stringify(data)
    response.send(str)
})
app.listen(8000, () => {
    console.log('8000 is listening');
})