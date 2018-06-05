let btnLogin = document.getElementById("login");
let btnLogout = document.getElementById("logout");
let btnGuardar = document.getElementById("guardar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let ocupacion = document.getElementById("ocupacion");
let genero = document.getElementById("genero");
let borrar = document.getElementById("borrar");
let UID = document.getElementById("UID");
let datusuarios = document.getElementById("usuarios");




const ref = firebase.database().ref("usuarios");




firebase.auth().onAuthStateChanged(function(user){
	console.log(user)
	if (user) {
	console.log("hay usuario")
	showLogout();
	}else{
	console.log("no hay usuario");
	showLogin();
	}


})

	const showLogout =() =>{
		btnLogin.style.display ="none";
		btnLogout.style.display ="block";
	}

	const showLogin =() =>{
		btnLogin.style.display ="block";
		btnLogout.style.display ="none";
	}

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

btnLogout.addEventListener("click",()=>{
	firebase.auth().signOut().then(function(){

		alert("Se ha cerrado la sesión")
	})
})

btnGuardar.addEventListener("click",()=>{
// value para obtener el valor de un input

	let objeto ={
		nombre: nombre.value,
		apellido: apellido.value,
		ocupacion: ocupacion.value,
		genero: genero.value,

	}
	console.log(objeto)
	ref.push(objeto).then(()=>{
		alert("Se subio");
	}).catch((error)=>{
		console.log(error)

	})

	
})

borrar.addEventListener("click",()=>{
// value para obtener el valor de un input

	firebase.database().ref("usuarios").child(UID.value).remove()

	{
	alert("Se ha borrado")	
	}

	
	
})

ref.once("value",(data)=>{
	console.log("XD",data.val())
		let dat = data.val()
		let nombres = ""
	for(let i in dat){
		
		console.log(dat[i].nombre);
		nombres += dat[i].nombre + " ";


	}

	datusuarios.innerHTML = nombres;
})