
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll<HTMLElement>(
        ".hero-slide"
    );
    const dots = document.querySelectorAll<HTMLButtonElement>(
        ".slider-dot"
    );

    if (slides.length > 0) {
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
    }

    /* ==============================
       RESPONSIVE MOBILE NAVIGATION DRAWER
    ============================== */

    const navToggle = document.getElementById("navToggle") as HTMLButtonElement | null;
    const navDrawer = document.getElementById("mainNavigation") as HTMLElement | null;
    const navOverlay = document.getElementById("navOverlay") as HTMLElement | null;
    const drawerClose = document.getElementById("drawerClose") as HTMLButtonElement | null;
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");

    function openDrawer(): void {
        if (navDrawer && navOverlay && navToggle) {
            navDrawer.classList.add("is-open");
            navOverlay.classList.add("is-active");
            navToggle.classList.add("is-active");
            navToggle.setAttribute("aria-expanded", "true");
            document.body.style.overflow = "hidden";
        }
    }
    
    function closeDrawer(): void {
        if (navDrawer && navOverlay && navToggle) {
            navDrawer.classList.remove("is-open");
            navOverlay.classList.remove("is-active");
            navToggle.classList.remove("is-active");
            navToggle.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "";
        }
    }

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            if (navDrawer && navDrawer.classList.contains("is-open")) {
                closeDrawer();
            } else {
                openDrawer();
            }
        });
    }

    if (drawerClose) {
        drawerClose.addEventListener("click", closeDrawer);
    }

    if (navOverlay) {
        navOverlay.addEventListener("click", closeDrawer);
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if (navDrawer && navDrawer.classList.contains("is-open")) {
                closeDrawer();
            }
        });
    });
    document.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Escape" && navDrawer && navDrawer.classList.contains("is-open")) {
            closeDrawer();
        }
    });
    document.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.key === "Escape" && navDrawer && navDrawer.classList.contains("is-open")) {
            closeDrawer();
        }
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 991 && navDrawer && navDrawer.classList.contains("is-open")) {
            closeDrawer();
        }
    });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 991 && navDrawer && navDrawer.classList.contains("is-open")) {
            closeDrawer();
        }
    });

});
