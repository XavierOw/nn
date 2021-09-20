
var firebaseConfig = {
      apiKey: "AIzaSyDdZGCaDj5Tkg27Y0dO-1zRL8frV2wyhr8",
      authDomain: "kwitter-the-second.firebaseapp.com",
      projectId: "kwitter-the-second",
      storageBucket: "kwitter-the-second.appspot.com",
      messagingSenderId: "706645478223",
      appId: "1:706645478223:web:d6d6367844476b78add33a",
      measurementId: "G-L3GR4G0104"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";

function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " +Room_names);
      row ="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
