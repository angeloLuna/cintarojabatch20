let express = require ('express');
let app = express();

app.use(function(req, res, next) {

 res.header("Access-Control-Allow-Origin", "*");

 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

 next();

});

app.get("/miperfil", (request, response)=>{
  response.send({
    f1: "Lo estoy intentando",
    f2: "Escucha tu música en Android, iOS y la Web",
    f3: "Sube hasta 50.000 de tus cancionesLo estoy intentando",
    f4: "Radio para tu estado de ánimo, tu actividad y diferentes situaciones",
    f5: "Salta todas las canciones que quieras",
    f6: "Escucha música sin publicidad de forma ininterrumpida",
    f7: "Descarga tu música y reprodúcela sin conexión",
    f8: "Disfruta también de YouTube Red. Más información.",
    f9: "Creo que ya"
  });

});

app.get("/", (request, response)=>{
  response.send({
    message: "hola"
  });

});

app.listen(3000, ()=>{
  console.log("Estoy en el puerto 3000")
});

