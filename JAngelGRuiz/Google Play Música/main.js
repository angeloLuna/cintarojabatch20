let btnLogin = document.getElementById('login');
let btnLogout = document.getElementById('logout');

const ref = firebase.database().ref("sentencias");

/*
	let tabla = {
		p1: 'Recomendaciones que se adaptan a tus gustos',
		p2: 'Escucha tu música en Android iOS y la Web',
		p3: 'Sube hasta 50.000 de tus canciones',
		p4: 'Radio para tu estado de ánimo tu actividad y diferentes situaciones',
		p5: 'Salta todas las canciones que quieras',
		p6: 'Escucha música sin publicidad de forma ininterrumpida',
		p7: 'Accede a 40 millones canciones a la carta',
		p8: 'Descarga tu música y reprodúcela sin conexión',
		p9: 'Disfruta también de YouTube Red. Más información'

}

	console.log(tabla)
	ref.push(tabla)
	.then(() =>{
		alert("Se subió")
	}).catch((error) =>{
		console.log(error)
	})
*/

firebase.auth().onAuthStateChanged(function(user){
	if(user){
		console.log("hay usuario")
		showLogout();
		datos();
	}else{
		console.log("No hay usuario")
		showLogin();
		sinDatos();
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

btnLogin.addEventListener("click", function(){
	console.log("logining");

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


const datos = () =>{
	ref.on('value', function(data){  //on esta escuchando siempre y once no, sólo lo hace una vez
		let dat = data.val();
		let sentencias = "";
		for(let i in dat){
			sent.innerHTML = dat[i].p1;
			sent1.innerHTML = dat[i].p2;
			sent2.innerHTML = dat[i].p3;
			sent3.innerHTML = dat[i].p4;
			sent4.innerHTML = dat[i].p5;
			sent5.innerHTML = dat[i].p6;
			sent6.innerHTML = dat[i].p7;
			sent7.innerHTML = dat[i].p8;
			sent8.innerHTML = dat[i].p9;
		}
		
	})
}

const sinDatos = () =>{
	ref.on('value', function(data){  //on esta escuchando siempre y once no, sólo lo hace una vez
		let dat = data.val();
		let sentencias = "";
		for(let i in dat){
			sent.innerHTML = " ";
			sent1.innerHTML = " ";
			sent2.innerHTML = " ";
			sent3.innerHTML = " ";
			sent4.innerHTML = " ";
			sent5.innerHTML = " ";
			sent6.innerHTML = " ";
			sent7.innerHTML = " ";
			sent8.innerHTML = " ";
		}
		
	})

}