$(document).ready(function(){

	let words = ['Certified Public Accountant', 'former Financial Auditor','Full-stack Developer', 'System Analyst', 'frustrated Artist'];

	let charIndex = 0;
	let wordIndex = 0;
	const speed = 100;
	const eraseSpeed = 50;
	const delayBetweenWords = 1000;

	function typeEffect(){
		if(charIndex < words[wordIndex].length){
			document.getElementById("profession").textContent += words[wordIndex].charAt(charIndex);
			charIndex++
			setTimeout(typeEffect, speed);
		} else {
			setTimeout(eraseEffect, delayBetweenWords);
		};
	};

	function eraseEffect(){
		if(charIndex > 0){
			document.getElementById("profession").textContent = words[wordIndex].substring(0,charIndex-1);
			charIndex--;
			setTimeout(eraseEffect, eraseSpeed);
		}else{
			wordIndex = (wordIndex + 1) % words.length;
			setTimeout(typeEffect, delayBetweenWords);
		}
	};

	typeEffect();

	});




