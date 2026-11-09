export const botaoMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
export const linksMenu = document.querySelectorAll(".menu a");

botaoMenu.addEventListener("click", () => {
    const menuAberto = menu.classList.toggle("ativo");

    botaoMenu.setAttribute("aria-expanded", menuAberto);
});

linksMenu.forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("ativo");
        botaoMenu.setAttribute("aria-expanded", "false");
    });
});