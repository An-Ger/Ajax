const { response } = require('express');
const express = require('express')
const app = express();
app.get('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    response.send('Hello, Ajax')
})
app.listen(8000, () => {
    console.log('8000 is listening');
})