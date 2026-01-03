/* ======================================================
   sections.js - Service Section Navigation
   Show only clicked service section
   ====================================================== */

(() => {
  console.log('[sections.js] loaded');

  const SERVICES = ['tax', 'visa', 'medical', 'labor'];

  // 모든 섹션 숨기고 특정 섹션만 표시
  function showSection(serviceKey) {
    SERVICES.forEach(key => {
      const card = document.getElementById(key);
      if (card) {
        if (key === serviceKey) {
          card.style.display = 'block';
          card.classList.add('active-section');
        } else {
          card.style.display = 'none';
          card.classList.remove('active-section');
        }
      }
    });

    // 제목 변경
    const title = document.querySelector('.services h2');
    if (title && serviceKey) {
      const titles = {
        tax: '세무 & 환급',
        visa: '비자 & 체류관리',
        medical: '의료 지원',
        labor: '노동 & 권리보호'
      };
      title.textContent = titles[serviceKey] || '4대 핵심 서비스';
      title.setAttribute('data-i18n', serviceKey + 'Title');
      
      // i18n 재적용
      if (window.i18n && window.i18n.apply) {
        window.i18n.apply();
      }
    }

    console.log('[sections.js] showing section:', serviceKey);
  }

  // 모든 섹션 표시 (홈 상태)
  function showAllSections() {
    SERVICES.forEach(key => {
      const card = document.getElementById(key);
      if (card) {
        card.style.display = 'block';
        card.classList.remove('active-section');
      }
    });

    // 제목 복원
    const title = document.querySelector('.services h2');
    if (title) {
      title.textContent = '4대 핵심 서비스';
      title.removeAttribute('data-i18n');
    }

    console.log('[sections.js] showing all sections');
  }

  // URL 해시 처리
  function handleHash() {
    const hash = window.location.hash.substring(1); // #tax -> tax
    
    if (hash && SERVICES.includes(hash)) {
      showSection(hash);
      
      // 섹션으로 스크롤
      setTimeout(() => {
        const section = document.getElementById('services');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      showAllSections();
    }
  }

  // 네비게이션 링크 클릭 처리
  function initNavigation() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('.nav-link');
      if (!link) return;

      e.preventDefault();
      const href = link.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        const serviceKey = href.substring(1);
        
        // URL 해시 변경
        window.location.hash = href;
        
        // 섹션 표시
        if (SERVICES.includes(serviceKey)) {
          showSection(serviceKey);
        }
      }
    });

    console.log('[sections.js] navigation initialized');
  }

  // 로고 클릭 시 홈으로 (모든 섹션 표시)
  function initLogoClick() {
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.hash = '';
        showAllSections();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      logo.style.cursor = 'pointer';
    }
  }

  // 언어 변경 시 현재 섹션 유지
  document.addEventListener('i18n:changed', () => {
    const hash = window.location.hash.substring(1);
    if (hash && SERVICES.includes(hash)) {
      // 현재 표시 중인 섹션 유지
      setTimeout(() => {
        const title = document.querySelector('.services h2');
        if (title) {
          title.setAttribute('data-i18n', hash + 'Title');
          if (window.i18n && window.i18n.apply) {
            window.i18n.apply();
          }
        }
      }, 50);
    }
  });

  // 초기화
  function init() {
    console.log('[sections.js] initializing...');
    
    initNavigation();
    initLogoClick();
    
    // 페이지 로드 시 해시 처리
    handleHash();
    
    // 해시 변경 감지
    window.addEventListener('hashchange', handleHash);
    
    console.log('[sections.js] initialization complete');
  }

  // DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
