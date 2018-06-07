let express = require('express');
let app = express();

app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

app.get('/', (request, response)=> {
    response.send("hola");
});

app.listen(3000, () => {
    console.log("Estoy en el puerto 3000");
});
