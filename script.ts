      /////////////////////   Hero Slider   ///////////////////
// const slides = document.querySelectorAll<HTMLElement>(".hero-slide");
// const dots = document.querySelectorAll<HTMLButtonElement>(".slider-dot");
// let currentSlide = 0;

// function showSlide(index: number): void {
//     slides[currentSlide].classList.remove("active");
//     dots[currentSlide]?.classList.remove("active");

//     currentSlide = index;
//     slides[currentSlide].classList.add("active");
//     dots[currentSlide]?.classList.add("active");
// }

// if (slides.length > 1) {
//     setInterval(() => showSlide((currentSlide + 1) % slides.length), 2500);
//     dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));
// }
  
const slides = document.querySelectorAll<HTMLImageElement>(".hero-slide");
const dots = document.querySelectorAll<HTMLButtonElement>(".slider-dot");
let currentSlide = 0;

function showSlide(index: number): void {
    slides[currentSlide].classList.remove("active");
    dots[currentSlide]?.classList.remove("active");

    currentSlide = index;
    slides[currentSlide].classList.add("active");
    dots[currentSlide]?.classList.add("active");
}

Promise.all(
    [...slides].map(slide =>
        slide.complete ? Promise.resolve() :
        new Promise(resolve => {
            slide.addEventListener("load", resolve, { once: true });
            slide.addEventListener("error", resolve, { once: true });
        })
    )
).then(() => {
    if (slides.length > 1) {
        setInterval(() => showSlide((currentSlide + 1) % slides.length), 1500);
    }
});

dots.forEach((dot, index) =>
    dot.addEventListener("click", () => showSlide(index))
);
   
   //////////////////    RESPONSIVE MOBILE NAVIGATION DRAWER       //////////////////
   
const navToggle = document.getElementById("navToggle") as HTMLButtonElement;
const navDrawer = document.getElementById("mainNavigation");
const navOverlay = document.getElementById("navOverlay");
const drawerClose = document.getElementById("drawerClose");
const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");

function toggleDrawer(open: boolean): void {
    navDrawer?.classList.toggle("is-open", open);
    navOverlay?.classList.toggle("is-active", open);
    navToggle?.classList.toggle("is-active", open);
    navToggle?.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
}

navToggle?.addEventListener("click", () =>
    toggleDrawer(!navDrawer?.classList.contains("is-open"))
);

drawerClose?.addEventListener("click", () => toggleDrawer(false));
navOverlay?.addEventListener("click", () => toggleDrawer(false));

navLinks.forEach(link =>
    link.addEventListener("click", () => toggleDrawer(false))
);

document.addEventListener("keydown", e => {
    if (e.key === "Escape") toggleDrawer(false);
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 991) toggleDrawer(false);
});
