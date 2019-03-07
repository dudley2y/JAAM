//passes credit card through luhn test
function luhn (sixteen){
    var pass=false;
    var string= sixteen.split("");
    var sum = 0;
    var alternate=true;
    for(x=14;x>=0;x--){
        string[x]=parseInt(string[x]);
        var odds= string[x];
        if(alternate){
            odds*=2;
            if (odds>9){
                odds=odds-9;
            }
        }
        sum +=odds;
        alternate=!alternate;
        }
    sum+=parseInt(string[15]);
    if (sum%10==0){
        pass=true;
    }
    return pass;
}

//prints out warning message
function showWarningMessage(selector, message) {
    $(selector).text(message);
    $(selector).css({display: "block"});
    $("#popupContainer").css({height:"100px"});
}

$(function () {
    //POPUP.JS PAGE
    $("#btn_logIn").click(function() {
        window.location = "logIn.html";
    });
    $("#btn_signUp").click(function() {
        window.location = "signUp.html";
    });

    //LOGIN PAGE

    $("btn_loginSubmit").click(function() {
      console.log ("dones")
        checkLogin();
    });
    $("#btn_loginSubmit").click(function() {
        var allInputsValid = true;
        $("input").each(function(index) {
            if (!$(this).val()) {
                showWarningMessage("#txt_warningMessage", "Please fill out the whole form!");
                console.log("Input Invalid");
                allInputsValid = false;
            }
        });
        if (allInputsValid) {
          checkLogin();
          console.log("hi");
            setTimeout(function(){window.location="account.html";}, 10000000);
        }
    });

    //SIGNUP PAGE
    $("#btn_signUpSubmit").click(function() {
        var allInputsValid = true;
        var cardNumberValid = false;
        var cardMonthValid=false;
        var cardYearValid=false;
        var cardCVVValid=false;
        $("txt_warningMessage").css({display: "none"})
        $("input").each(function(index) {
            if (!$(this).val()) {
                showWarningMessage("#txt_warningMessage", "Please fill out the whole form!");
                console.log("Input Invalid");
                allInputsValid = false;
            }
        });
        if (allInputsValid) {
            console.log("All Inputs Valid")
            if (($("#inp_cardCVV").val().length != 3) || ($("#inp_cardCVV").val().length != 4)) { //checks if CVV number has 2 characters
                console.log("CVV Number Has 3 or 4 Characters");
                cardCVVValid = true;
            }
            else {
                showWarningMessage("#txt_warningMessage", "Please input 3 or 4 numbers for your CVV!");
            }
            if ($("#inp_cardExpirationYear").val().length == 2) { //checks if year number has 2 characters
                console.log("Year Number Has 2 Characters");
                cardYearValid = true;
            }
            else {
                showWarningMessage("#txt_warningMessage", "Please input a valid expiration year!");
            }
            if ($("#inp_cardExpirationMonth").val().length == 2) { //checks if month number has 2 characters
                console.log("Month Number Has 2 Characters");
                cardMonthValid = true;
            }
            else {
                showWarningMessage("#txt_warningMessage", "Please input a valid month!");
            }
            if ($("#inp_cardNumber").val().length == 16) { //checks if card number has 16 characters
                console.log("Card Number Has 16 Characters");
                if (!luhn($("#inp_cardNumber").val())) { //checks if card passes luhn test
                    showWarningMessage("#txt_warningMessage", "Please enter a valid debit card!");
                }
                else {
                    cardNumberValid=true;
                }
            }
            else {
                showWarningMessage("#txt_warningMessage", "Please input 16 numbers for your card!")
            }
            if($("#inp_signupPassword").val() == $("#inp_signupConfirmPassword").val()) {
                console.log("Passwords Match");
            }
            else {
                showWarningMessage("#txt_warningMessage", "The passwords don't match!")
            }
            if(cardNumberValid && cardMonthValid && cardYearValid && cardCVVValid){
              writeUserData($("#inp_signupUsername").val(), $("#inp_signupPassword").val(), $("#inp_cardNumber").val(), $("#inp_cardExpirationMonth").val(),$("#inp_cardExpirationYear").val(),$("#inp_cardName").val(),$("#inp_cardCVV").val());
              setTimeout(function(){window.location="account.html";}, 500);
          }
        }
    });

});
