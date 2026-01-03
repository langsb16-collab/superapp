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
     시작하기 버튼 (이벤트 위임)
  ----------------------------- */
  function initStartButton() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('#btn-start');
      if (!btn) return;

      e.preventDefault();
      console.log('[main.js] start button clicked');

      // 온보딩 시작
      if (window.onboarding && typeof window.onboarding.start === 'function') {
        try {
          window.onboarding.start();
          console.log('[main.js] onboarding started');
        } catch (err) {
          console.error('[main.js] onboarding start error:', err);
          alert('온보딩을 시작할 수 없습니다. 페이지를 새로고침해주세요.');
        }
      } else {
        console.error('[main.js] onboarding not found');
        alert('온보딩 시스템을 로드 중입니다. 잠시 후 다시 시도해주세요.');
      }
    });

    console.log('[main.js] start button event listener added');
  }

  /* -----------------------------
     자세히 보기 버튼 (이벤트 위임)
  ----------------------------- */
  function initLearnMoreButtons() {
    const serviceDetails = {
      tax: {
        title: '세무 & 환급 서비스',
        content: `
📌 주요 기능:
• 환급 예상액 자동 계산
• 다국어 세무사 매칭
• 성공 수수료 기반 (환급 성공 시에만 수수료 발생)

💰 예상 환급액: ₩500,000 ~ ₩2,000,000
⏱️ 처리 기간: 약 2~4주
🔒 안전한 데이터 암호화 보장
        `
      },
      visa: {
        title: '비자 & 체류관리 서비스',
        content: `
📌 주요 기능:
• 체류 만료 24시간 전 자동 알림
• 서류 자동 작성 및 번역
• 출입국 가이드 제공

📱 실시간 알림 서비스
📄 필요 서류 자동 체크리스트
🌐 온라인 신청 지원
        `
      },
      medical: {
        title: '의료 지원 서비스',
        content: `
📌 주요 기능:
• 다국어 병원 검색 (영어, 중국어, 일본어 등)
• AI 증상 문진 서비스
• 통역/동행 서비스 연결

🏥 외국인 친화 병원 100+ 곳 등록
💬 실시간 통역 서비스
📞 24시간 긴급 상담
        `
      },
      labor: {
        title: '노동 & 권리보호 서비스',
        content: `
📌 주요 기능:
• 계약서 자동 분석 (AI 기반)
• 임금 계산기 (최저임금, 야간수당 등)
• 산재·체불 신고 지원

⚖️ 무료 계약서 검토
💰 임금 체불 신고 지원
🛡️ 법률 자문 연결
        `
      }
    };

    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-secondary[data-i18n="btnLearnMore"]');
      if (!btn) return;

      e.preventDefault();

      // 섹션 찾기 (부모 요소 탐색)
      const section = btn.closest('.service-card');
      if (!section) {
        console.warn('[main.js] service section not found');
        return;
      }

      // 섹션 타입 결정
      let serviceType = 'tax';
      if (section.querySelector('[data-i18n="taxTitle"]')) {
        serviceType = 'tax';
      } else if (section.querySelector('[data-i18n="visaTitle"]')) {
        serviceType = 'visa';
      } else if (section.querySelector('[data-i18n="medicalTitle"]')) {
        serviceType = 'medical';
      } else if (section.querySelector('[data-i18n="laborTitle"]')) {
        serviceType = 'labor';
      }

      const details = serviceDetails[serviceType];
      if (details) {
        console.log('[main.js] learn more clicked:', serviceType);
        alert(`${details.title}\n\n${details.content}`);
      }
    });

    console.log('[main.js] learn more buttons event listener added');
  }

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

  // DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
