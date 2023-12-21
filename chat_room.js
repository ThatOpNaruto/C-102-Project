
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

user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name;

function addroom()
{
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
   
  window.location = "chatroom_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -", Room_names);
    row = "<div class='row_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "chatroom_page.html";
}

function logout() 
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}