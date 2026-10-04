// Bilingual language switch
(function() {
  const switcher = document.querySelector('[data-lang-switch]');
  if (!switcher) return;
  const html = document.documentElement;

  function applyLang(lang) {
    html.setAttribute('data-lang', lang);
    html.setAttribute('lang', lang === 'zh' ? 'zh-Hant' : 'en');
    document.querySelectorAll('[data-zh][data-en]').forEach(el => {
      el.textContent = el.getAttribute(`data-${lang}`);
    });
    document.querySelectorAll('[data-zh-placeholder][data-en-placeholder]').forEach(el => {
      el.setAttribute('placeholder', el.getAttribute(`data-${lang}-placeholder`));
    });
    document.querySelectorAll('[data-lang-switch]').forEach(btn => {
      btn.setAttribute('data-current', lang);
      btn.textContent = lang === 'zh' ? 'EN' : '中';
    });
  }

  switcher.addEventListener('click', e => {
    e.preventDefault();
    const next = (html.getAttribute('data-lang') === 'zh') ? 'en' : 'zh';
    applyLang(next);
    try { localStorage.setItem('yy-lang', next); } catch(_) {}
  });

  // Restore preference：只要 localStorage 有值，總是套用
  // （lang-preload.js 已設定 data-lang，但 textContent 仍是 HTML 預設中文版，需 applyLang 切換）
  try {
    const saved = localStorage.getItem('yy-lang');
    if (saved === 'zh' || saved === 'en') applyLang(saved);
  } catch(_) {}
})();