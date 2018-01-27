

var modal = document.getElementById('simplemodal');
var modalbtn = document.getElementById('modalbtn');
var closebtn = document.getElementById('btn1');
var cntnt = document.getElementById('cntnt');

modalbtn.addEventListener('click', openmodal);
closebtn.addEventListener('click', closemodal);


function openmodal(){
    modal.style.display='block';
    cntnt.style.display='none';
}

function closemodal(){
    modal.style.display = 'none';
    cntnt.style.display='block';
}

function login(){
    var userName = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            window.open("pages/loggedin.html");
            console.log("user logged in"); //user is sigmed in
        } else {
           console.log("user not logged in"); //user is not signed in.
        }
    });
    
    firebase.auth().signInWithEmailAndPassword(userName, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    
        window.alert("Error : " + errorMessage);
        // ...
      });
};

function signup(){
    var signupName = document.getElementById("signupName").value;
    var signupPass = document.getElementById("signupPass").value;

    firebase.auth().onAuthStateChanged(function(user){
        if(user){
            window.alert("account successfully created");
            open("pages/loggedin.html");
            console.log("account created"); //user is sigmed in
        } else {
           console.log("account not created"); //user is not signed in.
        }
    });
    
    firebase.auth().createUserWithEmailAndPassword(signupName, signupPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);
        // ...
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
};

document.addEventListener('DOMContentLoaded', function(){
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 0;
    let delta = 0;

    if(wrapper.className.indexOf('skewed')!= -1){
        skew = 990;
    }

    wrapper.addEventListener('mousemove', function(e){
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        handle.style.left = e.clientX + delta + 'px';
        topLayer.style.width = e.clientX + skew + delta + 'px';
    });
});