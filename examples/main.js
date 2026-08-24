function htmlToElement(html) {
	var template = document.createElement('template');
	template.innerHTML = html.trim();
	return template.content.firstChild;
}

function onSubmit() {
	let name = document.querySelector('#name').value;

	if(name == ''){
		alert('Please enter your name');
		return;
	}

	let count = parseInt(document.querySelector('#count').value);
	let color = document.querySelector('#color').value;

	if(count <= 0 || isNaN(count)){
		count = 1;
	}else if(count > 10){
		count = 10;
	}

	let parent = document.querySelector('#greetings');
	let existing = parent.querySelectorAll('h1');
	existing.forEach(e => {
		e.remove();
	});

	for(let i=0; i<count; i++){
		var element = document.createElement('h1');
		element.innerHTML = 'Hello ' + name;
		element.style.color = color;
		parent.appendChild(element);
	}
}

function toggleDog() {
	let dog = document.querySelector('#dogPic');
	if (dog.style.display == 'none') {
		dog.style.display = 'inline';
	} else {
		dog.style.display = 'none';
	}
}

function promptMe(){
	let color = prompt('Whats your favorite color?');
	alert(`Your favorite color is ${color}!`);
}