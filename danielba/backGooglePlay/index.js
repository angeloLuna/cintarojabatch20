let express = require('express');
let app = express();


app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.get('/',(request,response)=>{

  response.send({
    message:"hola",
  });

});


app.get('/miperfil',(request,response)=>{

  response.send({
    message:"hola Usuario",
  });

});



app.get('/mibackend',(request,response)=>{

  response.send({
    funcion_1:"Escucha tu música en Android, iOS y la Web",
    funcion_2:"Sube hasta 50.000 de tus canciones",
    funcion_3:"Radio para tu estado de ánimo, tu actividad y diferentes situaciones",
    funcion_4:"asjhjashdhj de forma ininterrumpida",
    funcion_5:"Descarga tu música y reprodúcela sin conexión",
    funcion_6:"Disfruta también de YouTube Red. Más información",
  });

});


//listen ultima instruccion 


app.listen(3000,()=>{
  console.log("Estoy en el puerto 3000");
});

