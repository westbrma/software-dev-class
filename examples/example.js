function createElementFromString(htmlString) {
	const template = document.createElement('template');
	template.innerHTML = htmlString.trim(); // Trim prevents empty text nodes
	return template.content.firstElementChild; // Returns a true DOM element
}

async function load_file(file, title, lang = 'html') {
	let navbar = document.getElementById('navbar');

	let root = document.getElementById('highlights');
	let div = document.createElement('div');
	let anchor = createElementFromString(`<a href="#${title}">${title}</a>`);
	navbar.appendChild(anchor);
	root.appendChild(div);

	let code = await fetch(file).then((r) => r.text());
	if (lang === 'html') {
		code = code.replaceAll('<', '&lt;');
		code = code.replaceAll('>', '&gt;');
	}

	div.innerHTML = `<h3 id="${title}">${title}</h3>` + `<pre><code class="language-${lang}">${code}</code></pre>`;

	hljs.highlightAll();
}

load_file('basics.html', 'Create HTML file', 'html');
load_file('styles.css', 'Styles (css files)', 'css');
load_file('elements.html', 'Basic Elements', 'html');
load_file('variables.js', 'Variables', 'javascript');
load_file('variables.js', 'Conditions', 'javascript');
load_file('variables.js', 'Functions', 'javascript');
load_file('lists.js', 'Lists (array)', 'javascript');
load_file('strings.js', 'strings (text)', 'javascript');
load_file('objects.js', 'Objects', 'javascript');
load_file('elements.js', 'Elements in JS', 'javascript');
load_file('elements.js', 'Math', 'javascript');
