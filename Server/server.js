var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/api', function (req, res, next) {
    res.json({msg: 'Voilà ta data connard!'})
})

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})