/* ==========================================================================
   JobNet VIP - Core Framework & Global Scripts
   Version: 2.4
   ========================================================================== */

(function () {
  // 1. Google Analytics 4
  const gaId = 'G-EKGZK9D1J6';
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', gaId);

  function initLayout() {
    const currentPath = window.location.pathname;

    // 2. הזרקת הדר עליון עשיר עם אייקונים ובאדג'ים
    if (!document.querySelector('header')) {
      const header = document.createElement('header');
      header.innerHTML = `
        <div class="brand-badge">
          <span class="pill">חדש</span>
          <span>מערכת חישוב שכר ודיני עבודה 2026</span>
        </div>
        <h1>JobNet VIP</h1>
        <p>פלטפורמת הפינטק המובילה בישראל לחישוב שכר נטו, עלויות מעביד וסריקת קורות חיים</p>
        <div class="sub-nav">
          <a href="./index.html" class="${currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '' ? 'active' : ''}">
            <span class="nav-icon" style="background: rgba(0, 82, 255, 0.2); color: #3b82f6;">📊</span>
            <span>מחשבון כללי</span>
          </a>
          <a href="./tech-salary.html" class="${currentPath.includes('tech-salary') ? 'active' : ''}">
            <span class="nav-icon" style="background: rgba(168, 85, 247, 0.2); color: #c084fc;">⚡</span>
            <span>שכר הייטק</span>
          </a>
          <a href="./minimum-wage.html" class="${currentPath.includes('minimum-wage') ? 'active' : ''}">
            <span class="nav-icon" style="background: rgba(247, 147, 26, 0.2); color: #f7931a;">⏱️</span>
            <span>שכר מינימום ושעות</span>
          </a>
          <a href="./cv-ats.html" class="${currentPath.includes('cv-ats') ? 'active' : ''}">
            <span class="nav-icon" style="background: rgba(5, 177, 105, 0.2); color: #34d399;">🤖</span>
            <span>בודק קורות חיים ל-ATS</span>
          </a>
        </div>
      `;
      document.body.insertBefore(header, document.body.firstChild);
    }

    // 3. הזרקת פוטר מרכזי עם גרסה v2.4
    if (!document.querySelector('footer')) {
      const footer = document.createElement('footer');
      footer.innerHTML = `
        <div class="legal-links">
          <a href="./about.html">אודות המיזם</a>
          <span>•</span>
          <a href="./resources.html">זכויות עובדים ומקורות מידע</a>
          <span>•</span>
          <a href="./terms.html">תנאי שימוש</a>
          <span>•</span>
          <a href="./privacy.html">מדיניות פרטיות</a>
          <span>•</span>
          <a href="./accessibility.html">הצהרת נגישות</a>
          <span>•</span>
          <a href="./contact.html">יצירת קשר</a>
        </div>
        <p>© 2026 JobNet VIP. כל הזכויות שמורות. החישוב מהווה סימולציה משוערת בלבד. <span style="opacity: 0.4; font-size: 0.75rem; margin-right: 6px;">v2.4</span></p>
      `;
      document.body.appendChild(footer);
    }

    // 4. סרגל נגישות צף
    if (!document.querySelector('.acc-widget')) {
      const accWidget = document.createElement('div');
      accWidget.className = 'acc-widget';
      accWidget.innerHTML = `
        <button class="acc-btn" id="accToggle" aria-label="פתח תפריט נגישות" title="תפריט נגישות">
          <svg viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>
        </button>
        <div class="acc-menu" id="accMenu" role="dialog" aria-modal="true" aria-label="הגדרות נגישות">
          <div class="acc-menu-header">
            <span>⚙️ התאמות נגישות</span>
            <button class="acc-close" id="accClose" aria-label="סגור תפריט">&times;</button>
          </div>
          <div class="acc-options">
            <button class="acc-opt-btn" id="btnFontPlus">🔍 הגדל טקסט (+)</button>
            <button class="acc-opt-btn" id="btnFontMinus">🔍 הקטן טקסט (-)</button>
            <button class="acc-opt-btn" id="btnGrayscale">🌓 גווני אפור</button>
            <button class="acc-opt-btn" id="btnInvert">🔄 ניגודיות הפוכה</button>
            <button class="acc-opt-btn" id="btnLinks">🔗 הדגש קישורים</button>
            <button class="acc-opt-btn" id="btnReadable">🔤 גופן קריא</button>
            <button class="acc-reset-btn" id="btnReset">↺ איפוס כל ההתאמות</button>
          </div>
          <div style="margin-top: 14px; text-align: center; font-size: 0.78rem;">
            <a href="./accessibility.html" style="color: var(--muted); text-decoration: underline;">לקריאת הצהרת הנגישות המלאה</a>
          </div>
        </div>
      `;
      document.body.appendChild(accWidget);

      const accToggle = document.getElementById('accToggle');
      const accMenu = document.getElementById('accMenu');
      const accClose = document.getElementById('accClose');

      accToggle.addEventListener('click', () => accMenu.classList.toggle('active'));
      accClose.addEventListener('click', () => accMenu.classList.remove('active'));

      let currentFontSize = 16;
      document.getElementById('btnFontPlus').addEventListener('click', () => {
        if (currentFontSize < 22) {
          currentFontSize += 2;
          document.documentElement.style.fontSize = currentFontSize + 'px';
        }
      });

      document.getElementById('btnFontMinus').addEventListener('click', () => {
        if (currentFontSize > 14) {
          currentFontSize -= 2;
          document.documentElement.style.fontSize = currentFontSize + 'px';
        }
      });

      document.getElementById('btnGrayscale').addEventListener('click', e => {
        document.body.classList.toggle('acc-grayscale');
        e.target.classList.toggle('active-opt');
      });

      document.getElementById('btnInvert').addEventListener('click', e => {
        document.body.classList.toggle('acc-invert');
        e.target.classList.toggle('active-opt');
      });

      document.getElementById('btnLinks').addEventListener('click', e => {
        document.body.classList.toggle('acc-highlight-links');
        e.target.classList.toggle('active-opt');
      });

      document.getElementById('btnReadable').addEventListener('click', e => {
        document.body.classList.toggle('acc-readable-font');
        e.target.classList.toggle('active-opt');
      });

      document.getElementById('btnReset').addEventListener('click', () => {
        currentFontSize = 16;
        document.documentElement.style.fontSize = '16px';
        document.body.classList.remove('acc-grayscale', 'acc-invert', 'acc-highlight-links', 'acc-readable-font');
        document.querySelectorAll('.acc-opt-btn').forEach(b => b.classList.remove('active-opt'));
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
  } else {
    initLayout();
  }
})();
