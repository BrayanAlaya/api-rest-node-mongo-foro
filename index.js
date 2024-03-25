'use strict'

var mongoose = require("mongoose")

var port = "https://api-rest-node-mongo-foro.vercel.app/"

// var port = process.env.PORT || 2500;

var app = require("./app");
/*mongodb+srv://antonyalaya96:a4Qw7NHqzxnbslWV@cluster0.77cqee1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0*/
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://antonyalaya96:a4Qw7NHqzxnbslWV@cluster0.77cqee1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true })
    .then(()=>{
        app.listen(port)
    })
    .catch(error => console.log(error))