// Elementos de html
let btnLogin = document.getElementById("login");
let btnLogout = document.getElementById("logout");
let btnGuardar = document.getElementById("guardar");
let nombre = document.getElementById("nombre");
let dataUsuario = document.getElementById("dataUsuario");

// Referencia a la base de datos
const ref = firebase.database().ref("usuarios");

// Escuchador de sesion
firebase.auth().onAuthStateChanged(function(user){
  console.log(user)
  if (user) {
    console.log("hay usuario")
    showLogout()
  }else{
    console.log("no hay usuario");
    showLogin()
  }
})

// mostrar logout
const showLogout = () =>{
  btnLogin.style.display = "none";
  btnLogout.style.display = "block";
}

// ocultar logout
const showLogin = () =>{
  btnLogin.style.display = "block";
  btnLogout.style.display = "none";
}


// iniciar sesion
btnLogin.addEventListener("click", function(){
  console.log("login");

  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  firebase.auth().signInWithPopup(provider).then((user)=>{
    console.log(user)
  }).catch((error)=>{
    console.log(error)
  })
})


btnLogout.addEventListener("click", ()=>{
  firebase.auth().signOut().then(function(){
    alert("Se ha cerrado la sesión");
  })
})

btnGuardar.addEventListener("click", ()=>{
  // .value para obtener el valor de un input
  let objeto = {
    nombre: nombre.value
  }
  console.log(objeto)

  ref.push(objeto).then(()=>{
    alert("se subió");
  }).catch((error)=>{
    console.log(error)
  })
})


ref.once('value', function(data){
  console.log("XD",data.val())
  let dat = data.val()
  let nombres = ""
  for(let i in dat){

    console.log(dat[i].nombre);
    nombres += dat[i].nombre + " ";
  }
  dataUsuario.innerHTML = nombres;
})
















