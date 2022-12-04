const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".step-forms");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
   
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
    
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("step-forms-active") &&
      formStep.classList.remove("step-forms-active");
  });

  formSteps[formStepsNum].classList.add("step-forms-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
      
    } else {
      progressStep.classList.remove("progress-step-active");
   
    }
  });

  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum) {
      
      progressStep.classList.add("progress-step-check");
    } else {
   
      progressStep.classList.remove("progress-step-check");
    }
  });
 
  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

document.getElementById("submit-form").addEventListener("click", function () {

    progressSteps.forEach((progressStep, idx) => {
    if (idx <= formStepsNum) {
      
      progressStep.classList.add("progress-step-check");
    } else {
   
      progressStep.classList.remove("progress-step-check");
    }
  });
  
   var forms = document.getElementById("forms");
   forms.classList.remove("form");
   forms.innerHTML = '<div class="welcome"><div class="content"><svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg><h2>Thanks for signup!</h2><span>We will contact you soon!</span><div></div>';
});


document.getElementById('next-1').onclick = function () {
    var ans= document.querySelector("input[type='radio']:checked");
    var pno= document.querySelector('#be_phoneno');
    if(ans==null){
        document.getElementById("y/n_error").innerHTML = "select either yes or no";
        return false;
    }
    else{
        return true;
    }

    if(pno==null){
        document.getElementById("phone-no_error").innerHTML = "enter your phone number";
        return false;
    }
    else if(pno.length<10){
        document.getElementById("phone-no_error").innerHTML = "enter valid phone number";
    }

    else{
        return true;
    }

    
}

document.getElementById('next-2').onclick = function () {
    var a=document.querySelector('#be_name');
    var b=document.querySelector('#ca_email');
    var c=document.querySelector('#ca_password');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    // name
    if (a.value.trim()=='') {
        document.getElementById("name_error").innerHTML = "enter your name";
        a.focus();
        return false;
    }
    else if (a.value.includes('@' || '#' || '$' || '%' || '^' || '&' || '*'|| '`' || '~' || '!' || '?' || '<' || '>' || '/' || '[' || ']' || '-' || '+' )) {
        document.getElementById("name_error").innerHTML = "you cannot use @,!,#,$...symbols in name";
        a.value='';
        a.focus();
        return false;
    } 
    else if(a.value.match(numbers)) {
        document.getElementById("name_error").innerHTML = "you cannot use numbers in name";
        a.value='';
        a.focus();
        return false;
    }
    else{
        document.getElementById("name_error").innerHTML = "";
        true;
    }

}