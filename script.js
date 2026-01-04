const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const noNewlineCount = document.getElementById('no-newline-count');
const noSpaceCount = document.getElementById('no-space-count');

textInput.addEventListener('input', () => {
	const val = textInput.value;

	charCount.textContent = val.length;

	const noNewline = val.replace(/\n/g, '');
	noNewlineCount.textContent = noNewline.length;

	const noSpace = val.replace(/\s/g, '');
	noSpaceCount.textContent = noSpace.length;
});
