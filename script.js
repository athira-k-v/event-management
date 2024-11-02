
  document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("show");
  });

// Optional: Add any interactive JavaScript here if needed, like scroll animations
document.addEventListener("DOMContentLoaded", function() {
    // Scroll animation for the about section
    const aboutSection = document.querySelector('.about-section');
    window.addEventListener('scroll', () => {
      const sectionPos = aboutSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.3;
      if (sectionPos < screenPos) {
        aboutSection.classList.add('active');
      }
    });
  });
  



//   testimonial 

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Function to show the current slide
function showSlide(slideIndex) {
    if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = slideIndex;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

// Function to auto slide
function autoSlide() {
    showSlide(currentSlide + 1);
}

// Automatically change slides every 5 seconds
setInterval(autoSlide, 5000);

// Initial slide setup
showSlide(currentSlide);










let currentIndex = 0;
let autoSlideInterval;

function showSliderItem(index) {
    const sliderTrack = document.querySelector('.slider-track');
    const items = document.querySelectorAll('.slider-item');
    if (index >= items.length) index = 0;
    if (index < 0) index = items.length - 1;
    currentIndex = index;
    const offset = -index * (items[0].offsetWidth + 30); // Adjust for margin
    sliderTrack.style.transform = `translateX(${offset}px)`;
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        showSliderItem(currentIndex + 1);
    }, 3000); // Slide every 3 seconds
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

document.querySelector('.slider-button-prev').addEventListener('click', () => {
    showSliderItem(currentIndex - 1);
    stopAutoSlide();
    startAutoSlide(); // Restart auto-slide after manual navigation
});

document.querySelector('.slider-button-next').addEventListener('click', () => {
    showSliderItem(currentIndex + 1);
    stopAutoSlide();
    startAutoSlide(); // Restart auto-slide after manual navigation
});

function openImage(item) {
    const imageUrl = item.querySelector('img').src;
    window.open(imageUrl, '_blank');
}

// Start auto-slide on page load
window.addEventListener('load', () => {
    startAutoSlide();
});

window.addEventListener('resize', () => showSliderItem(currentIndex));




document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll(".stat-number");

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 120;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 15); // Faster animation
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
