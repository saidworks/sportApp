let userEmail = document.getElementById('email').value;
let password = document.getElementById("password").value;
let userEmailEl = document.getElementById('email');
let passwordEl = document.getElementById("password");

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
    userEmail,password = null,null;
    userEmail = document.getElementById('email').value;
    password = document.getElementById("password").value;

    const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    
    let emailValid= emailRegexp.test(userEmail)
        console.log(emailValid);
   if(emailValid === false){
        userEmailEl.classList.add('error');
    }
    else if(emailValid === true){
        userEmailEl.style.color = "green";
        userEmailEl.classList.remove('error');
    }

    let passwordValid= passwordRegex.test(password)
    console.log(passwordValid);
    if(passwordValid === false){
        passwordEl.classList.add('error');
    }
    else if(passwordValid === true){
        passwordEl.style.color = "green";
        passwordEl.classList.remove('error');
    }
}