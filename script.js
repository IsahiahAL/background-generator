const css = document.querySelector('h3');
const [color1, color2] = document.querySelectorAll('.color');
const body = document.getElementById('gradient');
const random = document.querySelector('button');



const setGradient = () => {
	body.style.background = linearGradient();
	css.textContent = `${body.style.background};`;
}


const linearGradient = () => {
	return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
};


const randomGradient = () => {
	const randomNumber1 = Math.floor(Math.random() * 16777215).toString(16);
	const randomNumber2 = Math.floor(Math.random() * 16777215).toString(16);
		if(randomNumber1.length < 6 || randomNumber2.length < 6){
			randomGradient();
		}
		else {
			body.style.background = `linear-gradient(to right, #${randomNumber1}, #${randomNumber2})`;
			color1.value = `#${randomNumber1}`;
			color2.value = `#${randomNumber2}`;
			css.textContent = `${body.style.background};`;
		}
};



window.addEventListener('load', randomGradient);

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

random.addEventListener('click', randomGradient);

