/* ==========================================================================
   jobnet.vip - Core Single Architecture Engine
   Version: 3.8 (Mobile-Ready Single Row Nav, No-Wrap & Full Layout)
   ========================================================================== */

(function () {
  'use strict';

  // 1. הסרת סיומת .html משורת הכתובת בזמן אמת (Clean URLs)
  if (window.location.pathname.endsWith('.html')) {
    const cleanPath = window.location.pathname.replace(/\.html$/, '');
    window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
  }

  function getActiveSlug() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('options-rsu')) return 'options';
    if (path.includes('severance-pay')) return 'severance';
    if (path.includes('tech-salary')) return 'tech';
    if (path.includes('minimum-wage')) return 'min';
    if (path.includes('cv-ats')) return 'cv';
    if (path.includes('guides')) return 'guides';
    if (path.endsWith('/') || path.endsWith('index') || path === '') return 'calc';
    return '';
  }

  // 2. כותרת עליונה ותפריט ניווט מותאם מובייל ודסקטופ
  function buildHeader() {
    const slug = getActiveSlug();
    let header = document.querySelector('header');
    
    if (!header) {
      header = document.createElement('header');
      document.body.insertBefore(header, document.body.firstChild);
    }

    header.innerHTML = `
      <style>
        .sub-nav {
          display: flex !important;
          flex-wrap: nowrap !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 6px !important;
          overflow-x: auto !important;
          -webkit-overflow-scrolling: touch !important;
          padding: 8px 12px 14px 12px !important;
          margin: 0 auto !important;
          max-width: 100% !important;
          scrollbar-width: none !important;
        }
        .sub-nav::-webkit-scrollbar {
          display: none !important;
        }
        .sub-nav a {
          white-space: nowrap !important;
          flex-shrink: 0 !important;
          padding: 6px 11px !important;
          font-size: 0.8rem !important;
          gap: 5px !important;
          border-radius: 999px !important;
        }
        .sub-nav .nav-icon {
          width: 18px !important;
          height: 18px !important;
          font-size: 0.75rem !important;
        }
        @media (max-width: 768px) {
          .sub-nav {
            justify-content: flex-start !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .sub-nav a {
            padding: 6px 10px !important;
            font-size: 0.76rem !important;
          }
        }
      </style>
      <div class="brand-badge">
        <span class="pill">חדש</span>
        <span>מערכת חישוב שכר, אופציות ודיני עבודה 2026</span>
      </div>
      <h1>jobnet.vip</h1>
      <p>פלטפורמת הפינטק המובילה בישראל לחישוב שכר נטו, אופציות RSU, פיצויי פיטורים וסריקת קורות חיים</p>
      <nav class="sub-nav">
        <a href="./index.html" class="${slug === 'calc' ? 'active' : ''}">
          <span class="nav-icon" style="background: rgba(247, 147, 26, 0.2); color: #f7931a;">📊</span>
          <span>מחשבון כללי</span>
        </a>
        <a href="./tech-salary.html" class="${slug === 'tech' ? 'active' : ''}">
          <span class="nav-icon" style="background: rgba(168, 85, 247, 0.2); color: #c084fc;">⚡</span>
          <span>שכר הייטק</span>
        </a>
        <a href="./options-rsu.html" class="${slug === 'options' ? 'active' : ''}">
          <span class="nav-icon" style="background: rgba(59, 130, 246, 0.2); color: #60a5fa;">📈</span>
          <span>אופציות ו-RSU</span>
        </a>
        <a href="./severance-pay.html" class="${slug === 'severance' ? 'active' : ''}">
          <span class="nav-icon" style="background: rgba(236, 72, 153, 0.2); color: #f472b6;">🛡️</span>
          <span>פיצויי פיטורים</span>
        </a>
        <a href="./minimum-wage.html" class="${slug === 'min' ? 'active' : ''}">
          <span class="nav-icon" style="background: rgba(255, 85, 0, 0.2); color: #ff5500;">⏱️</span>
          <span>שכר מינימום</span>
        </a>
        <a href="./cv-ats.html" class="${slug === 'cv' ? 'active' : ''}">
          <span class="nav-icon" style="background: rgba(0, 230, 153, 0.2); color: #00e699;">🤖</span>
          <span>סריקת קו"ח</span>
        </a>
      </nav>
    `;
  }

  // 3. פוטר מלא כולל שורת עוגיות אחודה
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
        <a href="./guides.html">מדריכים ושאלות נפוצות</a>
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

      <div class="cookie-bar" style="display: flex; align-items: center; justify-content: center; flex-wrap: nowrap; gap: 12px; background: rgba(255, 255, 255, 0.02); border-top: 1px solid rgba(255, 255, 255, 0.05); border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 8px 16px; margin: 18px auto 14px auto; max-width: 1040px; font-size: 0.77rem; font-weight: 300; color: #717688; white-space: nowrap; overflow-x: auto;">
        <span>אתר זה עושה שימוש בעוגיות לתפעול, מדידה ושיפור השירות.</span>
        <a href="./privacy.html" style="color: #8b92a5; text-decoration: underline;">למידע ומדיניות</a>
        <span style="opacity: 0.35;">|</span>
        <span style="direction: ltr; font-size: 0.75rem;">This website uses cookies for operational, analytics, and marketing purposes.</span>
      </div>

      <p>© 2026 jobnet.vip. כל הזכויות שמורות. החישוב מהווה סימולציה משוערת בלבד ואינו מהווה ייעוץ פנסיוני או פיננסי. <span style="opacity: 0.4; font-size: 0.75rem; margin-right: 6px;">v3.8</span></p>
    `;
  }

  // 4. ווידג'ט נגישות
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
      if (currentFontSize >
