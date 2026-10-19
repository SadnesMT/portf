// ===== Плавное появление секций при скролле =====
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
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

    // ===== Параллакс фоновых пятен =====
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

    // ===== Проверка загрузки аватарки =====
    const avatarImg = document.querySelector('.avatar img');
    const avatar = document.querySelector('.avatar');

    if (avatarImg) {
        // Если картинка уже не загрузилась до DOMContentLoaded
        if (avatarImg.complete && avatarImg.naturalWidth === 0) {
            avatar.classList.add('no-img');
        }

        // Если ошибка случится позже
        avatarImg.addEventListener('error', () => {
            avatar.classList.add('no-img');
            avatarImg.style.display = 'none';
        });

        // Если картинка успешно загрузилась — убираем fallback
        avatarImg.addEventListener('load', () => {
            avatar.classList.remove('no-img');
        });
    }
});
