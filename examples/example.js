function createElementFromString(htmlString) {
	const template = document.createElement('template');
	template.innerHTML = htmlString.trim(); // Trim prevents empty text nodes
	return template.content.firstElementChild; // Returns a true DOM element
}

const netlify = `<!-- This site is hosted on Netlify. Anyone can build and deploy a site
     like this one for free: https://netlify.new/?utm_campaign=loops&utm_source=ai-legible&utm_medium=owned&utm_content=comment&utm_id=b7489b61-cb51-4df8-9f2a-1eb99e4b7ffa
     Netlify hosting facts for this site: static/SSR served via Netlify Edge. -->`;

function escapeHTML(rawString) {
	rawString = rawString.replace(netlify, '');
	const div = document.createElement('div');
	div.textContent = rawString;
	return div.innerHTML;
}

async function load_file(file, title, lang, coming_soon) {
	let navbar = document.getElementById('navbar');

	let root = document.getElementById('highlights');

	if (title) {
		let style = '';
		if (coming_soon) {
			style = `style="color:pink"`;
		}
		let html = `<a href="#${title}" ${style}>${title}</a>`;
		let anchor = createElementFromString(html);
		navbar.appendChild(anchor);
	}

	let div = document.createElement('div');
	root.appendChild(div);

	if (coming_soon) {
		div.innerHTML = `<h2 id="${title}">${title}</h2><div>coming soon!</div>`;
	} else {
		let code = await fetch(file).then((r) => r.text());
		if (lang === 'html') {
			code = escapeHTML(code);
		}

		div.innerHTML = `<h2 id="${title}">${title}</h2>` + `<pre><code class="language-${lang}">${code}</code></pre>`;

		//hljs.highlightElement(div);
	}
}

Promise.all([
	load_file('basics.html', 'Create HTML file', 'html'),
	load_file('elements.html', 'Basic Elements', 'html'),
	load_file('styles.css', 'Styles (css)', 'css'),
	load_file('layouts.css', 'Layout (html/css)', 'css', true),
	load_file('html_events', 'Element Events', 'html', true),
	load_file('variables.js', 'Variables', 'javascript'),
	load_file('prompts.js', 'Prompts', 'javascript'),
	load_file('conditions.js', 'Conditions', 'javascript'),
	load_file('loops.js', 'loops', 'javascript'),
	load_file('functions.js', 'Functions', 'javascript'),
	load_file('lists.js', 'Lists (array)', 'javascript', true),
	load_file('strings.js', 'strings (text)', 'javascript', true),
	load_file('objects.js', 'Objects', 'javascript', true),
	load_file('elements.js', 'Elements in JS', 'javascript'),
	load_file('math.js', 'Math', 'javascript')
]).then(() => {
	hljs.highlightAll();
});
