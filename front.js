const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


document.getElementById('sign_up').onclick = function () {
    var a=document.querySelector('#ca_name');
    var b=document.querySelector('#ca_email');
    var c=document.querySelector('#ca_password');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    // name
    if (a.value.trim()=='') {
        document.getElementById("name_error-su").innerHTML = "enter your name";
        a.focus();
        return false;
    }
    else if (a.value.includes('@' || '#' || '$' || '%' || '^' || '&' || '*'|| '`' || '~' || '!' || '?' || '<' || '>' || '/' || '[' || ']' || '-' || '+' )) {
        document.getElementById("name_error-su").innerHTML = "you cannot use @,!,#,$...symbols in name";
        a.value='';
        a.focus();
        return false;
    } 
    else if(a.value.match(numbers)) {
        document.getElementById("name_error-su").innerHTML = "you cannot use numbers in name";
        a.value='';
        a.focus();
        return false;
    }
    else{
        document.getElementById("name_error-su").innerHTML = "";
        true;
    }

    //email sign up
    if (b.value.trim()=='' ) {
        document.getElementById("email_error-su").innerHTML = "email cannot be blank";
        b.focus();
        return false;
    }
    else if(b.value.trim().length<7){
        document.getElementById("email_error-su").innerHTML = "enter Valid email address!";
        b.focus();
        return false;
    }
    if(b.value.includes('.com')){
        document.getElementById("email_error-su").innerHTML = "";
        true;
    }
    else{
        document.getElementById("email_error-su").innerHTML = "enter Valid email address!";
        b.focus();
        return false;
    }


    //password sign up
    if (c.value.trim()=='') {
        document.getElementById("password_error-su").innerHTML = "password cannot be blank";
        c.focus();
        return false;
    }

    if(c.value.includes('@' || '#' || '$' || '%' || '^' || '&' || '*'|| '`' || '~' || '!' || '?' || '<' || '>' || '/' || '[' || ']' || '-' || '+'  )){
        document.getElementById("password_error-su").innerHTML = "";
        true; 
    }
    else{
        document.getElementById("password_error-su").innerHTML = "Your password needs a special case letter";
        c.focus();
        return false;
    }
    if (c.value.match(numbers)) {    
        document.getElementById("password_error-su").innerHTML = "";
        true;
    } 
    else {
        document.getElementById("password_error-su").innerHTML = "Your password needs a number";
        c.focus();
        return false;
    }

    if (c.value.match(lowerCaseLetters)) {
        document.getElementById("password_error-su").innerHTML = "";
        true;
    } else {
        document.getElementById("password_error-su").innerHTML = "Your password needs a lower case letter";
        c.focus(); 
        return false;
    }
    if (c.value.match(upperCaseLetters)) {
        document.getElementById("password_error-su").innerHTML = "";
        true;
    } else {
        document.getElementById("password_error-su").innerHTML = "Your password needs a upper case letter";
        c.focus(); 
        return false;
    }

    }

    document.getElementById('sign_in').onclick = function () {
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var d=document.querySelector('#si_email');
    var e=document.querySelector('#si_password');

    //email sign in
    if (d.value.trim()=='') {
        document.getElementById("email_error-si").innerHTML = "email cannot be blank";
        d.focus();
        return false;
    }
    else if(d.value.trim().length<7){
        document.getElementById("email_error-si").innerHTML = "enter Valid email address!";
        d.focus();
        return false;
    }
    else{
        document.getElementById("email_error-si").innerHTML = "";
    }
    
    if(d.value.includes('.com')){
        document.getElementById("email_error-si").innerHTML = "";
    // true;
    }
    else{
        document.getElementById("email_error-si").innerHTML = "enter Valid email address!";
        d.focus();
        return false;
    }




    //password sign in
    if (e.value.trim()=='') {
        document.getElementById("password_error-si").innerHTML = "password cannot be blank";
        e.focus();
        return false;
    }

    if(e.value.includes('@' || '#' || '$' || '%' || '^' || '&' || '*'|| '`' || '~' || '!' || '?' || '<' || '>' || '/' || '[' || ']' || '-' || '+'  )){
        document.getElementById("password_error-si").innerHTML = "";
        true; 
    }
    else{
        document.getElementById("password_error-si").innerHTML = "Your password needs a special case letter";
        e.focus();
        return false;
    }
    if (e.value.match(numbers)) {    
        document.getElementById("password_error-si").innerHTML = "";
        true;
    } 
    else {
        document.getElementById("password_error-si").innerHTML = "Your password needs a number";
        e.focus();
        return false;
    }

    if (e.value.match(lowerCaseLetters)) {
        document.getElementById("password_error-si").innerHTML = "";
        true;
    } else {
        document.getElementById("password_error-si").innerHTML = "Your password needs a lower case letter";
        e.focus(); 
        return false;
    }
    if (e.value.match(upperCaseLetters)) {
        document.getElementById("password_error-si").innerHTML = "";
        true;
    } else {
        alert("Your password needs a upper case letter")
        document.getElementById("password_error-si").innerHTML = "Your password needs a upper case letter";
        e.focus(); 
        return false;
    }


}