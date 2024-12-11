function checkUsername() {
    var username = document.getElementById("username").value;
    var error = document.getElementById("username-error");
    if (username.trim() === "") {
        error.style.display = "inline";
    } else {
        error.style.display = "none";
    }
}
function checkPassword() {
    var password = document.getElementById("username").value;
    var error = document.getElementById("password-error");
    if (password.trim() === "") {
        error.style.display = "inline";
    } else {
        error.style.display = "none";
    }
}

function checkEmail() {
    var email = document.getElementById("email").value;
    var error = document.getElementById("email-error");
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        error.style.display = "inline";
    } else {
        error.style.display = "none";
    }
}

function checkPasswordLength() {
    var password = document.getElementById("password").value;
    var error = document.getElementById("password-error");
    if (password.length < 8) {
        error.style.display = "inline";
    } else {
        error.style.display = "none";
    }
}

function checkConfirmPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var error = document.getElementById("confirm-password-error");
    if (password !== confirmPassword) {
        error.style.display = "inline";
    } else {
        error.style.display = "none";
    }
}

function validateForm() {
    // Run validation checks
    checkUsername();
    checkEmail();
    checkPasswordLength();
    checkConfirmPassword();

    // If any error message is displayed, prevent form submission
    if (document.getElementById("username-error").style.display === "inline" ||
        document.getElementById("email-error").style.display === "inline" ||
        document.getElementById("password-error").style.display === "inline" ||
        document.getElementById("confirm-password-error").style.display === "inline") {
        return false; // Prevent form submission
    }

    // If everything is valid, redirect to login page
    window.location.href = "login.html"; // Redirect to login.html in the same folder
    return false; // Prevent actual form submission (since we handle redirect manually)
}