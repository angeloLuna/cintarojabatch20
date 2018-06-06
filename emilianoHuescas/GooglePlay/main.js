let btnLogin = document.getElementById("login");

// Escuchador de sesion
// firebase.auth().onAuthStateChanged(function(user){
//   console.log(user)
//   if (user) {
//     console.log("hay usuario")
//     showLogout();
//   }else{
//     console.log("no hay usuario")
//     showLogin();
//   }
// });

// Ìniciar sesion
btnLogin.addEventListener("click", function() {
  console.log("login");

    let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly')

  firebase.auth().signInWithPopup(provider).then((user)=>{
    console.log(user)
  }).catch((error)=>{
    console.log(error)
  });

});