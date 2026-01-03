/* ======================================================
   i18n.js – Final Stable Version for Cloudflare Pages
   ====================================================== */

(() => {
  /* -----------------------------
     내부 상태
  ----------------------------- */
  let TRANSLATIONS = {};
  let currentLang = 'ko';
  let ready = false;
  let switching = false;

  /* -----------------------------
     언어 코드 정규화
  ----------------------------- */
  function normalizeLang(lang) {
    if (!lang) return 'ko';

    return lang
      .replace('_', '-')
      .toLowerCase()
      .replace('zh-cn', 'zh-CN')
      .replace('zh-tw', 'zh-TW')
      .replace('ja-jp', 'ja')
      .replace('ko-kr', 'ko');
  }

  /* -----------------------------
     localStorage 안전 접근
  ----------------------------- */
  function getSavedLang() {
    try {
      return localStorage.getItem('lang');
    } catch {
      return null;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem('lang', lang);
    } catch {}
  }

  /* -----------------------------
     번역 안전 접근 (Fail-Safe)
  ----------------------------- */
  function t(lang, key) {
    try {
      return (
        TRANSLATIONS?.[lang]?.[key] ??
        TRANSLATIONS?.ko?.[key] ??
        `[${key}]`
      );
    } catch {
      return `[${key}]`;
    }
  }

  /* -----------------------------
     DOM 번역 적용
  ----------------------------- */
  function render(lang) {
    if (!ready) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const text = t(lang, key);

      if (el.textContent !== text) {
        el.textContent = text;
      }
    });

    // 언어 드롭다운 트리거 업데이트
    const trigger = document.querySelector('.language-trigger-compact');
    if (trigger) {
      const langNames = {
        'ko': '한국어',
        'en': 'English',
        'zh-CN': '中文(简)',
        'zh-TW': '中文(繁)',
        'ja': '日本語',
        'vi': 'Tiếng Việt',
        'es': 'Español',
        'de': 'Deutsch'
      };
      const nameEl = trigger.querySelector('.lang-name');
      if (nameEl) {
        nameEl.textContent = langNames[lang] || langNames['ko'];
      }
    }

    // 활성 언어 옵션 표시
    document.querySelectorAll('.language-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === lang);
    });
  }

  /* -----------------------------
     언어 변경 (중복 방지)
  ----------------------------- */
  async function applyLanguage(lang) {
    if (!ready || switching) return;

    switching = true;
    try {
      lang = normalizeLang(lang);
      currentLang = TRANSLATIONS[lang] ? lang : 'ko';

      saveLang(currentLang);
      render(currentLang);

      // 언어 변경 이벤트 발송 (챗봇, 온보딩 동기화)
      document.dispatchEvent(
        new CustomEvent('i18n:changed', { 
          detail: { lang: currentLang } 
        })
      );

      console.info('[i18n] language applied:', currentLang);
    } finally {
      switching = false;
    }
  }

  /* -----------------------------
     i18n 초기화 (fetch + await)
  ----------------------------- */
  async function initI18n() {
    try {
      const res = await fetch('/static/translations.json?v=12', {
        cache: 'no-store'
      });

      if (!res.ok) {
        console.error('[i18n] translation load failed:', res.status);
        return;
      }

      TRANSLATIONS = await res.json();
      ready = true;

      const saved = getSavedLang();
      await applyLanguage(saved || 'ko');

      // ✅ 초기 DOM 전체 강제 렌더링 (비어있는 data-i18n 요소 채우기)
      setTimeout(() => {
        render(currentLang);
        console.info('[i18n] initial render completed');
      }, 100);

      // Health Check
      console.table(
        Object.keys(TRANSLATIONS).map(l => ({
          lang: l,
          keys: Object.keys(TRANSLATIONS[l]).length
        }))
      );

      console.info('[i18n] initialized successfully');
    } catch (e) {
      console.error('[i18n] init error', e);
    }
  }

  /* -----------------------------
     이벤트 위임 (언어 버튼)
  ----------------------------- */
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-lang]');
    if (!btn) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    const lang = btn.dataset.lang;
    console.log('[i18n] language button clicked:', lang);
    
    // ✅ 단일 API 사용
    applyLanguage(lang);
    
    // 드롭다운 닫기
    const menu = document.querySelector('.language-menu-compact');
    const trigger = document.querySelector('.language-trigger-compact');
    if (menu) menu.classList.add('hidden');
    if (trigger) trigger.classList.remove('active');
  });

  /* -----------------------------
     DOM 변경 자동 재번역
  ----------------------------- */
  const observer = new MutationObserver(() => {
    if (ready) render(currentLang);
  });

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  /* -----------------------------
     Service Worker 강제 제거
  ----------------------------- */
  if (navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations().then(list => {
      list.forEach(sw => {
        sw.unregister();
        console.info('[i18n] service worker unregistered');
      });
    });
  }

  /* -----------------------------
     DOM Ready 시 초기화
  ----------------------------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }

  /* -----------------------------
     외부 노출 (필요 최소 + 단일 진실원칙)
  ----------------------------- */
  window.i18n = {
    // ✅ 언어 변경은 이 함수로만 가능 (Single Source of Truth)
    setLanguage: applyLanguage,
    
    // ✅ 번역 함수
    t: (key) => t(currentLang, key),
    
    // ✅ 현재 언어 가져오기
    getCurrentLanguage: () => currentLang,
    
    // ✅ 수동 렌더링 (디버깅/테스트용)
    render: (lang) => render(lang || currentLang),
    
    // ✅ 현재 언어 (읽기 전용)
    get lang() {
      return currentLang;
    },
    
    // ✅ 준비 상태 (읽기 전용)
    get ready() {
      return ready;
    }
  };

  // ❌ 외부에서 직접 변경 금지
  // window.currentLang = 'en';  // 이렇게 하면 안됨!
  // window.i18n.setLanguage('en');  // ✅ 이렇게만 사용
})();
