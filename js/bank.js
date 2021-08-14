document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    // console.log(userEmail);

    //get user password
    const userPass = document.getElementById("user-password").value;
    // console.log(userPass);

    if (userEmail == "sontan@bap.com" && userPass == "secret") {
        window.location.href = "banking.html";
    }
})