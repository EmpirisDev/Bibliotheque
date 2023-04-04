var express = require('express')
var cors = require('cors')
const mongoose = require('mongoose');
var app = express()
const uri = "mongodb+srv://admin:Antoine358@bibliotheque.cjuyuyw.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('Connecté à la base de données');
    } catch (error) {
        console.log(error);
    }
}

connect()
app.use(cors())


app.get('/api', function (req, res, next) {

    res.json({message: 'Voilà ta data connard!'})


})

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})