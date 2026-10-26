// הדר עליון מעודכן עם נתיבים יחסיים
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
          <a href="./index.html" class="${currentPath.endsWith('index.html') || currentPath === '/' ? 'active' : ''}">
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

    // פוטר מעודכן עם נתיבים יחסיים
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
