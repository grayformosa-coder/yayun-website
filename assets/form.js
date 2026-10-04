// Web3Forms 表單送出（用 fetch 不跳頁 + Toast 提示）
(function() {
  const form = document.querySelector('form.form');
  if (!form) return;

  // Toast 元素（lazy 建立）
  function showToast(message, type) {
    let toast = document.getElementById('yy-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'yy-toast';
      toast.style.cssText = 'position:fixed;top:24px;right:24px;z-index:9999;padding:16px 24px;border-radius:6px;font-size:14px;font-weight:600;box-shadow:0 4px 16px rgba(0,0,0,0.15);transition:opacity .3s,transform .3s;opacity:0;transform:translateY(-10px);';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.background = type === 'success' ? '#5A0502' : '#B33A3A';
    toast.style.color = '#FAF6EB';
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
    }, 4000);
  }

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = '...';

    try {
      const formData = new FormData(form);
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        showToast('訊息已送出！我們會盡快回覆。', 'success');
        form.reset();
      } else {
        showToast('送出失敗，請稍後再試。', 'error');
      }
    } catch (err) {
      showToast('網路錯誤，請稍後再試。', 'error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
})();