window.onerror = (error) => {
	alert(error);
};

const word_options = ['Hello World', 'Fruit', 'software', 'Red Deer'];

const state = {
	lives: 5,
	guesses: [''],
	word: 'hello world',
	game_over: true
};

function get_random_item(list) {
	state.word = list[Math.floor(Math.random() * list.length)];
}

function start() {
	state.game_over = false;
	state.lives = 5;
	state.guesses = [];
	word = get_random_item(word_options);
	update_elements();
	document.getElementById('guess').focus();
}

function make_guess() {
	if (state.game_over) return;

	let el_guess = document.getElementById('guess');
	let new_guess = el_guess.value;
	el_guess.value = '';

	if (new_guess.length != 1) {
		alert('too many letters');
		return;
	}

	new_guess = new_guess.toLowerCase();
	let found_index = state.guesses.indexOf(new_guess);
	if (found_index >= 0) {
		alert('already guessed that letter');
		return;
	}

	let correct = state.word.toLowerCase().includes(new_guess);
	state.guesses.push(new_guess);
	if (!correct) {
		state.lives--;
	}
	update_elements();
	el_guess.focus();
}

function update_elements() {
	let el_guesses = document.getElementById('guesses');
	let el_word = document.getElementById('word');
	let el_lives = document.getElementById('lives');
	let el_game_over = document.getElementById('game_over');

	let all_correct = true;
	let word_text = '';
	for (let c of state.word) {
		let was_guessed = c == ' ' || state.guesses.includes(c.toLowerCase());
		word_text += was_guessed ? c : '-';
		if (!was_guessed) {
			all_correct = false;
		}
	}
	el_word.innerText = word_text;

	el_guesses.innerText = state.guesses.join(', ');
	el_lives.innerText = state.lives.toString();

	if (all_correct) {
		el_game_over.innerText = 'You Win!';
		state.game_over = true;
	} else if (state.lives <= 0) {
		el_game_over.innerText = 'You Lose!';
		state.game_over = true;
	} else {
		el_game_over.innerText = '';
	}
}

document.addEventListener('DOMContentLoaded', start);
