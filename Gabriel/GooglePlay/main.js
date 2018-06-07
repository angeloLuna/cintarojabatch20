// // Create reference
  const dbRefObject = firebase.database().ref().child('object');


dbRefObject.on('value', function(data){  //on esta escuchando siempre y once no, sólo lo hace una vez
let dat = data.val();
let sentencias = "";
sent.innerHTML = dat.dos;
sent1.innerHTML= dat.tres;
sent2.innerHTML= dat.cuatro;
sent3.innerHTML= dat.cinco;
sent4.innerHTML= dat.seis;
sent5.innerHTML= dat.siete;
sent6.innerHTML= dat.ocho;
sent7.innerHTML= dat.nueve;
sent8.innerHTML= dat.diez;



});
