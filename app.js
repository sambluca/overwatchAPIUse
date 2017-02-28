const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const heroData = require('./hero-data');
const homepage = require('./index')


app.get('/', function (req, res) {

    heroData().then((result) => {
        
        res.send(homepage(result));

    });
  
})

app.listen(3000, function () {
  console.log('WatchOver is now running on localhost:3000!')
})