document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('article section');
    const asideImg = document.getElementById('sideImg');

    // Function to set the aside image
    const setAsideImage = (imgSrc) => {
        if (imgSrc) {
            asideImg.src = imgSrc;
            asideImg.style.display = 'block';
        } else {
            asideImg.style.display = 'none';
        }
    };

    // Update the image based on scroll position
    const updateImageOnScroll = () => {
        let found = false;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                const imgSrc = section.getAttribute('data-img');
                setAsideImage(imgSrc);
                found = true;
            }
        });
        if (!found) {
            setAsideImage(null); // Clear image if no section is in view
        }
    };

    // Initial check and event listeners for scroll and resize
    updateImageOnScroll();
    window.addEventListener('scroll', updateImageOnScroll);
    window.addEventListener('resize', updateImageOnScroll);

    // Event listeners for mouseenter and touchstart
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            const imgSrc = section.getAttribute('data-img');
            setAsideImage(imgSrc);
        });
        section.addEventListener('touchstart', () => {
            const imgSrc = section.getAttribute('data-img');
            setAsideImage(imgSrc);
        });
    });
});
