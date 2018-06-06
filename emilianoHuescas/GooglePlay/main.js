let btnLogin = document.getElementById("login");
let f1 = document.getElementById("f1");
let f2 = document.getElementById("f2");
let f3 = document.getElementById("f3");
let f4 = document.getElementById("f4");
let f5 = document.getElementById("f5");
let f6 = document.getElementById("f6");
let f7 = document.getElementById("f7");
let f8 = document.getElementById("f8");
let f9 = document.getElementById("f8");

// referencia a la base de datos
const ref = firebase.database().ref("funciones");


// Escuchador de sesion
firebase.auth().onAuthStateChanged(function(user){
  console.log(user)
  if (user) {
    console.log("hay usuario")
    // showLogout();
  }else{
    console.log("no hay usuario")
    // showLogin();
  }
});

// Ìniciar sesion
btnLogin.addEventListener("click", function() {
  console.log("login");

    let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

  firebase.auth().signInWithPopup(provider).then((user)=>{
    console.log(user)
  }).catch((error)=>{
    console.log(error)
  });

});

