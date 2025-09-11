//Seleccionar los elementos con los que va a interactuar o los que responden a la interacción

const pantalla = document.querySelector(".pantalla")
const btnMenos = document.querySelector(".btn-menos")
const btnMas = document.querySelector(".btn-mas")
const body = document.body;
let counter= 0

//2. Función

function incrementar () {   
    counter++ 
    pantalla.textContent = counter

    if (counter === 10) { 
        pantalla.style.color = "red"
    }
    if (counter === 30) {
        body.style.backgroundColor = "yellow";
    }
}

function decrementar () {   
    if (counter > 0) {
        counter--
        if (counter < 10) { 
            pantalla.style.color = "black"
        }
        pantalla.textContent = counter
    }
}


//3. Crear el evento

btnMas.addEventListener("click", incrementar)
btnMenos.addEventListener("click", decrementar)