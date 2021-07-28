 var firebaseConfig = {
      apiKey: "AIzaSyCtL738wWNQKiW30YwyPwNF0L6rMYNM9bY",
      authDomain: "classtest-7d826.firebaseapp.com",
      projectId: "classtest-7d826",
      storageBucket: "classtest-7d826.appspot.com",
      messagingSenderId: "389965397492",
      appId: "1:389965397492:web:3a7435b6fc22bcd6f68da1"
    };
    
    firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }