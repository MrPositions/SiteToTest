document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('article section');
    const asideImg = document.getElementById('sideImg');

    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            const imgSrc = section.getAttribute('data-img');
            asideImg.src = imgSrc;
        });
    });
});
