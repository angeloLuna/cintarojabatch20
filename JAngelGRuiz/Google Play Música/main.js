const ref = firebase.database().ref("sentencias")

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