/* zain blog - 中英文切换 */
function toggleLang() {
  var body = document.body;
  var btn = document.getElementById('langBtn');
  if (body.classList.contains('lang-en')) {
    body.classList.remove('lang-en'); body.classList.add('lang-zh'); btn.textContent = 'EN';
  } else {
    body.classList.remove('lang-zh'); body.classList.add('lang-en'); btn.textContent = '中';
  }
}
