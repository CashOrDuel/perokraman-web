/* Konten file JavaScript tetap sama seperti sebelumnya */

let currentIndex = 0;

function scrollImages(direction) {
    const imagesContainer = document.querySelector('.image-container .images');
    const totalImages = document.querySelectorAll('.image-container .images img').length;

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 510;
    imagesContainer.style.transform = `translateX(${offset}px)`;
}

function scrollImagesLeft(direction) {
    const imagesContainer = document.querySelectorAll('.section .image-container .images')[1];
    const totalImages = imagesContainer.querySelectorAll('img').length;

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalImages - 1;
    } else if (currentIndex >= totalImages) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 510;
    imagesContainer.style.transform = `translateX(${offset}px)`;
}
