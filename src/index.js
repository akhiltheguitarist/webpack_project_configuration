import helloWorld from './hello-world.js';
import addImage from './add-image.js';
import helloWorldButton from './components/hello-world-button/hello-world-button.js';
import buttonStyleSCSS from './components/button-style-scss/button-style-scss.js';

const helloWorldButtonObj = new helloWorldButton();
helloWorldButtonObj.render();

const buttonStyleSCSSObj = new buttonStyleSCSS();
buttonStyleSCSSObj.render();

if(process.env.NODE_ENV === 'production'){
    console.log('production build');
}

/*
//For the helloWorld render
helloWorld();
*/

/*
//For the image render
addImage();
*/