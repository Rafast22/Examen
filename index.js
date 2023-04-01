const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser());


const themePropertyRoute = require("./src/route/themes/themes_properties.route");

 
//Ruta raiz
app.get('/', function (req, res) {
    //Logica.
    res.send(`<div style=color:red><h1>Hello World</h1></div>
                <h2>Hola mundo</h2>`);
});





themePropertyRoute(app)



app.listen(3000);