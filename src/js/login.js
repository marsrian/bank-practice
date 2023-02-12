document.getElementById("btn-submit").addEventListener("click",function(){
    const emailField = document.getElementById("email-field");
    const email = emailField.value;

    const passwordField = document.getElementById("password-field");
    const password = passwordField.value;

    if(email === "borolox@gmail.com" && password === "borolox420"){
        window.location.href = 'bank.html'
    }
    else{
        alert("tui tor email password vuila jas? tui kiser borolox!!!!!")
    }
})