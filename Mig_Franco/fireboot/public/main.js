

let btnLogin= document.getElementById("login")
let btnLogout= document.getElementById("logout")

const ref = firebase.database().ref("usuarios");


firebase.auth().onAuthStateChanged(function(user){
  console.log(user);
  if(user){
    console.log("hay usuario");
  //  showLogout();
  }else{
    console.log("no hay usuario");
//    showLogin();
  }
})


//iniciar sesión
btnLogin.addEventListener("click",function(){
  console.log("login");
  
  let provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  
  firebase.auth().signInWithPopup(provider).then((user)=>{
    console.log(user);
    
  }).catch((error)=>{
    console.log(error);
  })
  
  alert("Se ha iniciado sesión")  
});

//cerrar sesión
btnLogout.addEventListener("click", ()=>{
  
  firebase.auth().signOut().then(()=>{
    //showLogin();
    console.log("ya salí");
  }).catch(()=>{    
    //showLogout();
  })
  alert("se ha cerrado la sesion");
})

//ocultar logout
/* const showLogout = () =>{
  btnLogin.style.display = "none";
  btnLogout.style.display = "block";
}
//ocultar login
const showLogin = () =>{
  btnLogin.style.display = "block";
  btnLogout.style.display = "none"
}
 */