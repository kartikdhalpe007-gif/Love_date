
function nextScreen(screenNumber) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    document.getElementById("screen" + screenNumber)
        .classList.add("active");
}

function showMessage() {
    document.getElementById("responseMessage").textContent =
        "That's okay, Sanskruti ❤️ Take your time. There's no pressure.";
}

function saveDate() {
    const datePicker = document.getElementById("datePicker");
    const selectedDate = datePicker.value;

    if (selectedDate === "") {
        document.getElementById("dateMessage").textContent =
            "Please choose a date first! 💕";
        return;
    }

    document.getElementById("dateMessage").textContent =
        "Our selected date is " + selectedDate + "! ❤️";

    // Automatically move to the final screen after 2 seconds.
    setTimeout(function() {
        nextScreen(6);
    }, 2000);
}

function showTabAgain() {
    document.getElementById("datePicker").value = "";

    document.getElementById("dateMessage").textContent = "";

    document.getElementById("responseMessage").textContent = "";

    nextScreen(1);
}

// Create floating hearts
function createHeart() {
    const container = document.getElementById("hearts-container");

    if (!container) {
        return;
    }

    const heart = document.createElement("span");

    heart.className = "heart";
    heart.textContent = ["❤️", "💕", "💖", "💗", "💘"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    container.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 8000);
}

// Create a heart every 500 milliseconds
setInterval(createHeart, 500);


// Play or pause romantic music
function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    const button = document.getElementById("musicButton");

    if (music.paused) {
        music.play()
            .then(function() {
                button.textContent = "⏸️ Pause Music";
            })
            .catch(function() {
                alert(
                    "Please add romantic.mp3 to your static folder first. ❤️"
                );
            });
    } else {
        music.pause();
        button.textContent = "🎵 Play Romantic Music";
    }
}


// Final romantic surprise
function showFinalSurprise() {
    alert(
        "Dear Sanskruti ❤️\n\n" +
        "You make this little world brighter. 🌹\n\n" +
        "Thank you for being you. 💖\n\n" +
        "Sending you a thousand smiles and a little love! 🥰"
    );
}


