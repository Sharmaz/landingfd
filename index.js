'use strict'
const express = require('express')
const web = express()
const port = 2368

var server

server = web.listen(port, function () {
	console.log('Servidor corriendo en ' + port)
})

web.use('/static', express.static('static'))
web.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html')
})