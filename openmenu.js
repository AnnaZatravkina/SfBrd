const openMenu = document.querySelector("#open");
const body = document.body;

openMenu.addEventListener("click", e => {
    const openElement = document.createElement("div");
    openElement.classList.add("open");

    body.appendChild(openElement);
})