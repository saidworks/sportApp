let userEmail = document.getElementById('email').value;
let password = document.getElementById("password").value;
let userEmailEl = document.getElementById('email');
let passwordEl = document.getElementById("password");
let emailContainer = document.querySelector(".email");
let passwordContainer = document.querySelector(".password");

let passwordConfirmationContainer = document.querySelector(".password-confirmation");
let passwordConfirmation = document.getElementById("password-confirmation").value;
let passwordConfirmationEl = document.getElementById("password-confirmation");

// const users = []
// //register logic 
// function register(){
//     let user = [];
//     user.push(email);
//     user.push(password)
//     users.push(user)
//     localStorage.setItem('user',user);
// }

// //login logic 
// function login(){
// if(email==localStorage.getItem("username") && password==localStorage.getItem("password")){
//     location.href("./index.html")
// }
// }

function validate(){
    userEmail,password,passwordConfirmation = null,null,null;
    userEmail = document.getElementById('email').value;
    password = document.getElementById("password").value;
    passwordConfirmation = document.getElementById("password-confirmation").value;

    console.log(passwordConfirmation);
    const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    
    let emailValid= emailRegexp.test(userEmail)
      
   if(emailValid === false && userEmail != ""){
        userEmailEl.classList.add('error');
        let result = document.createElement("div");
        result.innerText = "Please enter a valid email";
        result.classList.add("result-email");
        if(emailContainer.lastChild.innerText != result.innerText){
        emailContainer.appendChild(result);}
  
    }
    else if(emailValid === true && userEmail !=""){
        userEmailEl.style.color = "green";
        userEmailEl.classList.remove('error');
        let result = document.querySelector(".result")
        emailContainer.removeChild(result);
    }

    let passwordValid= passwordRegex.test(password)

    if(passwordValid === false && userEmail !="" && password != ""){
        passwordEl.classList.add('error');
        let result = document.createElement("div");
        result.innerText = `Please enter a valid password,it should be alphanumeric with min 8 character`
        ;
       
        result.classList.add("result-password");

        if(passwordContainer.lastChild.innerText !== result.innerText){ 
            passwordContainer.appendChild(result);
       }
    }
    else if(passwordValid === true  && userEmail !="" && password != ""){
        passwordEl.style.color = "green";
        passwordEl.classList.remove('error');
        let result = document.querySelector(".result-password")
        if(passwordContainer.contains(result)){
        passwordContainer.removeChild(result);}
    }

    let passwordMatch = (password==passwordConfirmation);
   
    // password confirmation 
    if(passwordMatch=== false && userEmail !="" && password != "" && passwordConfirmation != ""){
        passwordConfirmationEl.classList.add('error');
        let result = document.createElement("div");
        result.innerText = `Password does not match`
        ;
       
        result.classList.add("result-password-confirmation");
        console.log(emailContainer.lastChild);
        if(passwordConfirmationContainer.lastChild.innerText !== result.innerText){ 
            passwordConfirmationContainer.appendChild(result);
       }
    }
    else if(passwordMatch === true  && userEmail !="" && password != "" && passwordConfirmation != ""){
        passwordConfirmationEl.style.color = "green";
        passwordConfirmationEl.classList.remove('error');
        let result = document.querySelector(".result-password-confirmation")
        passwordConfirmationContainer.removeChild(result);
    }


}