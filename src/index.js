
const express = require('express');
const app = express();
const requests = require('requests');
const hbs = require('hbs');
const path = require('path');



const createPath = path.join(__dirname, '../partials')
app.use(express.static('public'));

const staticPath = path.join(__dirname, '../public')
app.use(express.static(staticPath));

app.set("view engine", "hbs")
hbs.registerPartials(createPath);

app.get("/",(req, res)=>{
    res.render("index")
})

app.get("/getdata",(req,res)=>{
 requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=14851c80360ade07d051285faa23734f`)
            .on('data', function (chunk) {
                const objdata = JSON.parse(chunk);
                const arrdata = [objdata];
                res.render("home",{
                    tempval: (arrdata[0].main.temp-273.15).toFixed(2),
                    tempmin: (arrdata[0].main.temp_min-273.15).toFixed(2),
                    tempmax :(arrdata[0].main.temp_max-273.15).toFixed(2),
                    location: arrdata[0].name,
                    country: arrdata[0].sys.country,
                    tempStatus :arrdata[0].weather[0].main
                })
            })
    
            
    });

app.listen(8080);