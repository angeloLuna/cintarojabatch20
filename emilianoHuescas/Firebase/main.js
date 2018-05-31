let btnLogin = document.getElementById("login");
let btnLogout = document.getElementById("logout");
let btnLGuardar = document.getElementById("guardar");
let btnBorrar = document.getElementById("borrar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let ocupacion = document.getElementById("ocupacion");
let genero = document.getElementById("genero");
let UID = document.getElementById("UID");

//referencia a la base de datos
const ref = firebase.database().ref("usuarios");


// Escuchador de sesion
firebase.auth().onAuthStateChanged(function(user){
  console.log(user)
  if (user) {
    console.log("hay usuario")
    showLogout();
  }else{
    console.log("no hay usuario")
    showLogin();
  }
})

// ocultar logout
const showLogout = () => {
  btnLogin.style.display = "none";
  btnLogout.style.display = "block";
}

// ocultar logout
const showLogin = () => {
  btnLogin.style.display = "block"
  btnLogout.style.display = "none"
}


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

btnLogout.addEventListener("click", ()=>{
  firebase.auth().signOut().then(()=>{
    alert("Se ha cerrado la sesion")
  })
})

btnLGuardar.addEventListener("click", ()=>{
  //value para obtener el valoe de un input
  //console.log(nombre.value) 
  let objeto = {
    nombre: nombre.value,
    apellido: apellido.value,
    ocupacion: ocupacion.value,
    genero: genero.value,
  }
  console.log(objeto)

  ref.push(objeto).then(()=>{
    alert("se subio");
  }).catch((error)=>{
    console.log(error)
  })

})

btnBorrar.addEventListener("click", ()=>{
  console.log("se borro")
  ref.child(UID.value).remove()
  })

// Metodos para interactuar con base de datos de Firebase
// .push
// .update
// .style
// .remove