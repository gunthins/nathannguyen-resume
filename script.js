document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in-section');
    const navLinks = document.querySelectorAll('.navigator a');
    const options = {
        threshold: .8,
    };
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetIndex = Array.from(sections).indexOf(entry.target);
                navLinks.forEach((link) => link.classList.remove('active'));
                navLinks[targetIndex].classList.add('active');
                entry.target.classList.add('is-visible');
                entry.target.classList.add('sticky');
                sections.forEach(section => {
                    if (section !== entry.target) {
                        section.classList.remove('is-visible');
                        section.classList.remove('sticky');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

let slideIndex = 1;
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}

document.addEventListener("scroll", function() {
    const indicator = document.querySelector(".scroll-down-indicator");
    const rect = indicator.getBoundingClientRect();
    if (rect.top < window.innerHeight / 20) {
        indicator.style.display = "none";
    } else {
        indicator.style.display = "block";
    }
});