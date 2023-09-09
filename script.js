const button = document.querySelector('.generate');
const colour1 = document.querySelector('.colour1');
const colour2 = document.querySelector('.colour2');


button.addEventListener('click', setGradientBackground);
colour1.addEventListener('click', copy);
colour2.addEventListener('click', copy);



function setGradientBackground () {
	let randomColor1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
	let randomColor2 = '#' + Math.floor(Math.random() * 16777215).toString(16);

	const gradientStyle = `linear-gradient(to right, ${randomColor1}, ${randomColor2})`;

	document.body.style.backgroundImage = gradientStyle;



	colour1.innerText = randomColor1;
	colour2.innerText = randomColor2;

}
	
 function copy() {
 	let text = `${colour1.innerText}, ${colour2.innerText}`;
	
	let input = document.createElement('input');
	input.setAttribute('value', text);
	document.body.appendChild(input);
	input.select();
	
	document.execCommand('copy');
	document.body.removeChild(input);
	
	alert('Copied: ' + text);
   }


















