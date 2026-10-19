// ===== Плавное появление секций при скролле =====
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Небольшая задержка для каскадного эффекта
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 80);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    reveals.forEach(el => observer.observe(el));

    // ===== Лёгкий параллакс фоновых пятен при движении мыши =====
    const glows = document.querySelectorAll('.bg-glow');
    let mouseX = 0, mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

        glows.forEach((glow, i) => {
            const speed = (i + 1) * 12;
            glow.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
        });
    });

    // ===== Плавный скролл к контактам по клику (опционально) =====
    // Можно раскомментировать, если добавите якорные ссылки
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const target = document.querySelector(this.getAttribute('href'));
    //         if (target) target.scrollIntoView({ behavior: 'smooth' });
    //     });
    // });
});
