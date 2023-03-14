
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyB9l5oeIdbHaSSxUlKE8sbtp0pJsMDw7j8",
  authDomain: "kwitterapp-fd993.firebaseapp.com",
  databaseURL: "https://kwitterapp-fd993-default-rtdb.firebaseio.com",
  projectId: "kwitterapp-fd993",
  storageBucket: "kwitterapp-fd993.appspot.com",
  messagingSenderId: "777444443560",
  appId: "1:777444443560:web:721dc393748108fa0cc99d",
  measurementId: "G-ZJLTRZTRMQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
