/* =========================================
   WEBSITE VARIABLES
========================================= */

let noCount = 0;
let currentPage = 1;
let heartsStarted = false;


/* =========================================
   PAGE CHANGING FUNCTION
========================================= */

function goToPage(pageNumber) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });


    const nextPage = document.getElementById(
        "page" + pageNumber
    );


    if (nextPage) {

        nextPage.classList.add("active");

        currentPage = pageNumber;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    /* Start floating hearts when final page opens */

    if (pageNumber === 6) {

        startFinalHearts();
    }


    /* Start floating hearts on boyfriend day page */

    if (pageNumber === 2) {

        startBoyfriendHearts();
    }
}


/* =========================================
   YES BUTTON
========================================= */

function sayYes() {

    const question = document.getElementById("reaction");

    const yesButton = document.getElementById("yesBtn");

    const noButton = document.getElementById("noBtn");


    /* Reset the button appearance */

    yesButton.style.transform = "scale(1)";

    noButton.style.transform = "scale(1)";


    /* Cute reaction */

    question.innerHTML =
        "heheee I knew you'd say yes 🥹💗";


    question.style.transform = "scale(1.15)";


    /* Small heart celebration */

    createMiniHeart();


    setTimeout(function() {

        goToPage(2);

    }, 900);
}


/* =========================================
   NO BUTTON
========================================= */

function sayNo() {

    noCount++;


    const yesButton = document.getElementById("yesBtn");

    const noButton = document.getElementById("noBtn");

    const reaction = document.getElementById("reaction");

    const heart = document.querySelector(".heart");


    /* =====================================
       YES GETS BIGGER
    ====================================== */

    let yesScale = 1 + (noCount * 0.22);


    /* Don't let it become ridiculously huge */

    if (yesScale > 3.5) {

        yesScale = 3.5;
    }


    yesButton.style.transform =
        "scale(" + yesScale + ")";


    /* =====================================
       NO GETS SMALLER
    ====================================== */

    let noScale = 1 - (noCount * 0.10);


    if (noScale < 0.45) {

        noScale = 0.45;
    }


    noButton.style.transform =
        "scale(" + noScale + ")";


    /* =====================================
       CHANGE REACTION TEXT
    ====================================== */

    if (noCount === 1) {

        reaction.innerHTML =
            "ummm... are you sure? 🥺";

    }

    else if (noCount === 2) {

        reaction.innerHTML =
            "excuse me??? 😭💗";

    }

    else if (noCount === 3) {

        reaction.innerHTML =
            "okayyy but look at that YES button 👀";

    }

    else if (noCount === 4) {

        reaction.innerHTML =
            "the YES button is getting impatient hehe 😭";

    }

    else if (noCount === 5) {

        reaction.innerHTML =
            "you really wanna keep clicking NO? 😭";

    }

    else if (noCount >= 6) {

        reaction.innerHTML =
            "BABE JUST CLICK YES ALREADY 😭💗";
    }


    /* =====================================
       HEART REACTION
    ====================================== */

    heart.style.transform =
        "scale(0.85) rotate(-8deg)";


    heart.style.filter =
        "grayscale(0.15) drop-shadow(0 0 10px #ff7dcc)";


    setTimeout(function() {

        heart.style.transform = "";

    }, 300);


    /* =====================================
       NO BUTTON MOVES A LITTLE
    ====================================== */

    if (noCount >= 3) {

        const randomX =
            Math.floor(Math.random() * 70) - 35;

        const randomY =
            Math.floor(Math.random() * 40) - 20;


        noButton.style.position = "relative";

        noButton.style.left =
            randomX + "px";

        noButton.style.top =
            randomY + "px";
    }


    /* =====================================
       EXTRA HEART
    ====================================== */

    createMiniHeart();
}


/* =========================================
   MINI HEART EFFECT
========================================= */

function createMiniHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💗";

    heart.style.position = "fixed";

    heart.style.left =
        (40 + Math.random() * 20) + "%";

    heart.style.top = "50%";

    heart.style.fontSize =
        (18 + Math.random() * 20) + "px";

    heart.style.zIndex = "100";

    heart.style.pointerEvents = "none";

    heart.style.transition =
        "all 1s ease";

    document.body.appendChild(heart);


    setTimeout(function() {

        heart.style.transform =
            "translateY(-120px) scale(1.4)";

        heart.style.opacity = "0";

    }, 50);


    setTimeout(function() {

        heart.remove();

    }, 1100);
}


/* =========================================
   FLOATING HEARTS — BOYFRIEND DAY
========================================= */

function startBoyfriendHearts() {

    if (heartsStarted) {
        return;
    }


    heartsStarted = true;


    const container =
        document.getElementById("floatingHearts");


    if (!container) {
        return;
    }


    setInterval(function() {

        createBoyfriendHeart(container);

    }, 900);
}


/* =========================================
   CREATE BOYFRIEND HEART
========================================= */

function createBoyfriendHeart(container) {

    const heart =
        document.createElement("div");


    heart.className =
        "background-heart";


    const heartChoices = [
        "💗",
        "💕",
        "💖",
        "♡",
        "✦",
        "✨"
    ];


    heart.innerHTML =
        heartChoices[
            Math.floor(
                Math.random() *
                heartChoices.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (14 + Math.random() * 24) + "px";


    heart.style.animationDuration =
        (5 + Math.random() * 4) + "s";


    container.appendChild(heart);


    setTimeout(function() {

        heart.remove();

    }, 10000);
}


/* =========================================
   FINAL PAGE HEARTS
========================================= */

let finalHeartStarted = false;


function startFinalHearts() {

    if (finalHeartStarted) {
        return;
    }


    finalHeartStarted = true;


    setInterval(function() {

        createFinalHeart();

    }, 500);
}


/* =========================================
   CREATE FINAL HEART
========================================= */

function createFinalHeart() {

    const container =
        document.getElementById("heartContainer");


    if (!container) {
        return;
    }


    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    const choices = [
        "💗",
        "💕",
        "💖",
        "💓",
        "♡",
        "✨"
    ];


    heart.innerHTML =
        choices[
            Math.floor(
                Math.random() *
                choices.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (16 + Math.random() * 30) + "px";


    const duration =
        5 + Math.random() * 5;


    heart.style.animationDuration =
        duration + "s";


    container.appendChild(heart);


    setTimeout(function() {

        heart.remove();

    }, duration * 1000);
}


/* =========================================
   PREVENT ACCIDENTAL RIGHT-CLICK
   OPTIONAL
========================================= */

/*
document.addEventListener(
    "contextmenu",
    function(event) {
        event.preventDefault();
    }
);
*/


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "Website loaded successfully 💗"
        );

    }
);
