window.onerror = (error) => {
	alert(error);
};

// prettier-ignore
let dead_guy = [
'=====',
 '|  |',
 'O  |',
'/|\ |',
'/ \ |',
'====='
]

// values I want to keep track of:
// lives, letters guessed, correct guesses, word, list of words

let words = ['apples', 'oranges', 'pears', 'hello world'];
let lives = 5;
let current_word = '';
let guesses = [];
let game_over = false;

// reusable function that return a random item from any list passed in
function get_random_item(list) {
	let index = Math.floor(Math.random() * list.length);
	return list[index];
}

function start_game() {
	current_word = get_random_item(words);
	lives = 5;
	guesses = [];
	game_over = false;
	update_word_element();
}

function update_dead_guy() {}

function update_word_element() {
	let text = '';
	for (let c of current_word) {
		let is_correct = c == ' ' || guesses.includes(c);
		if (is_correct) {
			text = text + c;
		} else {
			text = text + '-';
		}
	}

	let el_word = document.getElementById('word');
	el_word.innerText = text;
}

function make_guess() {
	if (game_over) return;

	let el_guess = document.getElementById('guess');
	let guess = el_guess.value;

	el_guess.value = '';
	el_guess.focus();

	if (guesses.includes(guess)) {
		alert('You used this already!');
		return;
	}

	// update guesses element
	guesses.push(guess);
	let el_guesses = document.getElementById('guesses');
	el_guesses.innerText = guesses.join(', ');

	let el_lives = document.getElementById('lives');
	let el_game_over = document.getElementById('game_over');

	// check to see if the guess is a letter in the word
	let is_correct = current_word.includes(guess);
	if (is_correct) {
		check_if_won();
	} else {
		lives = lives - 1;
		el_lives.innerText = lives.toString();
		if (lives == 0) {
			game_over = true;
			el_game_over.innerText = 'Game Over!';
			return;
		}
	}

	update_word_element();
}

function check_if_won() {
	let el_game_over = document.getElementById('game_over');
	// check to see if they have won
	let all_correct = true;
	for (let c of current_word) {
		if (c == ' ') continue;
		if (!guesses.includes(c)) {
			all_correct = false;
		}
	}
	if (all_correct) {
		game_over = true;
		el_game_over.innerText = 'You Win!';
	}
}
