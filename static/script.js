document.addEventListener('DOMContentLoaded', () => {

        // 1. Seleccionar todas las secciones y los enlaces
        //    (Asegúrate de que tus secciones son <section> con un id)
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('nav a');

        // 2. Opciones para el observador
        const options = {
            root: null, // Observa en relación al viewport completo
            rootMargin: '0px',
            threshold: 0.5 // Se activa cuando el 50% de la sección es visible
        };

        // 3. ESTA ES TU FUNCIÓN (Está perfecta)
        const onIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    
                    const id = entry.target.id; // ej: "proyectos"

                    // Quitamos 'active' de TODOS los enlaces
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });

                    // Añadimos 'active' SÓLO al enlace correcto
                    const activeLink = document.querySelector(`nav a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        };

        // 4. Crear el observador y ponerlo en marcha
        const observer = new IntersectionObserver(onIntersection, options);

        // 5. "Vigilar" cada sección
        sections.forEach(section => {
            observer.observe(section);
        });
    });