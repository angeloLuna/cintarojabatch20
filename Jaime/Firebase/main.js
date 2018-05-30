let btnLogIn = document.getElementById("login")
let btnLogOut = document.getElementById("logout")

// console.log(btnLogIn, btnLogOut) Para comprobar que los botenes esten jalando compa

firebase.auth().onAuthStateChanged((user)=>{
    console.log(user)
    if(user){
        console.log("hay usuario");
    }else{
        console.log("No hay usuario");
    }
})

btnLogIn.addEventListener("click", ()=>{
    console.log("Si entro login");

    //Codigo necesario para pedir autenticacion y solicitud de contactos
    //Para hacer diferenytes inicios de sesión necesitamos diferentes providers
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    firebase.auth().signInWithPopup(provider).then((user)=>{
        console.log(user);
    }).catch((error)=>{
        console.log(error);
    })

})