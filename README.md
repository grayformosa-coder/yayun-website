# YAYUN Technology — 官方網站

> **Trust. Craft. Service.**
> 純 HTML + CSS + JS，無框架、無建置工具、可部署到任何靜態主機。

---

## 📁 檔案結構

```
yayun-website/
├── index.html         首頁（Hero + 4 階段 + 6 能力）
├── about.html         關於我們
├── services.html      服務項目（4 階段詳細）
├── solutions.html     解決方案（6 場景）
├── partners.html      合作夥伴
├── contact.html       聯絡我們（Web3Forms 表單）
├── llms.txt           AI 索引
├── robots.txt         搜尋引擎
├── sitemap.xml        網站地圖
└── assets/
    ├── styles.css     共用樣式表
    ├── logo.png       LOGO
    ├── form.js        Web3Forms 表單送出 + Toast
    ├── mobile-nav.js  手機選單
    └── lang.js        中英切換
```

---

## 🚀 部署方式（推薦）

### 方案 A：Cloudflare Pages（最推薦 ⭐⭐⭐）

1. **建立 GitHub repo**
   ```bash
   git init
   git add .
   git commit -m "YAYUN website v1.0"
   # 在 github.com/new 建新 repo（Public 或 Private都行）
   git remote add origin https://github.com/你的帳號/yayun-website.git
   git push -u origin main
   ```

2. **Cloudflare Pages 部署**
   - 登入 https://dash.cloudflare.com
   - Workers & Pages → Pages → Create application → Connect to Git
   - 選 `yayun-website` repo
   - Build 設定：
     - Framework preset: **None**
     - Build command: **（留空）**
     - Build output directory: **/ （或 `.`）**
   - Save and Deploy → 1 分鐘後拿到 `xxx.pages.dev` 預設網址

3. **綁定 ya-yun.com.tw 自訂網域**
   - 專案 → Custom domains → Set up a custom domain
   - 輸入 `ya-yun.com.tw` 和 `www.ya-yun.com.tw`
   - Cloudflare 會給 DNS CNAME
   - 到網域註冊商改 DNS（指向 Cloudflare）
   - SSL 自動申請（~5 分鐘）

### 方案 B：自家 Windows IIS（員外已有微軟環境）

1. 複製 `yayun-website/` 到 `C:\inetpub\wwwroot\yayun\`
2. IIS Manager → Add Website → 指向該資料夾
3. 綁定 `ya-yun.com.tw`（Host name）
4. 用 win-acme 申請 Let's Encrypt SSL
5. DNS A 記錄指向主機 IP

### 方案 C：Netlify / Vercel（類似 Cloudflare Pages）

---

## 📧 Web3Forms 設定（Email 接收）

部署完成後：

1. 打開 `https://web3forms.com` 註冊
2. 建立 Access Key（綁定收件 email）
3. 把 Key 填入 `contact.html` 的 `access_key` 欄位
4. 填寫測試訊息並送出
5. 之後所有表單訊息自動寄到設定的 email

> 免費方案：250 次/月，無月費、無信用卡

---

## 🌍 雙語切換

- 預設：正體中文
- 切換鈕：右上角「中 / EN」
- 切換後跨頁保留（localStorage）
- 機制：所有可見文案用 `data-zh` / `data-en` 屬性

---

## 🔍 SEO / AEO

- ✅ JSON-LD（Organization / ContactPage）
- ✅ Open Graph meta
- ✅ llms.txt（給 AI 看的網站地圖）
- ✅ sitemap.xml
- ✅ robots.txt（含 GPTBot / ClaudeBot / PerplexityBot / Google-Extended 允許）

---

## 🎨 設計 Token

| Token | Value |
|---|---|
| 主色（暗紅）| `#5A0502` |
| 強調（金）| `#C9A961` |
| 紙白 | `#FAF6EB` |
| 英文標題 | Playfair Display |
| 英文內文 | Lora |
| 英文副標 | Inter |
| 中文內文 | Noto Sans TC（思源黑體）|
| 中文標題 | Noto Sans TC Bold |

---

## 📜 授權

© 2026 雅韻科技服務有限公司 Ya-Yun Technology Services Co., Ltd. All Rights Reserved.