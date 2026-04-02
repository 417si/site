const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');
const noNewlineCount = document.getElementById('no-newline-count');
const noSpaceCount = document.getElementById('no-space-count');

// 文字数カウントのメイン処理
textInput.addEventListener('input', () => {
	const val = textInput.value;

	// 全文字数
	charCount.textContent = val.length;
	
	// 改行を除く
	const noNewline = val.replace(/\n/g, '');
	noNewlineCount.textContent = noNewline.length;

	// 空白・改行を除く
	const noSpace = val.replace(/\s/g, '');
	noSpaceCount.textContent = noSpace.length;
});

// モーダルの制御
const disclaimerLink = document.getElementById('disclaimer-link');
const modalOverlay = document.getElementById('modal-overlay');
const closeModal = document.getElementById('close-modal');

// 開く
disclaimerLink.addEventListener('click', (e) => {
	e.preventDefault();
	modalOverlay.style.display = 'flex';
});

// 閉じる
closeModal.addEventListener('click', () => {
	modalOverlay.style.display = 'none';
});

// 背景クリックで閉じる
modalOverlay.addEventListener('click', (e) => {
	if (e.target === modalOverlay) {
		modalOverlay.style.display = 'none';
	}
});
