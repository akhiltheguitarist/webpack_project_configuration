import Sunrise from './sunrise.png';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'sunrise';
    img.width = 300;
    img.src = Sunrise;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;