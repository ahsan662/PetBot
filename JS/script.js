// Carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function changeImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically change the image every 3 seconds
setInterval(changeImage, 3000);

// Smooth scroll for anchor links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
