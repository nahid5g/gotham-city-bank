document.getElementById("login-btn").addEventListener("click",function(){
    const emailField = document.getElementById("email-field");
    const passwordField = document.getElementById("password-field");
    if (emailField.value == "nahid@email.com" && passwordField.value == "12345") {
        window.location.href = "bank.html";
    }
})