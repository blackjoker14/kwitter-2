user_name = localStorage.getItem("username", user_name);
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom() {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("roomname", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   
   //End code
   });});}
getData();