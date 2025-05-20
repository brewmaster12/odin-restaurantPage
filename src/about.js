const stuff = document.createElement("p");
stuff.textContent = "About stuff";

const content = document.getElementById("content");
const loadAbout = () => {
    content.append(stuff);
}


export {loadAbout};