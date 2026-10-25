/* ==========================================================================
   JobNet VIP - קוד משותף לכל עמודי האתר
   מזריק אוטומטית: הדר עליון, פוטר אחיד, סרגל נגישות צף ואנליטיקס
   ========================================================================== */

(function () {
  // 1. Google Analytics 4 טעינה דינמית
  const gaId = 'G-EKGZK9D1J6';
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', gaId);

  document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

    // 2. הזרקת הדר עליון (אם לא קיים)
    if (!document.querySelector('header')) {
      const header = document.createElement('header');
      header.innerHTML = `
        <h1>JobNet VIP</h1>
        <p>מחשבון שכר ברוטו-נטו וסימולטור עלויות מעביד מעודכן לשנת 2026</p>
        <div class="sub-nav">
          <a href="/" class="${currentPath === '/' || currentPath === '/index.html' ? 'active' : ''}">מחשבון כללי</a>
          <a href="/tech-salary.html" class="${currentPath.includes('tech-salary') ? 'active' : ''}">מחשבון שכר הייטק</a>
          <a href="/minimum-wage.html" class="${currentPath.includes('minimum-wage') ? 'active' : ''}">שכר מינימום ושעות נוספות</a>
        </div>
      `;
      document.body.insertBefore(header, document.body.firstChild);
    }

    // 3. הזרקת פוטר אחיד (אם לא קיים)
    if (!document.querySelector('footer')) {
      const footer = document.createElement('footer');
      footer.innerHTML = `
        <div class="legal-links">
          <a href="/about.html" class="${currentPath.includes('about') ? 'active' : ''}">אודות המיזם</a>
          <span>•</span>
          <a href="/resources.html" class="${currentPath.includes('resources') ? 'active' : ''}">זכויות עובדים ומקורות מידע</a>
          <span>•</span>
          <a href="/terms.html" class="${currentPath.includes('terms') ? 'active' : ''}">תנאי שימוש</a>
          <span>•</span>
          <a href="/privacy.html" class="${currentPath.includes('privacy') ? 'active' : ''}">מדיניות פרטיות</a>
          <span>•</span>
          <a href="/accessibility.html" class="${currentPath.includes('accessibility') ? 'active' : ''}">הצהרת נגישות</a>
          <span>•</span>
          <a href="/contact.html" class="${currentPath.includes('contact') ? 'active' : ''}">יצירת קשר</a>
        </div>
        <p>© 2026 JobNet VIP. כל הזכויות שמורות. החישוב מהווה סימולציה משוערת בלבד ואינו מהווה ייעוץ פנסיוני, פיננסי או מס מוסמך.</p>
      `;
      document.body.appendChild(footer);
    }

    // 4. הזרקת רכיב נגישות צף מובנה
    if (!document.querySelector('.acc-widget')) {
      const accWidget = document.createElement('div');
      accWidget.className = 'acc-widget';
      accWidget.innerHTML = `
        <button class="acc-btn" id="accToggle" aria-label="פתח תפריט נגישות" title="תפריט נגישות">
          <svg viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/></svg>
        </button>
        <div class="acc-menu" id="accMenu" role="dialog" aria-modal="true" aria-label="הגדרות נגישות">
          <div class="acc-menu-header">
            <span>התאמות נגישות</span>
            <button class="acc-close" id="accClose" aria-label="סגור תפריט">&times;</button>
          </div>
          <div class="acc-options">
            <button class="acc-opt-btn" id="btnFontPlus">הגדל טקסט (+)</button>
            <button class="acc-opt-btn" id="btnFontMinus">הקטן טקסט (-)</button>
            <button class="acc-opt-btn" id="btnGrayscale">גווני אפור</button>
            <button class="acc-opt-btn" id="btnInvert">ניגודיות הפוכה</button>
            <button class="acc-opt-btn" id="btnLinks">הדגש קישורים</button>
            <button class="acc-opt-btn" id="btnReadable">גופן קריא</button>
            <button class="acc-reset-btn" id="btnReset">איפוס התאמות</button>
          </div>
          <div style="margin-top: 10px; text-align: center; font-size: 0.75rem;">
            <a href="/accessibility.html" style="color: var(--muted); text-decoration: underline;">לקריאת הצהרת הנגישות המלאה</a>
          </div>
        </div>
      `;
      document.body.appendChild(accWidget);

      // לוגיקת סרגל הנגישות
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
  });
})();
