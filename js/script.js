const navSlide = () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    // navLinks.forEach((link, index) => {
    //     link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
    // });
}

navSlide();