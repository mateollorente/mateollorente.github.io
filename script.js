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
        const nombre = document.getElementById("nombre").value;
        const mensaje = document.getElementById("mensaje");
        mensaje.textContent = `¡Hola, ${nombre}!`;

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
        const numSmallFlowers = 10;
        for (let i = 0; i < numSmallFlowers; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower-daisy small';
            flower.style.left = Math.random() * 100 + '%';
            flower.style.top = Math.random() * 80 + '%';
            flower.style.animationDuration = 4 + Math.random() * 4 + 's';
            flower.style.animationDelay = Math.random() * 5 + 's';

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

    // Función para crear flores grandes cayendo
    function fallingFlowers() {
        const numFlowers = 15;
        for (let i = 0; i < numFlowers; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower-daisy falling';
            flower.style.left = Math.random() * 100 + '%';
            flower.style.animationDuration = 5 + Math.random() * 5 + 's';
            flower.style.animationDelay = Math.random() * 5 + 's';

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

});
window.addEventListener("load", () => {
    fetch(window.location.href, { cache: "no-store" })
        .then(() => console.log("Cargando última versión"))
        .catch(() => console.log("Error al recargar"));
});
