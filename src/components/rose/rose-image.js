import Rose from './rose.jpg';
import './rose-image.css';

class addRose{
    render(){
        const roseElement = document.createElement('img');
        roseElement.src = Rose;
        roseElement.alt = 'Rose Image';
        roseElement.classList.add('rose-image');

        const body = document.querySelector('body');
        body.appendChild(roseElement);
    }
}

export default addRose;