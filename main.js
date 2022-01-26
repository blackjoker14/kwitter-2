const firebaseConfig = {
    apiKey: "AIzaSyAL9cHzWav-P29o5g6K447N04TH5pXGNuc",
    authDomain: "kwitter-chatapp-dc37c.firebaseapp.com",
    projectId: "kwitter-chatapp-dc37c",
    storageBucket: "kwitter-chatapp-dc37c.appspot.com",
    messagingSenderId: "934756992834",
    appId: "1:934756992834:web:00beafa57d13a3c3056adb",
    measurementId: "G-72NLVJKSJH"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("username", user_name);
    window.location = "kwitter_room.html";
    firebaseConfig.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}