/* ==========================================================================
   jobnet.vip - Core Architecture, Smart Cross-Navigation & Tax Engine
   Version: 4.3.0 (Evergreen Header Badge + Dynamic Copyright + Smart Bottom Hub)
   ========================================================================== */

window.JOBNET_TAX_CONFIG = {
  version: "2026.1",
  lastUpdatedText: "מרץ 2026",
  sourceText: "100% פרטיות בדפדפן • ללא הרשמה",
  creditPointMonthly: 242,
  btlLowThreshold: 7522,
  btlMaxCeiling: 50140,
  brackets: [
    { max: 7010, rate: 0.10 },
    { max: 10060, rate: 0.14 },
    { max: 19000, rate: 0.20 },
    { max: 25100, rate: 0.31 },
    { max: 46690, rate: 0.35 },
    { max: 60130, rate: 0.47 },
    { max: Infinity, rate: 0.50 }
  ]
};

(function () {
  'use strict';

  function setupMetaAndFavicon() {
    try {
      document.title = "JobNet";

      let favicon = document.querySelector('link[rel="icon"], link[rel="shortcut icon"]');
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
      }
      favicon.type = 'image/svg+xml';
      favicon.href = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%230b0e14" stroke="%23f7931a" stroke-width="4"/><path d="M28 68 L28 50 M42 68 L42 36 M58 68 L58 42 M72 68 L72 26" stroke="%23f7931a" stroke-width="7" stroke-linecap="round"/><circle cx="72" cy="26" r="5" fill="%23ffffff"/></svg>`;
    } catch (e) {}
  }

  try {
    if (window.location.pathname.includes('cv-ats')) {
      window.location.replace('./');
    } else if (window.location.pathname.endsWith('.html')) {
      const cleanPath = window.location.pathname.replace(/\.html$/, '');
      window.history.replaceState(null, '', cleanPath + window.location.search + window.location.hash);
    }
  } catch (e) {}

  function getActiveSlug() {
    try {
      const path = (window.location.pathname || '').toLowerCase();
      if (path.includes('general-calculator')) return 'calc';
      if (path.includes('options-rsu')) return 'options';
      if (path.includes('severance-pay')) return 'severance';
      if (path.includes('tech-salary')) return 'tech';
      if (path.includes('minimum-wage')) return 'min';
      if (path.includes('guides') || path.includes('tax-credits') || path.includes('study-fund') || path.includes('employer-cost') || path.includes('tax-refund')) return 'guides';
      if (path.endsWith('/') || path.endsWith('index') || path === '') return 'cv';
    } catch (e) {}
    return 'other';
  }

  function buildHeader() {
    try {
      if (document.querySelector('header .sub-nav')) return;

      const slug = getActiveSlug();
      let header = document.querySelector('header');
      
      if (!header) {
        header = document.createElement('header');
        document.body.insertBefore(header, document.body.firstChild);
      }

      header.innerHTML = `
        <style>
          .header-top-link {
            text-decoration: none;
            color: inherit;
            display: inline-block;
            margin-bottom: 4px;
          }
          .header-top-link:hover h1 {
            opacity: 0.9;
          }
          .header-brand-wrap {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 6px;
          }
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
          }
        </style>

        <div class="header-brand-wrap">
          <a href="./index.html" class="header-top-link">
            <h1 style="margin: 0; line-height: 1;">jobnet.vip</h1>
          </a>
          <div class="brand-badge" style="margin: 0;">
            <span class="pill">חינם</span>
            <span>${window.JOBNET_TAX_CONFIG.sourceText}</span>
          </div>
        </div>

        <p style="margin-top: 6px; font-size: 0.95rem; color: #9ca3af;">כל הכלים לקריירה ולתלוש השכר במקום אחד</p>
        
        <nav class="sub-nav">
          <a href="./index.html" class="${slug === 'cv' ? 'active' : ''}">
            <span class="nav-icon" style="background: rgba(247, 147, 26, 0.16); color: #f7931a;">📄</span>
            <span>סריקת קו"ח</span>
          </a>
          <a href="./general-calculator.html" class="${slug === 'calc' ? 'active' : ''}">
            <span class="nav-icon" style="background: rgba(247, 147, 26, 0.16); color: #f7931a;">📊</span>
            <span>מחשבון כללי</span>
          </a>
          <a href="./tech-salary.html" class="${slug === 'tech' ? 'active' : ''}">
            <span class="nav-icon" style="background: rgba(247, 147, 26, 0.16); color: #f7931a;">⚡</span>
            <span>שכר הייטק</span>
          </a>
          <a href="./options-rsu.html" class="${slug === 'options' ? 'active' : ''}">
            <span class="nav-icon" style="background: rgba(247, 147, 26, 0.16); color: #f7931a;">📈</span>
            <span>אופציות ו-RSU</span>
          </a>
          <a href="./severance-pay.html" class="${slug === 'severance' ? 'active' : ''}">
            <span class="nav-icon" style="background: rgba(247, 147, 26, 0.16); color: #f7931a;">🛡️</span>
            <span>פיצויי פיטורים</span>
          </a>
          <a href="./minimum-wage.html" class="${slug === 'min' ? 'active' : ''}">
            <span class="nav-icon" style="background: rgba(247, 147, 26, 0.16); color: #f7931a;">⏱️</span>
            <span>שכר מינימום</span>
          </a>
        </nav>
      `;
    } catch (err) {}
  }

  function buildSmartNextStep() {
    try {
      const slug = getActiveSlug();
      if (document.querySelector('.smart-next-step')) return;

      const recommendations = {
        cv: {
          tag: "מוכנים לשלב הבא לפני הראיון?",
          title: "יודעים כבר איזה שכר ברוטו לבקש בשיחת הסינון?",
          desc: "המירו מראש את ציפיות השכר שלכם לנטו בבנק כולל מדרגות מס הכנסה, נקודות זיכוי ופנסיה — בלי לגלול למעלה.",
          primaryText: "למחשבון שכר ברוטו-נטו",
          primaryHref: "./general-calculator.html",
          secondaryText: "מחשבון שכר הייטק",
          secondaryHref: "./tech-salary.html"
        },
        calc: {
          tag: "הצעד הבא בקריירה",
          title: "רוצה לבדוק אם קורות החיים שלך מוכנים לשדרוג שכר?",
          desc: "לפני ששולחים קורות חיים למעסיק הבא, בדוק תוך שניות איך הקובץ שלך עובר סינון אוטומטי מבוסס בינה מלאכותית.",
          primaryText: "לסריקת קורות חיים בחינם",
          primaryHref: "./index.html",
          secondaryText: "השוואה לשכר הייטק",
          secondaryHref: "./tech-salary.html"
        },
        tech: {
          tag: "המשלים הטבעי לחוזה בהייטק",
          title: "קיבלת הצעה עם אופציות או מניות (RSU)?",
          desc: "בחברות טכנולוגיה חלק משמעותי מהתגמול נמצא בהון. חשב כמה באמת יישאר לך נטו אחרי מס רווחי הון ומסלול 102.",
          primaryText: "מחשבון אופציות ו-RSU",
          primaryHref: "./options-rsu.html",
          secondaryText: "בדיקת קו\"ח למשרות טק",
          secondaryHref: "./index.html"
        },
        options: {
          tag: "מתכננים את המהלך הבא?",
          title: "עוברים חברה או בודקים תנאי עזיבה?",
          desc: "בדקו כמה פיצויי פיטורים מגיעים לכם, מה פטור ממס ואיך להכין את קורות החיים לסיבוב הבא.",
          primaryText: "מחשבון פיצויי פיטורים",
          primaryHref: "./severance-pay.html",
          secondaryText: "רענון קורות חיים לפני שליחה",
          secondaryHref: "./index.html"
        },
        severance: {
          tag: "ממשיכים קדימה",
          title: "סיימתם תפקיד ומתחילים לחפש את היעד הבא?",
          desc: "לפני ששולחים קורות חיים למעסיקים, ודאו שהקובץ שלכם עובר חלק את מערכות הסינון האוטומטיות.",
          primaryText: "סריקת קורות חיים עכשיו",
          primaryHref: "./index.html",
          secondaryText: "חישוב יעד שכר נטו חדש",
          secondaryHref: "./general-calculator.html"
        },
        min: {
          tag: "מעבר לשכר הבסיס",
          title: "רוצים לראות כמה נשאר נטו אחרי נקודות זיכוי ופנסיה?",
          desc: "הכניסו את השכר החודשי או השעתי למחשבון המלא וקבלו פירוט מדויק של התלוש ועלות המעסיק.",
          primaryText: "למחשבון שכר ברוטו-נטו",
          primaryHref: "./general-calculator.html",
          secondaryText: "בדיקת קו\"ח לשיפור שכר",
          secondaryHref: "./index.html"
        },
        guides: {
          tag: "מוכנים ליישם?",
          title: "עברו ישר לכלים המעשיים של JobNet",
          desc: "בדקו את קורות החיים שלכם מול מערכות גיוס או חשבו את תלוש השכר נטו.",
          primaryText: "סריקת קורות חיים",
          primaryHref: "./index.html",
          secondaryText: "מחשבון שכר כללי",
          secondaryHref: "./general-calculator.html"
        },
        other: {
          tag: "כלי JobNet לשירותך",
          title: "רוצים לבדוק קורות חיים או לחשב שכר נטו?",
          desc: "כל הסימולטורים זמינים לשימוש חופשי וללא הרשמה.",
          primaryText: "סריקת קורות חיים",
          primaryHref: "./index.html",
          secondaryText: "מחשבון שכר ברוטו-נטו",
          secondaryHref: "./general-calculator.html"
        }
      };

      const rec = recommendations[slug] || recommendations.other;

      const allTools = [
        { slug: 'cv', icon: '📄', label: 'סריקת קו"ח', href: './index.html' },
        { slug: 'calc', icon: '📊', label: 'ברוטו לנטו', href: './general-calculator.html' },
        { slug: 'tech', icon: '⚡', label: 'שכר הייטק', href: './tech-salary.html' },
        { slug: 'options', icon: '📈', label: 'אופציות ו-RSU', href: './options-rsu.html' },
        { slug: 'severance', icon: '🛡️', label: 'פיצויי פיטורים', href: './severance-pay.html' },
        { slug: 'min', icon: '⏱️', label: 'שכר מינימום', href: './minimum-wage.html' },
        { slug: 'guides', icon: '📚', label: 'מדריכים וזכויות', href: './guides.html' }
      ];

      const quickLinksHtml = allTools
        .filter(t => t.slug !== slug)
        .map(t => `<a href="${t.href}" class="bottom-pill-link"><span>${t.icon}</span><span>${t.label}</span></a>`)
        .join('');

      const box = document.createElement('section');
      box.className = 'smart-next-step no-print';
      box.innerHTML = `
        <style>
          .smart-next-step {
            max-width: 980px;
            width: calc(100% - 32px);
            margin: 28px auto 14px auto;
            background: linear-gradient(180deg, rgba(247, 147, 26, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
            border: 1px solid rgba(247, 147, 26, 0.25);
            border-radius: 16px;
            padding: 24px 24px 20px 24px;
            box-sizing: border-box;
          }
          .sns-top {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
          }
          .sns-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            align-items: center;
          }
          .sns-btn-primary {
            text-decoration: none;
            background: #f7931a;
            color: #0b0e14;
            font-weight: 700;
            padding: 10px 20px;
            border-radius: 999px;
            font-size: 0.88rem;
            white-space: nowrap;
            transition: opacity 0.2s;
          }
          .sns-btn-primary:hover { opacity: 0.92; }
          .sns-btn-sec {
            text-decoration: none;
            background: rgba(255, 255, 255, 0.06);
            color: #f3f4f6;
            border: 1px solid rgba(255, 255, 255, 0.12);
            font-weight: 600;
            padding: 10px 18px;
            border-radius: 999px;
            font-size: 0.86rem;
            white-space: nowrap;
            transition: border-color 0.2s;
          }
          .sns-btn-sec:hover { border-color: rgba(247, 147, 26, 0.5); }
          .sns-bottom-nav {
            margin-top: 18px;
            padding-top: 14px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
          }
          .sns-pills-row {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          .bottom-pill-link {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            text-decoration: none;
            background: rgba(0, 0, 0, 0.28);
            border: 1px solid rgba(255, 255, 255, 0.08);
            color: #d1d5db;
            padding: 6px 12px;
            border-radius: 999px;
            font-size: 0.8rem;
            transition: all 0.2s ease;
          }
          .bottom-pill-link:hover {
            border-color: #f7931a;
            color: #ffffff;
            background: rgba(247, 147, 26, 0.1);
          }
          .sns-back-top {
            background: transparent;
            border: 1px solid rgba(255, 255, 255, 0.14);
            color: #9ca3af;
            padding: 6px 13px;
            border-radius: 999px;
            font-size: 0.78rem;
            cursor: pointer;
            font-family: inherit;
            transition: all 0.2s ease;
          }
          .sns-back-top:hover {
            color: #f7931a;
            border-color: #f7931a;
          }
        </style>

        <div class="sns-top">
          <div style="flex: 1 1 320px;">
            <span style="display: inline-block; font-size: 0.74rem; font-weight: 700; color: #f7931a; background: rgba(247, 147, 26, 0.15); padding: 3px 10px; border-radius: 999px; margin-bottom: 8px;">${rec.tag}</span>
            <h3 style="margin: 0 0 6px 0; font-size: 1.14rem; color: #ffffff;">${rec.title}</h3>
            <p style="margin: 0; font-size: 0.88rem; color: #9ca3af; line-height: 1.55;">${rec.desc}</p>
          </div>
          <div class="sns-actions">
            <a href="${rec.primaryHref}" class="sns-btn-primary">${rec.primaryText} ←</a>
            <a href="${rec.secondaryHref}" class="sns-btn-sec">${rec.secondaryText}</a>
          </div>
        </div>

        <div class="sns-bottom-nav">
          <div class="sns-pills-row">
            ${quickLinksHtml}
          </div>
          <button type="button" class="sns-back-top" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">חזרה למעלה ↑</button>
        </div>
      `;

      const footer = document.querySelector('footer');
      if (footer) {
        document.body.insertBefore(box, footer);
      } else {
        document.body.appendChild(box);
      }
    } catch (e) {}
  }

  function buildFooter() {
    try {
      if (document.querySelector('footer .legal-links')) return;

      const currentYear = new Date().getFullYear();
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

        <div class="cookie-bar" style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; background: rgba(255, 255, 255, 0.02); border-top: 1px solid rgba(255, 255, 255, 0.05); border-bottom: 1px solid rgba(255, 255, 255, 0.05); padding: 10px 16px; margin: 18px auto 14px auto; max-width: 1040px; font-size: 0.77rem; font-weight: 300; color: #717688; text-align: center;">
          <div>
            <span>אתר זה עושה שימוש בעוגיות לתפעול, מדידה ושיפור השירות.</span>
            <a href="./privacy.html" style="color: #8b92a5; text-decoration: underline; margin-right: 4px;">למידע ומדיניות</a>
          </div>
          <div style="direction: ltr; font-size: 0.74rem; opacity: 0.7;">
            This website uses cookies for operational, analytics, and marketing purposes.
          </div>
        </div>

        <div style="text-align: center; margin-top: 10px; font-size: 0.82rem; color: var(--muted); line-height: 1.6;">
          <p style="margin: 0 0 4px 0;">החישוב מהווה סימולציה משוערת בלבד ואינו מהווה ייעוץ פנסיוני, פיננסי או ייעוץ מס.</p>
          <div style="direction: ltr; display: inline-block;">
            <a href="./index.html" style="color: var(--muted); text-decoration: none; transition: color 0.2s;" onmouseover="this.style.color='#f7931a'" onmouseout="this.style.color='var(--muted)'">
              © ${currentYear} jobnet.vip. All rights reserved.
            </a>
            <span style="opacity: 0.4; font-size: 0.75rem; margin-left: 6px;">v4.3</span>
          </div>
        </div>
      `;
    } catch (err) {}
  }

  function buildAccessibilityWidget() {
    try {
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

      if (toggle && menu) {
        toggle.addEventListener('click', () => menu.classList.toggle('active'));
      }
      if (close && menu) {
        close.addEventListener('click', () => menu.classList.remove('active'));
      }

      let currentFontSize = 16;
      const fPlus = document.getElementById('btnFontPlus');
      const fMinus = document.getElementById('btnFontMinus');
      if (fPlus) {
        fPlus.addEventListener('click', () => {
          if (currentFontSize < 22) {
            currentFontSize += 2;
            document.documentElement.style.fontSize = currentFontSize + 'px';
          }
        });
      }
      if (fMinus) {
        fMinus.addEventListener('click', () => {
          if (currentFontSize > 14) {
            currentFontSize -= 2;
            document.documentElement.style.fontSize = currentFontSize + 'px';
          }
        });
      }

      const btnGray = document.getElementById('btnGrayscale');
      if (btnGray) {
        btnGray.addEventListener('click', e => {
          document.body.classList.toggle('acc-grayscale');
          e.target.classList.toggle('active-opt');
        });
      }

      const btnInv = document.getElementById('btnInvert');
      if (btnInv) {
        btnInv.addEventListener('click', e => {
          document.body.classList.toggle('acc-invert');
          e.target.classList.toggle('active-opt');
        });
      }

      const btnLnk = document.getElementById('btnLinks');
      if (btnLnk) {
        btnLnk.addEventListener('click', e => {
          document.body.classList.toggle('acc-highlight-links');
          e.target.classList.toggle('active-opt');
        });
      }

      const btnRead = document.getElementById('btnReadable');
      if (btnRead) {
        btnRead.addEventListener('click', e => {
          document.body.classList.toggle('acc-readable-font');
          e.target.classList.toggle('active-opt');
        });
      }

      const btnRst = document.getElementById('btnReset');
      if (btnRst) {
        btnRst.addEventListener('click', () => {
          currentFontSize = 16;
          document.documentElement.style.fontSize = '16px';
          document.body.classList.remove('acc-grayscale', 'acc-invert', 'acc-highlight-links', 'acc-readable-font');
          document.querySelectorAll('.acc-opt-btn').forEach(b => b.classList.remove('active-opt'));
        });
      }
    } catch (err) {}
  }

  function initLayout() {
    setupMetaAndFavicon();
    buildHeader();
    buildFooter();
    buildSmartNextStep();
    buildAccessibilityWidget();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLayout);
  } else {
    initLayout();
  }

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
  } catch (e) {}
})();
