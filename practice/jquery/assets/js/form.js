data = []
error = ""
$(document).on('submit', '#regForm', function(e){
   e.preventDefault();
   name = $('#name').val().trim();
   age = $('#age').val();
   clas = $('#class').val().trim();
   username = $('#user').val().trim();
   pass = $('#pass').val().trim();
   cpass = $('#cpass').val().trim();
   if(name != "" || clas != "" || username != "" || pass != ""){
       if (pass == cpass){
           if(data.length != 0)
           {
               for (i = 0; i < data.length; i++) {
                   if(data[i]['username'] == username)
                   {
                       error = "The username has been taken";
                       break;
                   }
               }
           }

           if (error == "")
           {
             student = {
                 name:name,
                 age:age,
                 class:clas,
                 username:username,
                 password:pass
             }
             data.push(student);
             $('#regForm')[0].reset();
             alert("Your details has been received");
           } else {
               alert(error)
           }

       }else{
           alert("The password is not the same")
       }
   }else{
       alert("please fill all the information fields")
   }
})


$(document).on('submit', '#loginForm', function (e) {
   e.preventDefault();
   username = $('#username').val();
   password = $('#password').val();

   for (i=0; i<data.length; i++){
       if (data[i]['username'] == username && data[i]['password'] == password)
       {
           $('#outName').html(data[i]['name'])
           $('#outAge').html(data[i]['age'])
           $('#outClass').html(data[i]['class'])
           $('#dataModal').modal('show');
           break;
       }
       if (i == data.length){
               alert("Username or/and password incorrect");
       }
   }
})