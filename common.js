// 3. הזרקת פוטר כולל הודעת עוגיות דו-לשונית מובנית
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

        <!-- שורת עוגיות דו-לשונית מעודנת -->
        <div id="cookieBar" class="cookie-bar" style="display: none;">
          <div class="cookie-col he">
            אתר זה עושה שימוש בקובצי עוגיות וטכנולוגיות דומות לצורך תפעול, מדידה סטטיסטית ושיפור השירות. 
            <a href="./privacy.html">למידע נוסף</a>
          </div>
          <button id="btnAcceptCookies" class="cookie-btn">אישור / OK</button>
          <div class="cookie-col en">
            This site uses cookies and similar technologies for functionality, analytics, and experience enhancement.
            <a href="./privacy.html">Privacy Policy</a>
          </div>
        </div>

        <p>© 2026 jobnet.vip. כל הזכויות שמורות. החישוב מהווה סימולציה משוערת בלבד. <span style="opacity: 0.4; font-size: 0.75rem; margin-right: 6px;">v2.6</span></p>
      `;
      document.body.appendChild(footer);

      // הצגת הפס במידה והמשתמש טרם אישר
      if (!localStorage.getItem('cookies_accepted')) {
        const cookieBar = document.getElementById('cookieBar');
        if (cookieBar) {
          cookieBar.style.display = 'flex';
          document.getElementById('btnAcceptCookies').addEventListener('click', () => {
            localStorage.setItem('cookies_accepted', 'true');
            cookieBar.style.display = 'none';
          });
        }
      }
    }
