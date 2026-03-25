document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");
    const closeMenu = document.getElementById("closeMenu");

    function openMenu() {
        navMenu.classList.add("active");
        closeMenu.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function closeNav() {
        navMenu.classList.remove("active");
        closeMenu.classList.remove("active");
        document.body.style.overflow = "";
    }

    hamburger?.addEventListener("click", openMenu);
    closeMenu?.addEventListener("click", closeNav);

    document.querySelectorAll(".nav-items a")?.forEach(link => {
        link.addEventListener("click", closeNav);
    });
});

document.addEventListener('DOMContentLoaded', () => {

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
        touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const sections = document.querySelectorAll('.reveal-section');

    sections.forEach(section => {

        const images = section.querySelectorAll('.reveal-image');

        gsap.fromTo(images,
            { clipPath: 'inset(0% 0% 100% 0%)' },
            {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1.5,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                }
            }
        );

        const leftImage = section.querySelectorAll('.reveal-image1');

        gsap.fromTo(leftImage,
            { clipPath: 'inset(0% 100% 0% 0%)' },
            {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1.5,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                }
            }
        );
    });

    ScrollTrigger.refresh();
});