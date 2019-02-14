var age
var school
var username
var pin
var firstname;
var lastname
var store = []
var counter = 1
function register(){
   firstname = prompt("enter your first name")
   lastname = prompt("enter your last name:")
   age = prompt("Enter your  age")
   school = prompt("Enter your class")
   username = prompt("Enter your username")
   //check(username)
   pin = prompt("Enter your password")
   var data = {
    firstname :firstname,
    lastname :lastname,
    age :age,
    school : school,
    username:username,
    pin:pin
    }

   store.push(data)
   
   check = prompt("Do you want to enter more data (y/n)")
    if (check == "y"){
       counter++
       register();
   } else{
    login();
   }

   function login(){
   username1 = prompt("Verify your username");
   pin1 = prompt("Verify your password");
   for(i=0; i < counter; i++){
   if(username1 == store[i]['username'] && pin1 == store[i]['pin']){
       alert("Your name is " + store[i]['firstname'] +" " +  store[i]['lastname'] + " you are " + store[i]['age'] + " years old and you are in " + store[i]['school']);
       break;
   }
  
   if(i == counter.length-1)
   {
       alert("incorrect")
   }
   }
}
}
function check(username){
    for (i=0; i<store.length;i++)
   {
        if (store[i]['username'] == username)
        {
            username = prompt("Enter your username")
            return false;
            break;
        }
        if (i == store.length-1)
        {
            return true;
        }
   }
}
register()