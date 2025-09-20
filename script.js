function mostrarNombre() {
            const audio = document.getElementById('miAudio');
            audio.play();
            //const audio2 = document.getElementById('miAudio2');
            //audio2.play();
            const nombre = document.getElementById("nombre").value;
            const mensaje = document.getElementById("mensaje");
            mensaje.textContent = `¡Hola, ${nombre}!`;
            const elementos = document.querySelectorAll('.flower');
            elementos.forEach(elemento => {
                elemento.style.display = 'flex'; // Muestra el elemento
            });
            const element = document.querySelectorAll('.pedido');
            element.forEach(elemento => {
                elemento.style.display = 'none'; // Muestra el elemento
            });
             // Mostrar la flor principal
            document.querySelector('.flower').style.display = 'flex';

            // Activar el fondo animado
            document.body.classList.add('celebration');
            crearFloresSmall();
            fallingFlowers();
        }
function fallingFlowers(){
    // Cantidad de margaritas que caerán
    const numFlowers = 15;

    for (let i = 0; i < numFlowers; i++) {
        // Crear la flor
        const flower = document.createElement('div');
        flower.className = 'flower-daisy falling';

        // Posición horizontal aleatoria
        flower.style.left = Math.random() * 100 + '%';

        // Duración y retraso aleatorios para que no caigan todas igual
        flower.style.animationDuration = 5 + Math.random() * 5 + 's';
        flower.style.animationDelay = Math.random() * 5 + 's';

        // Crear los 8 pétalos
        for (let j = 0; j < 8; j++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            flower.appendChild(petal);
        }

        // Crear el centro
        const center = document.createElement('div');
        center.className = 'center';
        flower.appendChild(center);

        // Agregar al body
        document.body.appendChild(flower);
    }
}


function crearFloresSmall() {
    const numSmallFlowers = 10;

    for (let i = 0; i < numSmallFlowers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower-daisy small';

        // Posición aleatoria
        flower.style.left = Math.random() * 100 + '%';
        flower.style.top = Math.random() * 80 + '%';

        // Animación aleatoria
        flower.style.animationDuration = 4 + Math.random() * 4 + 's';
        flower.style.animationDelay = Math.random() * 5 + 's';

        // Crear pétalos
        for (let j = 0; j < 8; j++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            flower.appendChild(petal);
        }

        // Crear centro
        const center = document.createElement('div');
        center.className = 'center';
        flower.appendChild(center);

        // Agregar al body
        document.body.appendChild(flower);
    }
}
const mid = document.querySelector('.mid');
const audio = document.getElementById('miAudio');

mid.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        mid.style.background = 'radial-gradient(circle, #ff5e00, #000)'; // opcional, cambia color al reproducir
    } else {
        audio.pause();
        mid.style.background = 'radial-gradient(circle, #000, #ff5e00, #000)'; // color al pausar
    }
});
mid.classList.toggle('playing', !audio.paused);
