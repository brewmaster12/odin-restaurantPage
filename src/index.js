import {loadHome} from "./home.js";
import {loadMenu} from "./menu.js";
import {loadAbout} from "./about.js";

const content = document.getElementById("content");

function clearContent() {
    content.textContent = "";
}

const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
    clearContent()
    loadHome()
});

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", () => {
    clearContent()
    loadMenu()
});
const aboutBtn = document.getElementById("aboutBtn");
aboutBtn.addEventListener("click", () => {
    clearContent()
    loadAbout()
});


loadHome();

