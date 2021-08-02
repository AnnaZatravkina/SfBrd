const openMenu = document.querySelector("#fullscreenmenu");
const body = document.body;

openMenu.addEventListener("click", e => {
    const fullscreenmenuElement = document.createElement("div");
    fullscreenmenuElement.classList.add("fullscreenmenu");

    body.appendChild(fullscreenmenuElement);
})