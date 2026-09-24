async function load_file(file, title, lang = 'html') {
	let div = document.createElement('div');
	document.body.appendChild(div);

	let code = await fetch(file).then((r) => r.text());
	if (lang === 'html') {
		code = code.replaceAll('<', '&lt;');
		code = code.replaceAll('>', '&gt;');
	}

	div.innerHTML = `<h3>${title}</h3>` + `<pre><code class="language-${lang}">${code}</code></pre>`;

	hljs.highlightAll();
}

load_file('button.html', 'For Loop!', 'html');
load_file('for_loop.js', 'For Loop!', 'javascript');
