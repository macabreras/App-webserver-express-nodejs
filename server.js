/*  
Servidor de ecpress de npm para mostrar mi Web 
*/
const express = require("express");
const app = express();
const hbs = require("hbs");

// importo los helpers:
require("./hbs/helpers");

// Cambios para subir el proyecto a Heroku:
// 1: 
const port = process.env.PORT || 3000;

// Especifico el Midelwer:
app.use(express.static(__dirname + "/public"));

// Exprees Hbs
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

// Esta es la pantalla principal que me genera el pleca, aquí se declara los path

app.get("/", (req, res) => {
  res.render("home", {
    name: " mIgUel caBrera",
    anio: new Date().getFullYear(),
  });
});

app.get("/about", (req, res) => {
  res.render("about", {});
});

// 2: llamar al port, luego ir al packague.jason y crear start
app.listen(port, () => {
  console.log(`Escuchando peticiones en puerto ${ port }`);
});
