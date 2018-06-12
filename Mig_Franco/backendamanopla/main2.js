
var request = new XMLHttpRequest();

//conexion para hacer peticiones 
request.open('GET', 'http://localhost:3000/', true);

//lo que se va a ejecutar cuando se termine de hacer la peticion
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    console.log("se rifó la petición");
    
    //var data = JSON.parse(request.responseText);
  } else {
    // We reached our target server, but it returned an error
    console.log("Valió");
    
  }
};

request.onerror = function() {
  console.log("Hubo un error");
  
  // There was a connection error of some sort
};

request.send();


