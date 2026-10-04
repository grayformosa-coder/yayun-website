// 早期語言預設（在 <head> 早期執行，避免頁面閃爍）
// 從 localStorage 讀取上次語言，立即套用到 <html data-lang>
// 這段必須在 lang.js 之前、且在任何 DOM 渲染之前執行
(function() {
  try {
    var saved = localStorage.getItem('yy-lang');
    if (saved && (saved === 'zh' || saved === 'en')) {
      document.documentElement.setAttribute('data-lang', saved);
      document.documentElement.setAttribute('lang', saved === 'zh' ? 'zh-Hant' : 'en');
    }
  } catch(_) {}
})();