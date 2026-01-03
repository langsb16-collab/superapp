/* ======================================================
   main.js – UI Event Handlers for K-Resident One
   ====================================================== */

(() => {
  console.log('[main.js] loaded');

  /* -----------------------------
     언어 드롭다운 토글
  ----------------------------- */
  function initLanguageDropdown() {
    const trigger = document.querySelector('.language-trigger-compact');
    const menu = document.querySelector('.language-menu-compact');

    if (!trigger || !menu) {
      console.warn('[main.js] language dropdown not found');
      return;
    }

    // 트리거 클릭
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = trigger.classList.toggle('active');
      menu.classList.toggle('hidden', !isActive);
      console.log('[main.js] language menu toggled:', isActive);
    });

    // 외부 클릭 시 닫기
    document.addEventListener('click', (e) => {
      if (!trigger.contains(e.target) && !menu.contains(e.target)) {
        trigger.classList.remove('active');
        menu.classList.add('hidden');
      }
    });

    console.log('[main.js] language dropdown initialized');
  }

  /* -----------------------------
     시작하기 버튼 (이벤트 위임 + Lock)
  ----------------------------- */
  let onboardingLock = false;

  function initStartButton() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('#btn-start');
      if (!btn) return;

      e.preventDefault();

      // 중복 실행 방지
      if (onboardingLock) {
        console.warn('[main.js] onboarding already running');
        return;
      }

      console.log('[main.js] start button clicked');

      // 온보딩 시작
      if (window.onboarding && typeof window.onboarding.start === 'function') {
        onboardingLock = true;
        
        try {
          window.onboarding.start();
          console.log('[main.js] onboarding started');
        } catch (err) {
          console.error('[main.js] onboarding start error:', err);
          showModal('오류', '온보딩을 시작할 수 없습니다. 페이지를 새로고침해주세요.');
          onboardingLock = false;
        }
        
        // 300ms 후 Lock 해제
        setTimeout(() => {
          onboardingLock = false;
        }, 300);
      } else {
        console.error('[main.js] onboarding not found');
        showModal('알림', '온보딩 시스템을 로드 중입니다. 잠시 후 다시 시도해주세요.');
      }
    });

    console.log('[main.js] start button event listener added');
  }

  /* -----------------------------
     깔끔한 모달 시스템 (+ 포커스 트랩)
  ----------------------------- */
  function showModal(title, content) {
    // 기존 모달 제거
    const existing = document.getElementById('info-modal');
    if (existing) existing.remove();

    // 배경 스크롤 차단
    document.body.classList.add('modal-open');

    // 모달 생성
    const modal = document.createElement('div');
    modal.id = 'info-modal';
    modal.className = 'info-modal';
    modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        <h3 class="modal-title">${title}</h3>
        <div class="modal-body">${content}</div>
        <button class="modal-btn-ok">확인</button>
      </div>
    `;

    document.body.appendChild(modal);

    // 닫기 이벤트 + 배경 스크롤 복원
    const close = () => {
      modal.remove();
      document.body.classList.remove('modal-open');
      console.log('[main.js] modal closed');
    };
    
    modal.querySelector('.modal-close').addEventListener('click', close);
    modal.querySelector('.modal-btn-ok').addEventListener('click', close);
    modal.querySelector('.modal-backdrop').addEventListener('click', close);

    // ESC 키로 닫기
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        close();
        document.removeEventListener('keydown', handleEsc);
      }
    };
    document.addEventListener('keydown', handleEsc);

    console.log('[main.js] modal shown:', title);
  }

  /* -----------------------------
     자세히 보기 버튼 (이벤트 위임)
  ----------------------------- */
  function initLearnMoreButtons() {
    const serviceDetails = {
      ko: {
        tax: {
          title: '세무 & 환급 서비스',
          content: `
            <div class="service-detail">
              <h4>📌 주요 기능</h4>
              <ul>
                <li>환급 예상액 자동 계산</li>
                <li>다국어 세무사 매칭</li>
                <li>성공 수수료 기반</li>
              </ul>
              <h4>💰 예상 혜택</h4>
              <ul>
                <li>예상 환급액: ₩500,000 ~ ₩2,000,000</li>
                <li>처리 기간: 약 2~4주</li>
                <li>안전한 데이터 암호화 보장</li>
              </ul>
            </div>
          `
        },
        visa: {
          title: '비자 & 체류관리 서비스',
          content: `
            <div class="service-detail">
              <h4>📌 주요 기능</h4>
              <ul>
                <li>체류 만료 24시간 전 자동 알림</li>
                <li>서류 자동 작성 및 번역</li>
                <li>출입국 가이드 제공</li>
              </ul>
              <h4>📱 추가 서비스</h4>
              <ul>
                <li>실시간 알림 서비스</li>
                <li>필요 서류 자동 체크리스트</li>
                <li>온라인 신청 지원</li>
              </ul>
            </div>
          `
        },
        medical: {
          title: '의료 지원 서비스',
          content: `
            <div class="service-detail">
              <h4>📌 주요 기능</h4>
              <ul>
                <li>다국어 병원 검색</li>
                <li>AI 증상 문진 서비스</li>
                <li>통역/동행 서비스 연결</li>
              </ul>
              <h4>🏥 지원 현황</h4>
              <ul>
                <li>외국인 친화 병원 100+ 곳</li>
                <li>실시간 통역 서비스</li>
                <li>24시간 긴급 상담</li>
              </ul>
            </div>
          `
        },
        labor: {
          title: '노동 & 권리보호 서비스',
          content: `
            <div class="service-detail">
              <h4>📌 주요 기능</h4>
              <ul>
                <li>계약서 자동 분석 (AI 기반)</li>
                <li>임금 계산기</li>
                <li>산재·체불 신고 지원</li>
              </ul>
              <h4>⚖️ 법률 지원</h4>
              <ul>
                <li>무료 계약서 검토</li>
                <li>임금 체불 신고 지원</li>
                <li>법률 자문 연결</li>
              </ul>
            </div>
          `
        }
      },
      en: {
        tax: {
          title: 'Tax & Refund Service',
          content: `
            <div class="service-detail">
              <h4>📌 Key Features</h4>
              <ul>
                <li>Auto-calculate refund estimate</li>
                <li>Multilingual tax expert matching</li>
                <li>Success-based fee</li>
              </ul>
              <h4>💰 Expected Benefits</h4>
              <ul>
                <li>Refund: ₩500,000 ~ ₩2,000,000</li>
                <li>Processing: 2-4 weeks</li>
                <li>Secure data encryption</li>
              </ul>
            </div>
          `
        },
        visa: {
          title: 'Visa & Stay Management',
          content: `
            <div class="service-detail">
              <h4>📌 Key Features</h4>
              <ul>
                <li>Auto stay expiry alerts (24h)</li>
                <li>Auto-fill & translate documents</li>
                <li>Immigration guide</li>
              </ul>
            </div>
          `
        },
        medical: {
          title: 'Medical Support',
          content: `
            <div class="service-detail">
              <h4>📌 Key Features</h4>
              <ul>
                <li>Multilingual hospital search</li>
                <li>AI symptom checker</li>
                <li>Interpreter/escort service</li>
              </ul>
            </div>
          `
        },
        labor: {
          title: 'Labor & Rights Protection',
          content: `
            <div class="service-detail">
              <h4>📌 Key Features</h4>
              <ul>
                <li>Auto-analyze contracts (AI)</li>
                <li>Wage calculator</li>
                <li>Report industrial accidents</li>
              </ul>
            </div>
          `
        }
      },
      'zh-CN': {
        tax: { title: '税务与退税服务', content: '<ul><li>自动计算退税预估</li><li>多语言税务专家匹配</li></ul>' },
        visa: { title: '签证与居留管理', content: '<ul><li>居留到期自动提醒</li><li>文件自动填写</li></ul>' },
        medical: { title: '医疗支持', content: '<ul><li>多语言医院搜索</li><li>AI症状问诊</li></ul>' },
        labor: { title: '劳动与权益保护', content: '<ul><li>自动分析合同</li><li>工资计算器</li></ul>' }
      }
    };

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-secondary[data-i18n="btnLearnMore"]');
      if (!btn) return;

      e.preventDefault();

      // 섹션 찾기
      const section = btn.closest('.service-card');
      if (!section) return;

      // 섹션 타입 결정
      let serviceType = 'tax';
      if (section.querySelector('[data-i18n="taxTitle"]')) serviceType = 'tax';
      else if (section.querySelector('[data-i18n="visaTitle"]')) serviceType = 'visa';
      else if (section.querySelector('[data-i18n="medicalTitle"]')) serviceType = 'medical';
      else if (section.querySelector('[data-i18n="laborTitle"]')) serviceType = 'labor';

      // 현재 언어
      const lang = window.i18n ? window.i18n.lang : 'ko';
      const langDetails = serviceDetails[lang] || serviceDetails['ko'];
      const details = langDetails[serviceType];

      if (details) {
        console.log('[main.js] learn more clicked:', serviceType, lang);
        showModal(details.title, details.content);
      }
    });

    console.log('[main.js] learn more buttons initialized');
  }

  /* -----------------------------
     언어 변경 시 UI 자동 Reset
  ----------------------------- */
  document.addEventListener('i18n:changed', (e) => {
    const lang = e.detail.lang;
    console.log('[main.js] language changed to:', lang);

    // 열려있는 모달 닫기
    const modal = document.getElementById('info-modal');
    if (modal) {
      modal.remove();
      console.log('[main.js] modal closed on language change');
    }

    // 온보딩 리셋 (열려있다면)
    if (window.onboarding && typeof window.onboarding.close === 'function') {
      window.onboarding.close();
      console.log('[main.js] onboarding closed on language change');
    }

    // 챗봇 재렌더링
    if (window.renderChatbot) {
      setTimeout(() => {
        window.renderChatbot();
        console.log('[main.js] chatbot re-rendered for language:', lang);
      }, 100);
    }
  });

  /* -----------------------------
     초기화
  ----------------------------- */
  function init() {
    console.log('[main.js] initializing...');
    
    initLanguageDropdown();
    initStartButton();
    initLearnMoreButtons();
    
    console.log('[main.js] initialization complete');
  }

  /* -----------------------------
     전역 에러 핸들러 (운영 안전)
  ----------------------------- */
  window.addEventListener('error', (e) => {
    console.error('[GLOBAL ERROR]', {
      message: e.message,
      filename: e.filename,
      lineno: e.lineno,
      colno: e.colno,
      error: e.error
    });
  });

  window.addEventListener('unhandledrejection', (e) => {
    console.error('[UNHANDLED PROMISE REJECTION]', e.reason);
  });

  // DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
