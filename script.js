const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const noNewlineCount = document.getElementById('no-newline-count');
const noSpaceCount = document.getElementById('no-space-count');

textInput.addEventListener('input', () => {
    const val = textInput.value;

    // 1. 全文字数
    charCount.textContent = val.length;

    // 2. 改行を除く文字数
    const noNewline = val.replace(/\n/g, '');
    noNewlineCount.textContent = noNewline.length;

    // 3. 空白・改行を除く文字数
    const noSpace = val.replace(/\s/g, '');
    noSpaceCount.textContent = noSpace.length;
});