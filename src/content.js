const image = document.createElement("img");

const heading = document.createElement("h1");
heading.textContent = "The Best Restaurant";

const subtitle = document.createElement("p");
subtitle.textContent = "This restaurant is so bloody wonderful!";

const content = document.getElementById("content");
const loadContent = () => {
    content.append(image, heading, subtitle);
}


export {loadContent};