"use strict";

// Variabler
let menuBtnEl = document.querySelector(".menubtn");
let containerEl = document.querySelector("div");

// Händelselyssnare vid klick somm anropar funktioner
menuBtnEl.addEventListener("click", transformMenu);
menuBtnEl.addEventListener("click", dropDownMenu);

// Funktion för att växla mellan klassen cross samt opacity vid klick.
// Hämtar element genom class.
function transformMenu() {
    let menuiconEl = document.querySelector(".menuicon")
    menuiconEl.classList.toggle("cross");
    containerEl.classList.toggle("opacity");
}

// Funktion för att växla mellan att visa och dölja länkar i navigering när hamburgermenyn klickas.
function dropDownMenu() {
    // Hämtar element genom ID till länkarna.
    let mobilenavEl = document.getElementById("mobilenav");
    // Hämtar element genom ID till menytext.
    let menutextEl = document.getElementById("menutext");
    let style = window.getComputedStyle(mobilenavEl);
    // Kontroll om menyn visas som block, döljer länkar & visar menytext
    if (style.display === "block") {
        mobilenavEl.style.display = "none";
        menutextEl.innerHTML = "Meny";
    } else {
        // Om meny inte visas som block (display: none), visar block vid klick och döljer menytext
        mobilenavEl.style.display = "block";
        menutextEl.innerHTML = "Stäng";
    }
}
