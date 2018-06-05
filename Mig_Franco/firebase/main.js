
//elementos de html
  //botones
let btnLogin = document.getElementById("login");
let btnLogout = document.getElementById("logout");
let btnGuardar = document.getElementById("guardar");
let btnBorrar = document.getElementById("borrar");
  //inputs
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let ocupacion = document.getElementById("ocupacion");
let genero = document.getElementById("genero");
let id = document.getElementById("id");
let dataUsuario = document.getElementById("dataUsuario");



//DB no relacional basada en objetos
//Referencia a la Base de datos
const ref = firebase.database().ref("usuarios");

//Escuchador de sesion
firebase.auth().onAuthStateChanged(function(user){
  console.log(user);
  if(user){
    console.log("hay usuario");
    showLogout();
  }else{
    console.log("no hay usuario");
    showLogin();
  }
})

//ocultar logout
const showLogout = () =>{
  btnLogin.style.display = "none";
  btnLogout.style.display = "block";
}
//ocultar login
const showLogin = () =>{
  btnLogin.style.display = "block";
  btnLogout.style.display = "none"
}

//Iniciar sesión
btnLogin.addEventListener("click",function(){
  console.log("login");
  
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  firebase.auth().signInWithPopup(provider).then((user)=>{
    console.log(user);
  
  }).catch((error)=>{
    console.log(error);
  })

});

//cerrar sesión
btnLogout.addEventListener("click", ()=>{
  alert("se ha cerrado la sesion");
  
  firebase.auth().signOut().then(()=>{
    showLogin();
    console.log("ya salí");
  }).catch(()=>{    
    showLogout();
  })
})

btnBorrar.addEventListener("click", ()=>{
  
  ref.child(id.value).remove().then(()=>{
    alert("se borró el usuario: "+borid);
    
  }).catch((error)=>{
    console.log(error);
  })
})



btnGuardar.addEventListener("click", ()=>{
  //.value para obtener el valor del input
  let objeto = {
    nombre: nombre.value,
    apellido: apellido.value,
    ocupacion: ocupacion.value,
    genero: genero.value
  }
  console.log(objeto);

  ref.push(objeto).then(()=>{
    alert("se subió");
  }).catch((error)=>{nombre
    console.log(error);
  })
})

//se jala el valor que hay en la base de datos.. es importante el .val()
//con ref.on es para que la data base se actualice en tiempo real
//con .once solo se hace 1 vez y hay que recargar la página para actualizar
ref.on('value', (data)=>{
  console.log("lol",data.val())
  let dat = data.val()
  let name = ""
  //agarra el id como i
  for(let i in dat){
   console.log(dat[i].nombre);
   name += dat[i].nombre + " ";
  }
  dataUsuario.innerHTML = name;

})



//push    crea un nuevo nodo en la BD y le da un nuevo identificador


//update    cambiar los valores de un objeto en la BD y en caso de que no exista lo va a crear
//firebase.database().ref("usuarios").child("-LDntBRuuOdW5o3zj5VD").update({apellido: Franco})


//set   reescribe el valor del objeto y todo lo demás que no le pasaste lo va a borrar
//firebase.database().ref("usuarios").child("-LDntBRuuOdW5o3zj5VD").set({apellido: Franco})


//remove    borra todo de la base de datos
//firebase.database().ref("usuarios").child("-LDntBRuuOdW5o3zj5VD").remove()










