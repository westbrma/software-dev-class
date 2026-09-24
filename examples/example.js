async function load_file(file, title, lang = 'html') {
	let code = await fetch(file).then((r) => r.text());
	if (lang === 'html') {
		code = code.replaceAll('<', '&lt;');
		code = code.replaceAll('>', '&gt;');
	}
	let div = document.createElement('div');
	div.innerHTML = `<h3>${title}</h3>` + `<pre><code class="language-${lang}">${code}</code></pre>`;
	document.body.appendChild(div);
	hljs.highlightAll();
}

load_file('/examples/button.html', 'For Loop!', 'html');
load_file('/examples/for_loop.js', 'For Loop!', 'javascript');
