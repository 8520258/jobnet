/* ==========================================================================
   jobnet.vip - Core Single Architecture Engine
   Version: 3.3 (Guaranteed Header & Complete Footer Injection)
   ========================================================================== */

(function () {
  'use strict';

  // 1. ניקוי סיומת .html משורת הכתובת (Clean URLs)
  if (window.location.pathname.endsWith('.html')) {
    const cleanPath = window.location.pathname.replace(/\.html$/, '');
    window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
  }

  function getActiveSlug() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('tech-salary')) return 'tech';
    if (path.includes('minimum-wage')) return 'min';
    if (path.includes('cv-ats')) return 'cv';
    if (path.endsWith('/') || path.endsWith('index') || path === '') return 'calc';
    return '';
  }

  // 2. הזרקת כותרת ותפריט עליון
  function buildHeader() {
    const slug = getActiveSlug();
    let header = document.querySelector('header');
    
    if (!header) {
      header = document.createElement('header');
      document.body.insertBefore(header, document.body.firstChild);
    }

    header.innerHTML = `
      <div class="brand-badge">
        <span class="pill">חדש</span>
        <span>מערכת חישוב שכר ודיני עבודה 2026</span>
      </div>
      <h1>jobnet.vip</h1>
      <p>פלטפורמת הפינטק המובילה בישראל לחישוב שכר נטו, עלויות מעביד וסריקת קורות חיים</p>
      <nav class="sub-nav">
        <a href="./index.html" class="${slug === 'calc' ? 'active' : ''}">
          <span class="nav-icon" style="background: rgba(247, 147, 26, 0.2); color: #f7931a;">📊</span>
          <span>מחשבון כללי</span>
        </a>
        <a href="./tech-salary.html" class="${slug === 'tech' ? 'active' : ''}">
          <span class="nav-icon" style="background: rgba(168, 85, 247, 0.2); color: #c084fc;">⚡</span>
          <span>שכר הייטק</span>
        </a>
        <a href="./minimum-wage.html" class="${slug === 'min' ? 'active' : ''}">
          <span class="nav-icon" style="background: rgba(255, 85, 0, 0.2); color: #ff5500;">⏱️</span>
          <span>שכר מינימום ושעות</span>
        </a>
        <a href="./cv-ats.html" class="${slug === 'cv' ? 'active' : ''}">
          <span class="nav-icon" style="background: rgba(0, 230, 153, 0.2); color: #00e699;">🤖</span>
          <span>סריקת קו"ח ב-AI</span>
        </a>
      </nav>
    `;
  }

  // 3. הזרקת פוטר מלא (קישורים + עוגיות + זכויות יוצרים)
  function buildFooter() {
    let footer = document.querySelector('footer');
    if (!footer) {
      footer = document.createElement('footer');
      document.body.appendChild(footer);
    }

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

      <div id="cookieBar" class="cookie-bar" style="display: none;">
        <div class="cookie-col he">
          אתר זה עושה שימוש בקובצי עוגיות לצורך תפעול, מדידה סטטיסטית ושיפור השירות. 
          <a href="./privacy.html">למידע נוסף</a>
        </div>
        <button id="btnAcceptCookies" class="cookie-btn">אישור / OK</button>
        <div class="cookie-col en">
          This site uses cookies for functionality, analytics, and experience enhancement.
          <a href="./privacy.html">Privacy Policy</a>
        </div>
      </div>

      <p>© 2026 jobnet.vip. כל הזכויות שמורות. החישוב מהווה סימולציה משוערת בלבד ואינו מהווה ייעוץ פנסיוני או פיננסי. <span style="opacity: 0.4; font-size: 0.75rem; margin-right: 6px;">v3.3</span></p>
    `;

    if (!localStorage.getItem('cookies_accepted')) {
      const cookieBar = document.getElementById('cookieBar');
      if (cookieBar) {
        cookieBar.style.display = 'flex';
        document.getElementById('btnAcceptCookies').addEventListener('click', function () {
          localStorage.setItem('cookies_accepted', 'true');
          cookieBar.style.display = 'none';
        });
      }
    }
  }

  // 4. כפתור ותפריט נגישות
  function buildAccessibilityWidget() {
    if (document.querySelector('.acc-widget')) return;

    const acc = document.createElement('div');
    acc.className = 'acc-widget';
    acc.innerHTML = `
      <button class="acc-btn" id="accToggle" aria-label="תפריט נגישות" title="תפריט נגישות">
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
    document.body.appendChild(acc);

    const toggle = document.getElementById('accToggle');
    const menu = document.getElementById('accMenu');
    const close = document.getElementById('accClose');

    toggle.addEventListener('click', () => menu.classList.toggle('active'));
    close.addEventListener('click', () => menu.classList.remove('active'));

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

  function initLayout() {
    buildHeader();
    buildFooter();
    buildAccessibilityWidget();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
  } else {
    initLayout();
  }

  // 5. גוגל אנליטיקס בטעינה מבודדת
  try {
    const gaId = 'G-EKGZK9D1J6';
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', gaId);
  } catch (e) {
    // Analytics safe fail
  }
})();
