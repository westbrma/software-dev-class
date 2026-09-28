async function load_file(file, title, lang = 'html') {
	let root = document.getElementById('highlights');
	let div = document.createElement('div');
	root.appendChild(div);

	let code = await fetch(file).then((r) => r.text());
	if (lang === 'html') {
		code = code.replaceAll('<', '&lt;');
		code = code.replaceAll('>', '&gt;');
	}

	div.innerHTML = `<h3>${title}</h3>` + `<pre><code class="language-${lang}">${code}</code></pre>`;

	hljs.highlightAll();
}

load_file('basics.html', 'Create a html file', 'html');
load_file('elements.html', 'Basic Elements', 'html');
load_file('for_loop.js', 'For Loop!', 'javascript');
