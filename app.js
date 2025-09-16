const titulo = document.querySelector(".titulo");
const screen = document.querySelector(".screen");
const miniaturas = document.querySelector(".contenedor-min");

console.log(titulo); // Si sale null, esta mal capturado
console.log(screen); // Si sale null, esta mal capturado
console.log(miniaturas); // Si sale null, esta mal capturado

// Función 2
function cambiarImg(event) {
  if(!event.target.src) return 
  titulo.textContent = event.target.name;
  screen.src = event.target.src;

  document.body.style.background = `url(${event.target.src}) no-repeat center center/cover`;
}


// Función 3
miniaturas.addEventListener("click", cambiarImg);
