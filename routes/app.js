var express = require('express');

var app = express.Router();


app.use('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    })
})

module.exports = app;

