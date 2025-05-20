const stuff = document.createElement("p");
stuff.textContent = "Menu stuff";

const content = document.getElementById("content");
const loadMenu = () => {
    content.append(stuff);
}


export {loadMenu};