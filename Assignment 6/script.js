const textarea = document.getElementById('textarea');
const charCount = document.getElementById('charCount');
const charLeft = document.getElementById('charLeft');
const maxLength = 50;

textarea.addEventListener('input', () => {
  const textLength = textarea.value.length;
  charCount.textContent = textLength;
  charLeft.textContent = maxLength - textLength;
});
