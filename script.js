document.addEventListener("DOMContentLoaded", () => {

    const mid = document.querySelector('.mid');
    const audio = document.getElementById('miAudio');

    // Botón de play/pause
    mid.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(err => console.log(err));
            mid.style.background = 'radial-gradient(circle, #ff5e00, #000)';
        } else {
            audio.pause();
            mid.style.background = 'radial-gradient(circle, #000, #ff5e00, #000)';
        }

        // Actualizar clase playing
        mid.classList.toggle('playing', !audio.paused);
    });

    // Función para mostrar nombre y activar la celebración
    window.mostrarNombre = function() {
        audio.play().catch(err => console.log(err));
        const inputNombre = document.getElementById("nombre");
        const nombre = inputNombre.value.toUpperCase();
        const mensaje = document.getElementById("mensaje");
        mensaje.textContent = `¡HOLA, ${nombre}!`;

        // Mostrar flor principal
        document.querySelector('.flower').style.display = 'flex';

        // Ocultar formulario
        const elementos = document.querySelectorAll('.pedido');
        elementos.forEach(el => el.style.display = 'none');

        // Activar fondo animado
        document.body.classList.add('celebration');

        // Crear flores
        crearFloresSmall();
        fallingFlowers();
    };

    // Función para crear flores pequeñas flotando
function crearFloresSmall() {
    const numSmallFlowers = 25;
    const rows = 5; // filas
    const cols = 5; // columnas
    const cellWidth = 100 / cols;
    const cellHeight = 80 / rows;

    for (let i = 0; i < numSmallFlowers; i++) {
        const row = Math.floor(i / cols);
        const col = i % cols;

        const flower = document.createElement('div');
        flower.className = 'flower-daisy small';

        // Posición aleatoria dentro de la celda
        flower.style.left = col * cellWidth + 5 + Math.random() * (cellWidth - 10) + '%';
        flower.style.top = row * cellHeight + 5 + Math.random() * (cellHeight - 10) + '%';

        // Escala aleatoria para variar tamaño sin romper alineación
        const scale = 0.5 + Math.random() * 0.5; // entre 0.5 y 1
        flower.style.transform = `scale(${scale})`;

        flower.style.animationDuration = 4 + Math.random() * 4 + 's';
        flower.style.animationDelay = Math.random() * 5 + 's';

        // Crear pétalos
        for (let j = 0; j < 8; j++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            flower.appendChild(petal);
        }

        const center = document.createElement('div');
        center.className = 'center';
        flower.appendChild(center);

        document.body.appendChild(flower);
    }
}



    

function fallingFlowers() {
    const numFlowers = 15;
    const cols = numFlowers; // Una flor por columna
    const cellWidth = 100 / cols;

    for (let i = 0; i < numFlowers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower-daisy falling';

        // Posición horizontal usando celdas con pequeño desplazamiento aleatorio
        flower.style.left = i * cellWidth + Math.random() * (cellWidth - 5) + '%';

        // Tamaño aleatorio usando scale
        const scale = 0.4 + Math.random() * 0.8; // entre 0.4 y 1.2

        flower.style.transform = `scale(${scale})`;

        // Animación: velocidad inversamente proporcional al tamaño
        const minDuration = 4; // más rápido
        const maxDuration = 9; // más lento
        const duration = minDuration + ((scale - 0.4) / 0.8) * (maxDuration - minDuration);
        flower.style.animationDuration = duration + 's';
        flower.style.animationDelay = Math.random() * 5 + 's';

        // Crear pétalos
        for (let j = 0; j < 8; j++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            flower.appendChild(petal);
        }

        // Centro de la flor
        const center = document.createElement('div');
        center.className = 'center';
        flower.appendChild(center);

        // Agregar al body
        document.body.appendChild(flower);
    }
}



});
window.addEventListener("load", () => {
    fetch(window.location.href, { cache: "no-store" })
        .then(() => console.log("Cargando última versión"))
        .catch(() => console.log("Error al recargar"));
});
