window.onerror = (error) => {
	alert(error);
};

const list = [
	{
		name: 'Take out trash',
		due_date: '10/10/2026',
		status: 'Ready'
	},
	{
		name: 'Clean Up Room',
		due_date: '10/10/2026',
		status: 'Done'
	},
	{
		name: 'Pickup groceries',
		due_date: '10/10/2026',
		status: 'Ready'
	}
];
let current_task = list[0];
let el_taskbox = document.getElementById('taskbox');

function render_table() {
	let el_tbody = document.getElementById('task_tbody');

	let row_html = [];
	let index = 0;
	for (let t of list) {
		let row = `<tr>
		<td>${t.name}</td>
		<td>${t.due_date}</td>
		<td>${t.status}</td>
		<td><a onClick="edit_task(${index})">Edit</a></td>
		<td><a>Move Down</a></td>
		<td><a>Move Up</a></td>`;
		row_html.push(row);
		index += 1;
	}
	el_tbody.innerHTML = row_html.join('\n');
}

function edit_task(index) {
	current_task = list[index];
	el_taskbox.hidden = false;
	document.getElementById('task_name').value = current_task.name;
	document.getElementById('task_date').value = current_task.due_date;
	document.getElementById('task_status').value = current_task.status;
}

function close_task() {
	el_taskbox.hidden = true;
	current_task.name = document.getElementById('task_name').value;
	render_table();
}

function delete_task() {
	el_taskbox.hidden = true;
	let idx = list.indexOf(current_task);
	list.splice(idx, 1);
	render_table();
}

render_table();
