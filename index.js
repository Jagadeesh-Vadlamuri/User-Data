var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var router = require('./routes/routes');

var app = express();
app.use(express.json());
app.use(cors());
app.use('/', router);

var PORT = process.env.PORT || 8080;

var URI = "mongodb://Jagadeesh-Vadlamuri:J5svU3WF6ujwEckm@ac-r9i8avh-shard-00-00.2uv4yds.mongodb.net:27017,ac-r9i8avh-shard-00-01.2uv4yds.mongodb.net:27017,ac-r9i8avh-shard-00-02.2uv4yds.mongodb.net:27017/?ssl=true&replicaSet=atlas-xr6mi2-shard-0&authSource=admin&retryWrites=true&w=majority"
mongoose.connect(URI).then(() => {
    try{
        app.listen(PORT, () => {
            console.log("Mongo DB Connected on"+" "+PORT)
        })
    } catch(err){
        console.log(err)
    }
});

app.get('/', (req, res) => {
    res.send('Welcome to the API System')
  })