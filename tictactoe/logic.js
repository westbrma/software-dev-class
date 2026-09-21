let state = {
	turn: 'x', // x or o
	winner: null, // x or o
	grid: [],
	ready: false
};

function getRandomItem(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	return arr[randomIndex];
}

function start() {
	state.turn = 'x';
	state.winner = null;

	let bt_start = document.getElementById('bt_start');
	let buttons = document.querySelectorAll('#ttt_buttons button');
	state.grid = [[], [], []];

	for (let b of buttons) {
		b.innerText = 'Click Me';
	}

	for (let x = 0; x < 3; x++) {
		for (let y = 0; y < 3; y++) {
			state.grid[x][y] = '';
		}
	}

	state.ready = true;
	bt_start.innerText = 'Reset';
}

function check_winner() {
	let sets = [];
	// check across all rows
	sets.push(state.grid[0]);
	sets.push(state.grid[1]);
	sets.push(state.grid[2]);

	// check across all columns
	sets.push([state.grid[0][0], state.grid[0][1], state.grid[0][2]]);
	sets.push([state.grid[1][0], state.grid[1][1], state.grid[1][2]]);
	sets.push([state.grid[2][0], state.grid[2][1], state.grid[2][2]]);

	// check diagonals
	sets.push([state.grid[0][0], state.grid[1][1], state.grid[2][2]]);
	sets.push([state.grid[0][2], state.grid[1][1], state.grid[2][0]]);

	for (let set of sets) {
		let player = set[0];
		if (player !== 'x' && player != 'o') return;

		if (set.every((v) => v == player)) {
			state.winner = player;
			return;
		}
	}
}

function handleClick(e, x, y) {
	if (!state.ready || state.winner) {
		alert('not ready!');
		return;
	}
	e.target.innerText = state.turn;
	state.grid[y][x] = state.turn;
	state.turn = state.turn == 'x' ? 'o' : 'x';
	document.getElementById('turn').text = state.turn + ' Turn';
	check_winner();
	if (state.winner) {
		document.getElementById('winner').innerHTML = 'winner:' + state.winner;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	start();
});

window.onerror = (e) => {
	alert(e);
};
