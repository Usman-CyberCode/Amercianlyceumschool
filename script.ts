
/* ==============================
   HERO AUTOMATIC SLIDER
============================== */

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll<HTMLElement>(
        ".hero-slide"
    );

    const dots = document.querySelectorAll<HTMLButtonElement>(
        ".slider-dot"
    );

    if (slides.length === 0) {
        return;
    }

    let currentSlide = 0;

    const slideInterval = 3000;

    function showSlide(index: number): void {

        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        currentSlide = index;
    }

    function nextSlide(): void {

        const nextIndex =
            (currentSlide + 1) % slides.length;

        showSlide(nextIndex);
    }

    // Automatically change slides every 5 seconds

    setInterval(nextSlide, slideInterval);

    // Dots navigation

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {
            showSlide(index);
        });

    });

});
