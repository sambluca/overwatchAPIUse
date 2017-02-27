const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const heroData = require('./hero-data');


app.get('/', function (req, res) {

    heroData().then((result) => {
        const heroStats = result.heroes;
        for(var i = 0; heroStats.length >= i; i++){
            var display = heroStats[i]
            res.send(`<p>${display.name}</p>`);
            console.log(heroStats[i]);
        }
    });
  
})

app.listen(3000, function () {
  console.log('WatchOver is now running on localhost:3000!')
})