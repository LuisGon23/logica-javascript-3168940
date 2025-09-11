const formulario = document.querySelector(".form")
const inputNombre = document.querySelector(".inputNombre")
const listaColores = document.querySelector("#color")
const userPage = document.querySelector(".userPage")
const imgEquipo = document.querySelector(".img-equipo")
const textSaludo = document.querySelector(".text-saludo")
const textEquipo = document.querySelector(".text-equipo")

const traducirColor = (color) => {
  const colores = {
    Rojo: "red",
    Verde: "green",
    Naranja: "orange"
  }
  return colores[color] || color 
}

const enviarData = (e) => {
  e.preventDefault()

  const equipo = document.querySelector('input[name="equipo"]:checked')

  const userInfo = {
    nombre: inputNombre.value,
    color: listaColores.value,
    equipo: equipo.value
  }

  console.log(userInfo)

  document.body.style.background = traducirColor(userInfo.color)

  textSaludo.textContent = `Hola ${userInfo.nombre}`
  textEquipo.textContent = userInfo.equipo

  userPage.style.display = "block"
  formulario.style.display = "none"
}

formulario.addEventListener("submit", enviarData)
