const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const color = document.querySelector('.color');
const btn = document.querySelector('.btn');

const randomValue = (min, max) => Math.floor( Math.random() * (max - min + 1) ) + min;

const changeBackgroundColor = () =>{

    const red = randomValue(0, 255);
    const green = randomValue(0, 255);
    const blue = randomValue(0, 255);

    container.style.background = `rgb(${red}, ${green}, ${blue})`;
    color.textContent = `rgb(${red}, ${green}, ${blue})`;
    btn.style.background = `rgb(${red}, ${green}, ${blue})`;
};

button.addEventListener('click', () => {

    changeBackgroundColor();

});

changeBackgroundColor();