document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll('.gallery-item');

    const checkVisibility = () => {
        galleryItems.forEach((item, index) => {
            const rect = item.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // If the item is in the viewport, add the fade-in class with a delay
            if (rect.top < windowHeight && rect.bottom > 0) {
                setTimeout(() => {
                    item.classList.add('fade-in');
                }, index * 200); // Add delay based on item index for cascading effect
            }
        });
    };

    // Initial check
    checkVisibility();

    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
});


const slideshow = document.getElementById('slideshow');
const images = [
    'images/IMG-20240910-WA0002.jpg',
    'images/IMG-20240519-WA0009.jpg',
    'images/IMG-20240601-WA0011.jpg',
    'images/IMG-20230716-WA0016.jpg',
    'images/IMG-20231228-WA0045.jpg',
    'images/IMG-20240516-WA0018.jpg'

];

let currentIndex = 0;

function changeBackground() {
    // Update the background image
    slideshow.style.backgroundImage = `url(${images[currentIndex]})`;
    slideshow.style.backgroundSize = 'cover';
    slideshow.style.backgroundPosition = 'center';
    //slideshow.style.backgroundRepeat = 'no-repeat';

    
    // Move to the next image, looping back to the start
    currentIndex = (currentIndex + 1) % images.length;
}

// Initial setup
slideshow.style.backgroundImage = `url(${images[0]})`;

// Change image every 5 seconds
setInterval(changeBackground, 5000);

