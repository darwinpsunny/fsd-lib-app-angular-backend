let Email=document.getElementById("Email");
let number=document.getElementById("number");

let Password1=document.getElementById("Password1");
let Password1help=document.getElementById("Password1help");
let password2=document.getElementById("password2");
let Password2help=document.getElementById("Password2help");
let emailHelp=document.getElementById("emailHelp");
let btn=document.getElementsByClassName("btn");
let bkimg=document.getElementById("bkimg");

function emailvalidate()
{let regexp=/^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(regexp.test(Email.value))
    {
        Email.style.borderColor=" blue";
        Email.style.color="blue";
        emailHelp.innerText="We'll never share your email with anyone else.";
        return true;
    }
    else{
        Email.style.color="red";
        emailHelp.innerText="please enter a valid email ";

       Email.style.borderColor=" red";
        return false;
    }
}
function numbervalidate()
{
    let regxp2=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regxp2.test(number.value))
    {
        number.style.borderColor="blue";
        number.style.color="blue";
        numberhelp.innerText=" ";
        return true;

    }
    else{
        number.style.color="red";
        numberhelp.innerText="please enter a valid number";

       number.style.borderColor=" red";
        return false;
    }
}
function password1validate(password) {
                
    
    // Create an array and push all possible values that you want in password
    var matchedCase = new Array();
    matchedCase.push("[$@$!%*#?&]"); // Special Charector
    matchedCase.push("[A-Z]");      // Uppercase Alpabates
    matchedCase.push("[0-9]");      // Numbers
    matchedCase.push("[a-z]");     // Lowercase Alphabates

    // Check the conditions
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(password)) {
            ctr++;
        }
    }
    // Display it
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
        case 2:
            strength = " password Very Weak";
            color = "red";
            break;
        case 3:
            strength = "password strength is Medium";
            color = "orange";
            break;
        case 4:
            if(password.length>=8){
            strength = "Strong password";
            color = "green";}
            else{
            strength = "password strength is Medium minuinum 8 characters required";
            color = "orange";
            }
            break;
    }
    Password1.style.borderColor=color;
    Password1.style.color=color;
    Password1help.innerText=strength;
    Password1help.style.color=color;
    if(color=="green" )
    {
        return true;
    }
    else{
        return false;
    }
}
function password2validate()
{ 
    if(Password1.value == Password2.value)
    {
        color="green";
        text="passwords match"
    }
    else{ 
        color="red";
        text="passwords doesnt match";
    }
    Password2.style.borderColor=color;
    Password2.style.color=color;
    Password2help.innerText=text;
    Password2help.style.color=color;

    if(color=="green")
    {     
        return true;
    }
    else
    {   
        return false;
    }
}
function bkimgvalidate(){
    if(bkimg.files.length==0){
        // bkimg.style.color="red";
        return false;

    }

}
function validatesignup()
{   
     return (emailvalidate() && numbervalidate()) && ( password1validate(Password1.value) && password2validate()) ;
     
}
function validatesignin()
{
    return (emailvalidate() && password1validate(Password1.value) ) ;
}
