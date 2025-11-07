window.addEventListener('scroll', function() {
            
            // 2. Obtenemos el elemento que queremos cambiar
            const perfil = document.getElementById('miPerfil');

            // 3. Definimos un "punto de activación"
            // Por ejemplo, 50 píxeles desde la parte superior
            const triggerPoint = 50; 

            // 4. Comprobamos la posición del scroll
            if (window.scrollY > triggerPoint) {
                // Si el usuario ha bajado MÁS de 50px,
                // añadimos la clase .modo-header
                perfil.classList.add('modo-header');
            } else {
                // Si está ARRIBA de 50px (o en el inicio),
                // quitamos la clase .modo-header
                perfil.classList.remove('modo-header');
            }
        });