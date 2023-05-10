    function matchPassword(){
        var name = document.getElementById("name").value;

        var gmail = document.getElementById("gmail").value;
        var atposition=gmail.indexOf("@");  
        var dotposition=gmail.lastIndexOf("."); 
          

        var phone = document.getElementById("phone").value;
        var pw1 =  document.getElementById("pswd1").value;
        var pw2 =  document.getElementById("pswd2").value;
        
        if(name.length < 5 || name == ""){
            alert("Name cannot be less than 5 characters!");
            return false; 
        }
        else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=gmail.length){ 
            alert("Enter a valid email!");
            return false;  
        }

        else if(phone == '123456789' || phone.length != 10){
            alert("Enter a valid phone number");
            return false;
        }
        else if(pw1 != pw2 || pw1 == "password" || pw1.length < 8 || pw1 == name){  
            alert("Password doesn't meet the requirements or both passwords don't match!"); 
            return false;  
        }
        else {  
            document.write("Congrats, you have been successfully registered!");  
        }  
           
    }
    
  
    // Loop over them and prevent submission
//     Array.prototype.slice.call(forms).forEach(function (form) {
//       form.addEventListener(
//         "submit",
//         function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault();
//             event.stopPropagation();
//           }
  
//           form.classList.add("was-validated");
//         },
//         false
//       );
//     });
//   })();
//   // Focus Icons
//   const inputs = document.querySelectorAll("input");
  
//   console.log(typeof inputs);
  
//   Object.keys(inputs).map((key, input) => onBlurOnFocus(inputs[key]));
  
//   function onBlurOnFocus(input) {
//     input.onfocus = (e) => {
//       e.target.previousElementSibling.classList.toggle("text-primary");
//     };
//     input.onblur = (e) => {
//       e.target.previousElementSibling.classList.toggle("text-primary");
//     };
//   }
