// var request = new XMLHttpRequest();
// request.open('GET', 'http://localhost:3000/miperfil', true);

// request.onload = function() {
//   if (request.status >= 200 && request.status < 400) {
//     // Success!
//     console.log("peticion exitosa");
//     var data = JSON.parse(request.responseText);
//     console.log(data);
//     var tag = document.getElementById('main-text');
//     console.log(tag.innerText);
//     tag.innerText = data.message;


//   } else {
//     // We reached our target server, but it returned an error
//     console.log("Algo se rompió")
//   }
// };

// request.onerror = function() {
//   // There was a connection error of some sort
//   console.log("hub un error");
// };

// request.send();


var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/mibackend', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    console.log("peticion exitosa");
    var data = JSON.parse(request.responseText);
    console.log(data);

    var tag = document.getElementById('funcion_1');
    console.log(tag.innerText);
    tag.innerText = data.funcion_1;

    var tag = document.getElementById('funcion_2');
    console.log(tag.innerText);
    tag.innerText = data.funcion_2;

    var tag = document.getElementById('funcion_3');
    console.log(tag.innerText);
    tag.innerText = data.funcion_3;

    var tag = document.getElementById('funcion_4');
    console.log(tag.innerText);
    tag.innerText = data.funcion_4;

    var tag = document.getElementById('funcion_4');
    console.log(tag.innerText);
    tag.innerText = data.funcion_4;

        var tag = document.getElementById('funcion_5');
    console.log(tag.innerText);
    tag.innerText = data.funcion_5;

    var tag = document.getElementById('funcion_6');
    console.log(tag.innerText);
    tag.innerText = data.funcion_6;

  } else {
    // We reached our target server, but it returned an error
    console.log("Algo se rompió")
  }
};

request.onerror = function() {
  // There was a connection error of some sort
  console.log("hub un error");
};

request.send();