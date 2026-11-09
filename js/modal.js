//Modal Menu
export const abrirMenu = document.getElementById("abrir-menu");
export const fecharMenu = document.getElementById("fechar-menu");
export const modalMenu = document.getElementById("modal-menu");

abrirMenu.addEventListener("click", () => {
    modalMenu.classList.add("ativo");
    modalMenu.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
});

fecharMenu.addEventListener("click", () => {
    modalMenu.classList.remove("ativo");
    modalMenu.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    abrirMenu.focus();
});

modalMenu.addEventListener("click", (evento) => {
    if (evento.target === modalMenu) {
        modalMenu.classList.remove("ativo");
        modalMenu.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && modalMenu.classList.contains("ativo")) {
        modalMenu.classList.remove("ativo");
        modalMenu.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

        abrirMenu.focus();
    }
});

//Modal da História & Experiência
export const abrirHistoria = document.getElementById("abrir-historia");
export const fecharHistoria = document.getElementById("fechar-historia");
export const modalHistoria = document.getElementById("modal-historia");

abrirHistoria.addEventListener("click", () => {
    modalHistoria.classList.add("ativo");
    modalHistoria.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
});

fecharHistoria.addEventListener("click", () => {
    modalHistoria.classList.remove("ativo");
    modalHistoria.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

    abrirHistoria.focus();
});

modalHistoria.addEventListener("click", (evento) => {
    if (evento.target === modalHistoria) {
        modalHistoria.classList.remove("ativo");
        modalHistoria.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";
    }
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape" && modalHistoria.classList.contains("ativo")) {
        modalHistoria.classList.remove("ativo");
        modalHistoria.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

        abrirHistoria.focus();
    }
});