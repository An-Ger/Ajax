const { response } = require('express');
const express = require('express')
const app = express();
app.all('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin','*')
    setTimeout(() => {
        response.send('@')
    }, 3000)
})
app.listen(8000, () => {
    console.log('8000 is listening');
})