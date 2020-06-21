/* eslint-env browser */

const isDev = ['localhost', '127.0.0.1'].includes(location.hostname);

// Helper
const dom = {
	select: document.querySelector.bind(document),
	slectAll: document.querySelectorAll.bind(document)
};

const injectScript = (source, callback) => {
	const script = document.createElement('script');
	script.src = source;
	script.addEventListener('load', callback);
	document.head.appendChild(script);
};

const insertHypenationHintsForCamelCase = string => string.replace(/([a-z])([A-Z])/g, '$1\u00AD$2');

{
	function hideScrollHint() {
		if (window.scrollY > 100) {
			document.removeEventListener('scroll', hideScrollHint);
			dom.select('#scroll-hint').classList.add('hidden');
		}
	}

	document.addEventListener('scroll', hideScrollHint, {passive: true});
}
