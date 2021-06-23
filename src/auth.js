import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyAmkNmm5uNQWD0weQykMhffodpQXQjBvMM',
  authDomain: 'desenvolvimentoweb2-2d224.firebaseapp.com',
  projectId: 'desenvolvimentoweb2-2d224'
});


// /* AUTHENTICATION EMAIL SENHA */
let email =  'william.nh@gmail.com';
let password = '321321'

/* SIGN UP */

//  firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => console.log(userCredential));

/* SIGN IN  */

// firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => console.log(userCredential));


//   firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//     } else {
//       // No user is signed in.
//     }
//   });

// var user = firebase.auth().currentUser;
// var name, email, photoUrl, uid, emailVerified;

// if (user != null) {
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   emailVerified = user.emailVerified;
//   uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//                    // this value to authenticate with your backend server, if
//                    // you have one. Use User.getToken() instead.
// }
  

// firebase.auth().signOut().then(() => {
//     // Sign-out successful.
//   }).catch((error) => {
//     // An error happened.
//   });



// /* AUTHENTICATION GOOGLE */

function signInGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
  'login_hint': 'user@example.com'
  });
    
  firebase.auth()
    .signInWithPopup(provider)
    .then(console.log('deu'))
}

module.exports = signInGoogle;

//   .then((result) => {
//     /** @type {firebase.auth.OAuthCredential} */
//     var credential = result.credential;

//     // This gives you a Google Access Token. You can use it to access the Google API.
//     var token = credential.accessToken;
//     // The signed-in user info.
//     var user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // The email of the user's account used.
//     var email = error.email;
//     // The firebase.auth.AuthCredential type that was used.
//     var credential = error.credential;
//     // ...
//   });