let slideIndex = 0;

const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = slideCount - 1;
    } else if (slideIndex >= slideCount) {
        slideIndex = 0;
    }
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Optionally, add auto-sliding functionality
setInterval(() => {
    moveSlide(1);
}, 5000);