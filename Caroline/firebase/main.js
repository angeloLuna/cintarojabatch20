let btnLogin = document.getElementById("login");
let btnLogout = document.getElementById("logout");
let btnGuardar = document.getElementById("guardar");
let btnBorrar = document.getElementById("borrar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let occupacion = document.getElementById("occupacion");
let genero = document.getElementById("genero");
let idendificador = document.getElementById("identificador");
let DataUsuario = document.getElementById("dataUsuario");

//Referencia de la base de datos 
const ref = firebase.database().ref("usuarios");

//console.log(btnLogin, btnLogout);

//
firebase.auth().onAuthStateChanged(function(user){
    console.log(user)
    if (user) {
        console.log("hay usuarios")
        showLogout()
    }else {
        console.log("no hay usuario")
        showLogin()
    }
})

//Mostrar Logout
const showLogout = () => {
    btnLogin.style.display = "none";
    btnLogout.style.display = "block";
}
//Mostrar Login
const showLogin = () => {
    btnLogin.style.display = "block";
    btnLogout.style.display = "none";
}

//Iniciar sesion
btnLogin.addEventListener("click", function(){
    console.log("login");
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly")

    firebase.auth().signInWithPopup(provider).then((user)=>{
        console.log(user);

    }).catch((error)=>{
        console.log(error);
    })
})

btnLogout.addEventListener("click", ()=>{
    firebase.auth().signOut().then(function(){
        alert("Se ha cerrado la sesión");
    })
})

btnGuardar.addEventListener("click", ()=>{
    let objeto = {
        nombre: nombre.value,
        apellido: apellido.value,
        occupacion: occupacion.value,
        genero: genero.value
    }
    console.log(objeto);

    ref.push(objeto).then(()=>{
        alert("Se subió");
    }).catch((error)=>{
        console.log(error);
    })
})

ref.once("value", function(data) {
    console.log("XD",data.val())
    let dat = data.val();
    let nombres = ""
    for(let i in dat) {
        console.log(dat[i].nombre);
        nombres += dat[i].nombre + " ";
    }
        //dataUsuario.innerHTML = data.val()
        dataUsuario.innerHTML = nombres;
})

btnBorrar.addEventListener("click", ()=>{

    ref.child(identificador.value).remove().then(()=>{
        alert("Se borro el usuario");
 }).catch((error)=>{
        console.log(error)
    })

})








// btnBorrar.addEventListener("click", async ()=>{
//     try {
//         await ref.child(identificador.value).remove()
//         alert("Se borro")
//     } catch (error) {
//         console.log(error)
//     }
// })
