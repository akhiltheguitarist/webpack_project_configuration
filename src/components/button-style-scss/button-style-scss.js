import './button-style-scss.scss';

class HelloWorldButtonSCSS {
    render(){
        //Creating a button element and adding text to it
        const button = document.createElement('button');
        button.innerHTML = "Hello World";
        
        //Adding a class to the component
        button.classList.add('button-style-scss-button');

        //Obtain the body object
        const body = document.querySelector('body');

        //Action on button click
        button.onclick = function(){
            const p = document.createElement('p');
            p.innerHTML = "Hello There";
            //Adding a class to the component
            p.classList.add('button-style-scss-p');
            body.appendChild(p);
        }

        //Add the element to the body
        body.appendChild(button);
    }
}
export default HelloWorldButtonSCSS;