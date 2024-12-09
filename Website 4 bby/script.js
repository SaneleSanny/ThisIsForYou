document.addEventListener('DOMContentLoaded', function() {
    // Select all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Create an intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the gallery item is in view
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once the item is in view
            }
        });
    }, {
        threshold: 0.5  // Trigger when 50% of the element is in view
    });

    // Observe each gallery item
    galleryItems.forEach(item => {
        observer.observe(item);
    });
});

