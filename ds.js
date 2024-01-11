const firebaseConfig = {
    apiKey: "AIzaSyALMRUxghiGGcrQn-4skRTDi-SK8IwwNqo",
    authDomain: "sports-buddy-490ef.firebaseapp.com",
    databaseURL: "https://sports-buddy-490ef-default-rtdb.firebaseio.com",
    projectId: "sports buddy-490ef",
    storageBucket: "sports-buddy-490ef.appspot.com",
    messagingSenderId: "638175528194",
    appId: "1:638175528194:web:d64a3b91952aff36f76e1b"
  };
 // Initialize Firebase
firebase = initializeApp(firebaseConfig);
// reference your database
 var  Sportsbuddy = firebase.database().ref("Sports buddy");
document.getElementById("sports buddy").addEventListener("login",loginForm);
function loginForm(e){
    e.preventDefault();  
    var username = getElement("username");
    var password= getElement("password") ;
    saveMessages(username, password);
    document.querySelector(".alert").style.display = "block";

}
constsaveMessages = (username, password) =>{
    var newSportsbuddy =  SportsbuddyDB.push();
    newSportsbuddy.set({
        username: username,
        password: password,

    });
}
    var  Sportsbuddy = firebase.database().ref("Sports buddy");
document.getElementById("sportsbuddy").addEventListener("Register",RegistrationForm);
function RegistrationForm(e){
    e.preventDefault();  
    var Name = getElement("Name");
    var DataofBirth= getElement("Date of Birth");
    var Email = getElement("Email");
    
    var Password = getElement("Password");
    
    var select = getElement("select");

    saveMessages(Name, DataofBirth, Email, password, select);
    document.querySelector(".alert").style.display = "block";

}
const saveMessages = (Name, DateofBirth, Email, password, select )  =>{
    var newSportsbuddy =  SportsbuddyDB.push();
    newSportsbuddy.set({
        Name:  Name,
        DataofBirt: DataofBirt,
        Email: Email,
        Password: Password,
        select: select,
    });
  

};
const getElementVal = (id) => {
    return document.getElementById(id).Value;
};