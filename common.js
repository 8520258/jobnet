// 2. כותרת עליונה ותפריט ניווט עם קישור לחיץ ומיושר
  function buildHeader() {
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
          <span class="pill">2026</span>
          <span>${window.JOBNET_TAX_CONFIG.sourceText}</span>
        </div>
      </div>

      <p style="margin-top: 6px;">סימולטורים פיננסיים, חישוב שכר נטו, אופציות RSU, פיצויי פיטורים וזכויות עובדים</p>
      
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
