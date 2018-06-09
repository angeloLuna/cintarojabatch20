let funcion1 = document.getElementById("funcion_1");
let funcion2 = document.getElementById("funcion_2");
let funcion3 = document.getElementById("funcion_3");
let funcion4 = document.getElementById("funcion_4");
let funcion5 = document.getElementById("funcion_5");
let funcion6 = document.getElementById("funcion_6");
let btnlogin = document.getElementById("login");


const ref = firebase.database().ref("funciones");


firebase.auth().onAuthStateChanged(function(user){
  console.log(user)
  if (user) {
    console.log("hay usuario");

  }else{
    console.log("no hay usuario");

  }
})



btnlogin.addEventListener("click",function(){
  console.log("login");

  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  firebase.auth().signInWithPopup(provider).then((user)=>{console.log(user)})
  .catch((error)=>{console.log(error)})
});






ref.on('value', (data)=>{
  console.log("XD",data.val())

  let dat = data.val()

  funcion1.innerHTML = dat.funcion1 ;
})

ref.on('value', (data)=>{
  console.log("XD",data.val())

  let dat = data.val()

  funcion2.innerHTML = dat.funcion2 ;
})

ref.on('value', (data)=>{
  console.log("XD",data.val())

  let dat = data.val()

  funcion3.innerHTML = dat.funcion3 ;
})

ref.on('value', (data)=>{
  console.log("XD",data.val())

  let dat = data.val()

  funcion4.innerHTML = dat.funcion4 ;
})

ref.on('value', (data)=>{
  console.log("XD",data.val())

  let dat = data.val()

  funcion5.innerHTML = dat.funcion5 ;
})

ref.on('value', (data)=>{
  console.log("XD",data.val())

  let dat = data.val()

  funcion6.innerHTML = dat.funcion6 ;
})














