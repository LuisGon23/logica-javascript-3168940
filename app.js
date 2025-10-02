document.addEventListener('DOMContentLoaded', () => {


    const tramaPuntos = [
        "El anuncio de la demolición del museo.",
        "Raizura decide ir al museo.",
        "Encuentro con el piano y aparición de Fruko.",
        "Raizura acepta ser entrenado por Fruko.",
        "Raizura decide ir a la plaza para dar un concierto."
    ];
    let puntoActualIndex = 0; 

    const rutasImagenes = [
        "museo_2.jpeg", 
        "Concierto.jpeg", 
    ];
    let imagenActualIndex = 0; 
    
    // --- FUNCIÓN 1: Cambiar el estilo de un elemento (Opacidad y Transformación) ---
    
    const moverBtn = document.querySelector('#mover');
    const restaurarBtn = document.querySelector('#restaurar');
    const cajaNarrativa = document.querySelector('#caja-narrativa');

    cajaNarrativa.style.opacity = "0.5";
    moverBtn.addEventListener("click", () => {
        // Hace que la caja sea nítida y completamente visible
        cajaNarrativa.style.opacity = "1"; 

    });

    restaurarBtn.addEventListener("click", () => {
        cajaNarrativa.style.opacity = "0.5";
    });


    
    // --- FUNCIÓN 2: Leer el valor de un input y manipular el texto (textContent)

    const inputNombre = document.querySelector('#nombre');
    const enviarBtn = document.querySelector('#enviar');
    const mensaje = document.querySelector('#mensaje');

    enviarBtn.addEventListener("click", () => {
        const nombreUsuario = inputNombre.value.trim();
        if (nombreUsuario === '') {
            mensaje.textContent = `Fruko te mira en silencio. Debes escribir tu nombre para que te hable.`;
        } else {
            
            mensaje.textContent = `Fruko sonríe. Su voz retumba: "El ritmo no se aprende con la cabeza, ${nombreUsuario}, se siente con el corazón."`;
            inputNombre.value = ''; 
        }
    });


    // --- FUNCIÓN 3: Cambiar el atributo src de una imagen ---
    const foto = document.querySelector('#foto');
    const cambiarBtn = document.querySelector('#cambiar');

    cambiarBtn.addEventListener("click", () => {
        imagenActualIndex = (imagenActualIndex + 1) % rutasImagenes.length;
        foto.src = rutasImagenes[imagenActualIndex];
    });


    // --- FUNCIÓN 4: Cambiar el estilo de fondo (backgroundColor) 
    const navLinks = document.querySelectorAll('#menu-principal a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');

            const color = link.dataset.color;
            document.body.style.backgroundColor = color;
        });
    });


    // --- FUNCIÓN 5: Crear y agregar nuevos elementos al DOM (createElement) ---
    const listaPuntos = document.querySelector('#lista-puntos');
    const agregarPuntoBtn = document.querySelector('#agregar-punto');

    agregarPuntoBtn.addEventListener("click", () => {
        if (puntoActualIndex < tramaPuntos.length) {
            const nuevoLi = document.createElement('li');
            nuevoLi.textContent = tramaPuntos[puntoActualIndex];
            listaPuntos.appendChild(nuevoLi);
            puntoActualIndex++;
        }
        
        if (puntoActualIndex === tramaPuntos.length) {
            agregarPuntoBtn.textContent = 'Trama Completa';
            agregarPuntoBtn.disabled = true;
            agregarPuntoBtn.style.backgroundColor = '#6c757d'; 
        }
    });
});