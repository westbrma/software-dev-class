// prompt will ask the user for an value
let name = prompt('What is your name?');

// prompt can take a default value
let year = prompt('What year is it?', new Date().getFullYear());

// confirm will ask the user to confirm or cancel a question
let do_action = confirm('Are you sure you want to delete this?');
if (!do_action) {
	return;
}

// alert() will show the user a message
alert('Hello there!');
