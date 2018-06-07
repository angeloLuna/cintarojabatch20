var request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/', true);

request.onload = function() {
if (request.status >= 200 && request.status < 400) {
  // Success!
  console.log("Peticion exitosa");
  //var data = JSON.parse(request.responseText);
} else {
  // We reached our target server, but it returned an error
  console.log("Algo se rompió");
}
};
request.onerror = function() {
// There was a connection error of some sort
console.log("Hubo un error");
};
request.send();
