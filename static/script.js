document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const onIntersection = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                const id = entry.target.id;

                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                const activeLink = document.querySelector(`nav a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    };

    const observer = new IntersectionObserver(onIntersection, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    const progressBar = document.querySelector('.scroll-progress-bar');

    function updateScrollProgress() {
        if (!progressBar) return;

        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) : 0;

        progressBar.style.transform = `scaleX(${scrollPercentage})`;
    }

    window.addEventListener('scroll', updateScrollProgress);
});