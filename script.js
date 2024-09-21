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
        }