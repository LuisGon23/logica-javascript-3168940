const titulo = document.querySelector(".titulo");
const contenedor = document.getElementById("contenedor");
const btnSigui = document.querySelector(".btn-next");
const btnAnt = document.querySelector(".btn-prev");
const titulos = [
    "Primera Imagen",
    "Segunda Imagen",
    "Tercera Imagen",
    "Cuarta Imagen",
    "Quinta Imagen"
];
let i = 0;

btnAnt.addEventListener("click", () => {
    if (i > 0) {
        i--;
        titulo.textContent = titulos[i];
        contenedor.style.marginLeft = `-${i * 400}px`;
        contenedor.style.transitionDuration = ".5s";
    }
});

btnSigui.addEventListener("click", () => {
    if (i < titulos.length - 1) {
        i++;
        titulo.textContent = titulos[i];
        contenedor.style.marginLeft = `-${i * 400}px`;
        contenedor.style.transitionDuration = ".5s";
    }
});

// Inicializa la galería
titulo.textContent = titulos[i];
contenedor.style.marginLeft = `-${i * 400}px`;
contenedor.style.transitionDuration = ".5s";