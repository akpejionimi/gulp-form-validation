$("document").ready(function() {
    const userName = $("#username");
    const password = $("#password");
    const rePassword = $("#repassword");
    const age = $("#age");
    submitNotValid();
  
   
   
    userName.blur(function() {
        $(".error").remove();
        if(userName.val().length === 0) {
            $("#username").after("<span class='error'>Username Required!");
            submitNotValid();
        }
        else if(userName.val().length < 6) {
            $("#username").after("<span class='error'>minimum of six characters required!");
            submitNotValid();

        }else {
            submitValid();

        }
        userName.value = ""; 
       
    })

    password.blur(function () {
        $(".error").remove();
        if (password.val().length === 0) {
            password.after("<span class='error'>Password Required!");
            submitNotValid();

        } 
        else if (password.val().length < 8) {
            password.after("<span class='error'>minimum of eight characters Required!");
            submitNotValid();

        }else{
            submitValid();

        }
        password.value = "";
    })

    rePassword.blur(function () {
        $(".error").remove();
        if (rePassword.val() != password.val()) {
            rePassword.after("<span class='error'>passwords don't match!");
            submitNotValid();

        }else{
            submitValid();

        }
        rePassword.value = "";
    })

    age.blur(function() {
        $(".error").remove();
        ageInput();
    })

    

    $("#register-form").submit(function(e) {
        e.preventDefault();
        console.log("submitted!");    
    });


    function ageInput(){
        if(age.val() === ""){
            age.after("<span class='error'>Age required!");
            submitNotValid();

        }
        else if(age.val() < 18){
            age.after("<span class='error'>Age below 18!");
            submitNotValid();

        }else{
            submitValid();

        }
    }
    function submitValid(){
        $("#submit").prop("disabled", false);
    }
    function submitNotValid(){
        $("#submit").prop("disabled", true);
    }
    


})



