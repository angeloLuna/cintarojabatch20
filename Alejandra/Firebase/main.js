/* primero firebase login 
2. firebase Init (crear proyecto, escoger el tipo)
3.firebase serve (para ingresa al host) */

//Elementos de html
let btnLogin = document.getElementById("login");
let btnLogout = document.getElementById("logout");
let btnGuardar = document.getElementById("guardar");
let btnBorrar = document.getElementById("borrar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let genero = document.getElementById("genero");
let ocupacion = document.getElementById("ocupacion");
let identificacion = document.getElementById("identificacion");



//referencia de base de datos
const ref = firebase.database().ref("usuarios");


//escuchador de sesion inica cuando se recarge, careg, inicia sesion o cierra sesion
firebase.auth().onAuthStateChanged(function(user){
    console.log(user)
    if(user) {
        console.log("hay usuario")
        showLogout()
    } else{
        console.log("no hay usuario");
        showLogin()
    }
})

// ocultar logout, block lo hace visible, none es para bloquear
const showLogout = () =>{
    btnLogin.style.display = "none";
    btnLogout.style.display = "block";
}

const showLogin = () => {
    btnLogin.style.display = "block";
    btnLogout.style.display = "none";
}

//iniciar sesion
btnLogin.addEventListener("click", function(){
    console.log("login");

    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    firebase.auth().signInWithPopup(provider).then((user) => {
        console.log(user)
    }).catch((error) => {
        console.log(error)
    })
})

btnLogout.addEventListener("click", () => {
   firebase.auth().signOut().then(function(){
       alert("Se ha cerrado la sesion");
   })
})

btnGuardar.addEventListener("click", () => {
    let objeto = {
        nombre: nombre.value,
        apellido: apellido.value,
        genero: genero.value,
        ocupacion: ocupacion.value
    }
    console.log(objeto)

    ref.push(objeto).then(() => {
        alert("se subio");
    }).catch((error) =>{
        console.log(error)
    })
})

btnBorrar.addEventListener("click", () => {
    ref.child(identificacion.value).remove().then(() => {
        alert("se borro");
    }).catch((error) =>{
        console.log(error)
    })
})

//push

//update firebase.database().ref("usuarios").child("LDnuKZyqiAzm5ClNlDZ").update({apellido:"Luna"})


//set

//remove 

