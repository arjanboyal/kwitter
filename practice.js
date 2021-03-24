// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB9_4Hju88TMs76-MditO1XRapkdansIqY",
    authDomain: "database-f0720.firebaseapp.com",
    databaseURL: "https://database-f0720-default-rtdb.firebaseio.com",
    projectId: "database-f0720",
    storageBucket: "database-f0720.appspot.com",
    messagingSenderId: "284635539632",
    appId: "1:284635539632:web:f89282e9717ab87aa2f375",
    measurementId: "G-NJWLCXCGNB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  function addUser(){
      user_name=document.getElementById("user_name").value
firebase.database().ref("/").child(user_name).update({
    purpose:"adding user"
});
  }