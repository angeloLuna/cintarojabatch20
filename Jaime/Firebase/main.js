let btnLogIn = document.getElementById("login");
let btnLogOut = document.getElementById("logout");
let btnGuardar = document.getElementById("guardar");
let btnActualizar = document.getElementById("actualizar");
let btnBorrar = document.getElementById("borrar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let ocupacion = document.getElementById("ocupacion");
let genero = document.getElementById("genero");
let idBorrar = document.getElementById("borraID");

const ref = firebase.database().ref("usuarios");


// console.log(btnLogIn, btnLogOut) Para comprobar que los botenes esten jalando compa

//Escuchador de sesion, es importante para manener la sesion abierta cada vez que se inicie
firebase.auth().onAuthStateChanged((user)=>{
    console.log(user)
    if(user){
        console.log("hay usuario");
        showLogOut();
    }else{
        console.log("No hay usuario madafaka");
        showLogIn();
    }
})

const showLogIn = ()=>{
    btnLogOut.style.display="none";
    btnLogIn.style.display="block";
}

const showLogOut = ()=>{
    btnLogIn.style.display="none";
    btnLogOut.style.display="block";
}

btnLogIn.addEventListener("click", ()=>{
    console.log("Si entro login");

    //Codigo necesario para pedir autenticacion y solicitud de contactos
    //Para hacer diferenytes inicios de sesión necesitamos diferentes providers
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    // MUY IMPORTNATE, EL METODO AUTH() SIRVE PARA TODO LO QUE TENGA QUE VER INCIO DE SESION
    //Cada que llamamos a un popup tiene que ser con un boton y no dentro de una secuencia de instrucciones porue el navegador las bloquea
    firebase.auth().signInWithPopup(provider).then((user)=>{
        showLogOut();
        console.log(user);
    }).catch((error)=>{
        console.log(error);
    })

})

btnLogOut.addEventListener("click", ()=>{
    console.log("Empecé a salir de la sesion");

    firebase.auth().signOut().then(()=>{
        showLogIn();
        console.log("Se ha cerrado por completo la sesion");
    }).catch((error)=>{
        console.log("Algo salio mal al cerrar sesion krnal\n"+ error)
    })
})

// A FIREBASE SIEMPRE DEBEMOS ENVIARLE OBJETOS, NO DATOS DESESTRUCTURADOS

btnGuardar.addEventListener("click", ()=>{
  //  console.log("Lo que metiste krnal: "+nombre.value) //Agregamos el .value ya que necesitamos el valor que se encuentra dentro
    let objeto = {
        nombre: nombre.value,
        apellido: apellido.value,
        genero: genero.value,
        ocupacion: ocupacion.value
    }
    console.log(objeto);
    ref.push(objeto).then(()=>{ //Metodo .push es para agregar el elemento a un nodo de la base de datos
        alert("Se agregó al usuario krnal");
    }).catch((error)=>{
        alert("No se pudo agregar krnal \n"+error);
    })
})

btnActualizar.addEventListener("click", ()=>{
    ref.child("-LDntDEKjLHktQF9PSdm").update(
        {nombre: nombre.value,
            apellido: apellido.value,
            genero: genero.value,
            ocupacion: ocupacion.value}).then(()=>{
        alert("Se actualizo la informacion del usuario");
    }).catch((error)=>{
        alert("No se pudo actualizar krnal\n"+error)
    });
})

btnBorrar.addEventListener("click", ()=>{
    ref.child(idBorrar.value).remove().then(()=>{
        alert("Se pudo eliminar al usuario");
    }).catch((error)=>{
        console.log("No fue posible borrar al usuario krnal\n"+error);
    })
})



// En caso de querer agregar a objetos anidados seria como ref.child("subclase").push()


