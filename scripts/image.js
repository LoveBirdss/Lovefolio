const photos = [
    '../images/bg-img',
    '../images/bg-img',
    '../images/bg-img',
    '../images/bg-img',
];

function getRandomPhoto() {
    const randomIndex = Math.floor(Math.random() * photos.length);
    return photos[randomIndex];
}

function createPhotoElement() {
    const photoContainer = document.getElementById('photo-container');
    const photoElement = document.createElement('img');
    photoElement.src = getRandomPhoto();
    photoContainer.innerHTML = ''; // Clear previous photo
    photoContainer.appendChild(photoElement);
}
createPhotoElement();
setInterval(createPhotoElement, 5000);
