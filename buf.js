var next1 =document.getElementById('next-1').onclick = function () {
    var ans= document.querySelector("input[name='q']:checked");
    var eans=document.getElementById("y/n_error");
    var pno= document.querySelector('#be_phoneno');
    var epno=document.getElementById("epno");
//YES/NO 
    if(ans==null){
        eans.innerHTML = "Select either Yes or No";
        return false;
    }
    else if(ans.value == 'no'){
        eans.innerHTML = "";
        true;
    }
    else if(ans.value == 'yes'){
        swal({
            title: "THANKYOU FOR YOUR RESPONSE",
            icon: "success",
            button: "click ok to continue",
        }).then(function() {
            window.location.href = "demo2.html";
        // linking another file
        });
        true;
    }

//PHONE NUMBER
    if(pno.value.trim()==''){
        epno.innerHTML = "Enter your Phone Number";
        pno.focus();
        return false;
    }
    else if(pno.value.length !==10){
       epno.innerHTML = "Enter valid Phone Number";
       pno.focus();
       return false;}

    else if(pno.value.length ==10){
        epno.innerHTML = "";
        const phone_number = localStorage.setItem('phone number', pno.value);
        true;
     }
    
    
     
}

document.getElementById('next2').onclick = function () {
    var a=document.querySelector('#be_name');
    var ea=document.getElementById("name_error")
    var b=document.querySelector('#be_blood-group');
    var eb=document.querySelector('#btype_error');
    var gender= document.querySelector("#be_gender");
    var egender=document.querySelector('#gender_error');
    var age=document.querySelector('#be_age');
    var eage=document.querySelector('#age_error');
    var numbers = /[0-9]/g;
    
// name
     if (a.value.trim()=='') {
        ea.innerHTML = "enter your name";
        a.focus();
        return false;
    }
    else if (a.value.includes('@' || '#' || '$' || '%' || '^' || '&' || '*'|| '`' || '~' || '!' || '?' || '<' || '>' || '/' || '[' || ']' || '-' || '+' )) {
        ea.innerHTML = "You cannot use @,!,#,$...symbols in name";
        a.value='';
        a.focus();
        return false;
    } 
    else if(a.value.match(numbers)) {
        ea.innerHTML = "You cannot use numbers in name";
        a.value='';
        a.focus();
        return false;
    }
    else{
        ea.innerHTML = "";
        true;
        const name = localStorage.setItem('name', a.value);
    }

//BLOOD GROUP
    if (b.value == 'A+') {
        eb.innerHTML='';
        const blood_group = localStorage.setItem('blood group', b.value);
        true;
    } 
    else if (b.value == 'A-') {
        eb.innerHTML='';
        const blood_group = localStorage.setItem('blood group', b.value);
        true;
    }  
    else if (b.value == 'B+') {
        eb.innerHTML='';
        const blood_group = localStorage.setItem('blood group', b.value);
        true;
    }  
    else if (b.value == 'B-') {
        eb.innerHTML='';
        const blood_group = localStorage.setItem('blood group', b.value);
        true;
    }  
    else if (b.value == 'AB+') {
        eb.innerHTML='';
        const blood_group = localStorage.setItem('blood group', b.value);
        true;
    }  
    else if (b.value == 'AB-') {
        eb.innerHTML='';
        const blood_group = localStorage.setItem('blood group', b.value);
        true;
    }  
    else if (b.value == 'O+') {
        eb.innerHTML='';
        const blood_group = localStorage.setItem('blood group', b.value);
        true;
    }  
    else if (b.value == 'O-') {
        eb.innerHTML='';
        const blood_group = localStorage.setItem('blood group', b.value);
        true;
    }  
    else {
        eb.innerHTML='Choose one Blood type';
        return false;
    }

//GENDER
    if(gender.value == 'Male'){
        egender.innerHTML = '';
        const user_gender = localStorage.setItem('gender', gender.value);
        true;
    }
    else if(gender.value == 'Female'){
        egender.innerHTML = '';
        const user_gender = localStorage.setItem('gender', gender.value);
        true;
    }
    else if(gender.value == 'others'){
        egender.innerHTML = '';
        const user_gender = localStorage.setItem('gender', gender.value);
        true;
    }
    else{
        egender.innerHTML = "Select one gender";
        return false;
    }
  
//AGE
    if (age.value.trim()=='') {
        eage.innerHTML = 'Enter your age';
        age.focus();
        return false;
    } 
    else if(age.value <= 17){
        eage.innerHTML = 'Age should be more than 18';
        age.focus();
        return false;
    }
    else if(age.value >=50){
        eage.innerHTML = 'Age should be less than 50';
        age.focus();
        return false;
    }
    else{
        eage.innerHTML = '';
        const user_age = localStorage.setItem('age', age.value);
        true;
    }    
}


document.getElementById('submit-form').onclick = function () {
    var zip=document.querySelector('#be_zip-code');
    var ezip=document.querySelector('#zip_error');
    var state=document.querySelector('#be_state');
    var estate=document.querySelector('#state_error');
    var city=document.querySelector('#be_city');
    var ecity=document.querySelector('#city_error');
//ZIP NUMBER
    if (zip.value.trim()=='') {
        ezip.innerHTML = "Enter your Zip Code";
        zip.focus();
        return false;
    }
    else if(zip.value.length = 6){
        ezip.innerHTML = "";
        const user_zipcode = localStorage.setItem('zipcode', zip.value);
        true;
    }
    else if(zip.value.length != 6){
        ezip.innerHTML = "Enter correct Zip Code";
        zip.focus();
        zip.value='';
        return false;
    }

//STATE
    if (state.value.trim()=='') {
    estate.innerHTML = "Enter your State name";
    state.focus();
    return false;
    }
    else{
        const user_state = localStorage.setItem('state', state.value);
    }

//CITY
    if (city.value.trim()=='') {
        ecity.innerHTML = "Enter your City name";
        city.focus();
        return false;
    }
    else{
        const user_city = localStorage.setItem('city', city.value);
    }


//ADDRESS    
    if (address.value.trim()=='') {
        eaddress.innerHTML = "Enter your Address";
        address.focus();
        return false;
    }
    else{
        const user_address = localStorage.setItem('address', address.value);
        swal({
            title: "THANKYOU FOR YOUR RESPONSE",
            icon: "success",
            button: "click ok to continue",
        }).then(function() {
            window.location.href = "demo2.html";
        // linking another file
        });
        true;
    }
    
}