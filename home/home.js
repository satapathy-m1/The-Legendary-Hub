/*
document.addEventListener("DOMContentLoaded", () => {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user) {
        window.location.href = "authentication/login.html"; // Redirect if not logged in
        return;
    }

    let characterImages = {
        "Ted Mosby": "assets/ted.jpeg",
        "Barney Stinson": "assets/barney.jpeg",
        "Robin Scherbatsky": "assets/robin.jpeg",
        "Marshall Eriksen": "assets/marshall.jpeg",
        "Lily Aldrin": "assets/lily.png"
    };

    document.getElementById("character-image").src = characterImages[user.favCharacter] || "assets/default.png";
    document.getElementById("welcome-message").innerText = `Hey ${user.name}, ${user.favCharacter} welcomes you to MacLaren’s!`;
});
*/

document.addEventListener("DOMContentLoaded", function () {
    let userData = JSON.parse(localStorage.getItem("loggedInUser")) || {};
    //userArray.push(userData);
    let welcomeMessage = document.getElementById("welcome-message");
    let characterQuote = document.getElementById("character-quote");
    let characterImage = document.getElementById("character-image");

    if (userData.name && userData.favCharacter) {
        welcomeMessage.innerText = `Welcome, ${userData.name}!`;

        let quotes = {
            "Barney Stinson": "Suit up! This is going to be legendary!",
            "Ted Mosby": "You can’t design your life like a building.",
            "Robin Scherbatsky": "But umm, I'm Sparkles!",
            "Marshall Eriksen": "Lawyered!",
            "Lily Aldrin": "Where’s the poop, Ted?"
        };

        let images = {
            "Barney Stinson": "assets/barney.jpeg",
            "Ted Mosby": "assets/ted.jpeg",
            "Robin Scherbatsky": "assets/robin.jpeg",
            "Marshall Eriksen": "assets/marshall.jpeg",
            "Lily Aldrin": "assets/lily.jpeg"
        };

        // Ensure case-sensitive exact match
        let selectedCharacter = userData.favCharacter.trim();

        if (quotes[selectedCharacter]) {
            characterQuote.innerText = quotes[selectedCharacter];
        } else {
            characterQuote.innerText = "This is going to be legendary!";
        }

        if (images[selectedCharacter]) {
            characterImage.src = images[selectedCharacter];
            characterImage.alt = selectedCharacter;
        } else {
            characterImage.src = "default.png";  // Fallback image
        }
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const catchphrases = [
        { text: "Suit Up!", character: "barney.jpeg" },
        { text: "Wait for it... Legendary!", character: "barney.jpeg" },
        { text: "Challenge Accepted!", character: "barney.jpeg" },
        { text: "Haaaave you met Ted?", character: "ted.jpeg" },
        { text: "Nothing good happens after 2 AM.", character: "ted.jpeg" },
        { text: "Lebenslangerschicksalsschatz.", character: "ted.jpeg" },
        { text: "You just got Slapped!", character: "marshall.jpeg" },
        { text: "I'm not the Blitz!", character: "marshall.jpeg" },
        { text: "Come again for Big Fudge!", character: "marshall.jpeg" },
        { text: "Lawyered!", character: "marshall.jpeg" },
        { text: "Robin Sparkles forever!", character: "robin.jpeg" },
        { text: "Let's go to the mall!", character: "robin.jpeg" },
        { text: "Oh, honey...", character: "lily.jpeg" },
        { text: "You son of a beetch!", character: "lily.jpeg" },
        { text: "Nobody asked you, Patrice!", character: "robin.jpeg" }
    ];

    const catchphraseBtn = document.getElementById("catchphrase-btn");
    const catchphraseDisplay = document.getElementById("catchphrase-display");
    const catchphraseCharacter = document.getElementById("catchphrase-character");

    catchphraseBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * catchphrases.length);
        const selectedCatchphrase = catchphrases[randomIndex];

        catchphraseDisplay.innerText = `"${selectedCatchphrase.text}"`;
        catchphraseCharacter.src = `assets/${selectedCatchphrase.character}`;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const authLink = document.getElementById("auth-link");

    function checkLoginStatus() {
        const isLoggedIn = localStorage.getItem("userLoggedIn");

        if (isLoggedIn) {
            authLink.textContent = "Logout";
            authLink.href = "#";
            authLink.addEventListener("click", logout);
        } else {
            
            authLink.textContent = "Signup/Login";
            authLink.href = "../authentication/login.html";
        }
    }

    function logout() {
        localStorage.removeItem("userLoggedIn");
        alert("You have been logged out!");
        
        location.reload();
    }

    // Check if redirected from login page
    if (localStorage.getItem("redirectedFromLogin")) {
        localStorage.removeItem("redirectedFromLogin");
        
        location.reload();  // Force reload to update navbar
    }

    checkLoginStatus();
});
