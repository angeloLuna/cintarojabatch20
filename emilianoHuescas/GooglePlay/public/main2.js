var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/miperfil', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    console.log("Peticion exitosa");
    var data = JSON.parse(request.responseText);
    console.log(data);
    var tag = document.getElementById("f1");
    console.log(tag.innerText);
    tag.innerText = data.f1;
    var tag = document.getElementById("f2");
    console.log(tag.innerText);
    tag.innerText = data.f2;
    var tag = document.getElementById("f3");
    console.log(tag.innerText);
    tag.innerText = data.f3;
    var tag = document.getElementById("f4");
    console.log(tag.innerText);
    tag.innerText = data.f4;
    var tag = document.getElementById("f5");
    console.log(tag.innerText);
    tag.innerText = data.f5;
    var tag = document.getElementById("f6");
    console.log(tag.innerText);
    tag.innerText = data.f6;
    var tag = document.getElementById("f7");
    console.log(tag.innerText);
    tag.innerText = data.f7;
    var tag = document.getElementById("f8");
    console.log(tag.innerText);
    tag.innerText = data.f8;
    var tag = document.getElementById("f9");
    console.log(tag.innerText);
    tag.innerText = data.f9;
  } else {
    // We reached our target server, but it returned an error
    console.log("Algo se rompio");

  }
};

request.onerror = function() {
  console.log("Hubo un error");
  // There was a connection error of some sort
};

request.send();

