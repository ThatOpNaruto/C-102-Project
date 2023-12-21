// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyACxYbyy5-TbRtqnm7NCBts6VngmsEP5UE",
    authDomain: "kwitter-2fde0.firebaseapp.com",
    databaseURL: "https://kwitter-2fde0-default-rtdb.firebaseio.com",
    projectId: "kwitter-2fde0",
    storageBucket: "kwitter-2fde0.appspot.com",
    messagingSenderId: "232097774664",
    appId: "1:232097774664:web:6c201fe38b948e30eeec7d"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



