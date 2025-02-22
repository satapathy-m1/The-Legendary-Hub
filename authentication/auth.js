document.addEventListener("DOMContentLoaded", () => {
    // Register Form Handling
    let registerForm = document.getElementById("register-form");
    let userArray = [];
    const users = JSON.parse(localStorage.getItem("loggedInUser"))
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let username = document.getElementById("username").value;
            let favCharacter = document.getElementById("fav-character").value;

            let userData = { name, email, username, favCharacter };
            users.push(userData);
            localStorage.setItem("loggedInUser", JSON.stringify(users));

            alert("Registration successful! Redirecting...");
            window.location.href = "../home/index.html"; 
        });
    }

    // Login Form Handling
    let loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username-login").value;
            console.log(username);
            let storedUser = users.find(username);
            console.log(storedUser);
            
            
            if (storedUser && storedUser.username === username) {
                alert("Login successful! Redirecting...");
                window.location.href = "../home/index.html";
            } else {
                alert("User not found! Try again or register.");
            }
        });
    }
});
