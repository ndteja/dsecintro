

var modal = document.getElementById('simplemodal');
var modalbtn = document.getElementById('modalbtn');
var closebtn = document.getElementById('btn1');
var cntnt = document.getElementById('cntnt');
var logo = document.getElementById('logo');

modalbtn.addEventListener('click', openmodal);
closebtn.addEventListener('click', closemodal);


function openmodal(){
    modal.style.display='block';
    cntnt.style.display='none';
    logo.style.display='none';
}

function closemodal(){
    modal.style.display = 'none';
    cntnt.style.display='block';
    logo.style.display='block';
}

function login(){
    const auth = firebase.auth();
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(userName, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    
        window.alert("Error : " + errorMessage);
        // ...
      });
    
    firebase.auth().onAuthStateChanged(function(userName){
        if(userName == auth/userName){         
            console.log("user logged in"); //user is sigmed in
            window.location = "pages/loggedin.html";
        } else {
           console.log("user not logged in"); //user is not signed in.
        }
    });
    


};

function signup(){
    var signupName = document.getElementById("signupName").value;
    var signupPass = document.getElementById("signupPass").value;

    

    firebase.auth().createUserWithEmailAndPassword(signupName, signupPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);
        // ...
      });

      firebase.auth().onAuthStateChanged(function(userName){
        if(userName){
            window.alert("account successfully created");
            open("pages/loggedin.html");
            console.log("account created"); //user is signed in
        } else {
           window.alert("account not created");
            console.log("account not created"); //user is not signed in.
        }
    });
};

function deleteMe(){
    console.log("function works");
    var user = firebase.auth().currentUser;

user.delete().then(function() {
  window.alert("your account has been deleted");   // User deleted.
  open("../index.html");
}).catch(function(error) {
  // An error happened.
});

function signOut(){
firebase.auth().signOut().then(function() {
    window.alert("Successfully signed out!");   // Sign-out successful.
    open("../index.html");
  }).catch(function(error) {
    // An error happened.
  });
};
};

