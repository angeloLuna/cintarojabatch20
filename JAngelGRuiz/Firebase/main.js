//Elementos de firebase
let btnLogin = document.getElementById("login");
let btnLogout = document.getElementById("logout");
let btnGuardar = document.getElementById("guardar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let ocupacion = document.getElementById("ocupacion");
let genero = document.getElementById("genero");
let uid = document.getElementById("uid");
let btnBorrar = document.getElementById("borrar")
let dataUsuario = document.getElementById("dataUsuario")

const ref = firebase.database().ref("usuarios")

// Escuchador de sesión (Para saber si hay sesión iniciada o no)
// Para cambiar el botón de Iniciar o Cerrar sesión
firebase.auth().onAuthStateChanged(function(user){
	console.log(user)
	if(user){
		console.log("hay usuario")
		showLogout()
	}else{
		console.log("No hay usuario")
		showLogin()
	}
})

const showLogout = () =>{
	btnLogin.style.display = "none";
	btnLogout.style.display = "block";
}

const showLogin = () => {
	btnLogin.style.display = "block";
	btnLogout.style.display = "none";
}

// Iniciamos la sesión con google.
btnLogin.addEventListener("click", function(){
	console.log("login");

	let provider = new firebase.auth.GoogleAuthProvider();
	provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

	firebase.auth().signInWithPopup(provider)
	.then((user) =>{
		console.log(user)
	}).catch((error) =>{
		console.log(error)
	})
})

btnLogout.addEventListener("click", () =>{
	firebase.auth().signOut()
	.then(() =>{
		alert("Se ha cerrado la sesión");
	})
})

btnGuardar.addEventListener("click", () =>{

	let objeto = {
		nombre: nombre.value,
		apellido: apellido.value,
		ocupacion: ocupacion.value,
		genero: genero.value
	}

	console.log(objeto)
	ref.push(objeto)
	.then(() =>{
		alert("Se subió")
	}).catch((error) =>{
		console.log(error)
	})

	


	// .value --> Para obtener el valor de un input.
})

btnBorrar.addEventListener("click", ()=>{

	let objeto = {
		uid: uid.value
	}
	console.log(objeto)
	
	ref.child(uid.value).remove()
	.then(() =>{
		alert("Elemento Borrado");
	}).catch((error) =>{
		console.log(error)
	})
})

ref.on('value', function(data){  //on esta escuchando siempre y once no, sólo lo hace una vez
	console.log("XD", data.val())
	let dat = data.val()
	let nombres = "";
	for(let i in dat){
		console.log(dat[i].nombre);
		dataUsuario.innerHTML = dat[i].nombre;
		nombres += dat[i].nombre + " ";
	}
	dataUsuario.innerHTML = nombres;
})





/* Metodos para modificar la base de datos

push

update  Cambiar o agrega valores en la base de datos

set  Reescribe el valor del objeto

remove

*/