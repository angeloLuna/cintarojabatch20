//Elementos de html

let btnLogin = document.getElementById("login");
let btnLogout = document.getElementById("logout");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let genero = document.getElementById("genero");
let ocupacion = document.getElementById("ocupacion");
let btGuardar = document.getElementById("guardar");
let btBorrar = document.getElementById("borrar")


//referencia a la base de datos
//metodos firebase database: push update set remove y child es para identificar el código único 

const ref = firebase.database().ref("usuarios");




//Escuchador se sesion

firebase.auth().onAuthStateChanged(function(user){
  console.log(user)
  if (user) {
    console.log("hay usuario");
    showLogout();
  }else{
    console.log("no hay usuario");
    showLogin();
  }
})

//Mostrar Logout
const showLogout = ()=> {
  btnLogin.style.display ="none";
  btnLogout.style.display ="block";
  
}

//Ocultar logout
const showLogin = ()=>{
  btnLogin.style.display ="block";
  btnLogout.style.display ="none";
}


//hacer login
 
btnLogin.addEventListener("click",function(){
  console.log("login");

  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  firebase.auth().signInWithPopup(provider).then((user)=>{console.log(user)})
  .catch((error)=>{console.log(error)})
});

btnLogout.addEventListener("click",()=>{
  firebase.auth().signOut().then(()=>{
    alert("Se ha cerrado la sesión")
  })

});


btGuardar.addEventListener("click", ()=>{
  //.value para obtener el valor de un input
  // console.log(nombre.value)

  let objeto = {
    nombre: nombre.value,
    appellido: apellido.value,
    genero: genero.value,
    ocupacion: ocupacion.value

  }

  console.log(objeto)
  ref.push(objeto).then(()=>{alert("se subió");
  }).catch((error)=>{console.log(error)})
});

btBorrar.addEventListener("click", ()=>{
  //.value para obtener el valor de un input
  // console.log(nombre.value)

  ref.child(uid.value).remove().then(()=>{alert("se borró");
  }).catch((error)=>{console.log(error)})
})






