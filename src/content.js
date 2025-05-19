import restaurantImage from "./assets/restaurant.jpg";
const image = document.createElement("img");
image.src = restaurantImage;

const heading = document.createElement("h1");
heading.textContent = "The Best Restaurant";

const subtitle = document.createElement("p");
subtitle.textContent = "This restaurant is so bloody wonderful!";

const content = document.getElementById("content");
const loadContent = () => {
    content.append(image, heading, subtitle);
}


export {loadContent};