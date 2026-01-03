/**
 * K-Resident One - 메인 JavaScript
 * 모든 기능을 하나의 파일에서 처리
 */

console.log('=== K-Resident One Main.js Loading ===');

// translations가 로드될 때까지 기다림
function waitForTranslations(callback) {
  if (typeof window.translations !== 'undefined') {
    callback();
  } else {
    console.log('Waiting for translations...');
    setTimeout(() => waitForTranslations(callback), 100);
  }
}

// 전역 변수 초기화
window.kResident = {
  currentLang: localStorage.getItem('selectedLang') || 'ko',
  onboarding: null,
  initialized: false
};

// 언어 이름 매핑
const LANGUAGE_NAMES = {
  'ko': '한국어',
  'en': 'English',
  'zh-CN': '中文(简)',
  'zh-TW': '中文(繁)',
  'ja': '日本語',
  'vi': 'Tiếng Việt',
  'es': 'Español',
  'de': 'Deutsch'
};

// ===========================================
// 1. 언어 전환 기능
// ===========================================
function initLanguageSwitcher() {
  console.log('Initializing language switcher...');
  
  const trigger = document.getElementById('language-trigger');
  const menu = document.getElementById('language-menu');
  const currentLangText = document.getElementById('current-lang-text');
  
  if (!trigger || !menu) {
    console.error('Language elements not found');
    return;
  }

  // 트리거 클릭
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
    trigger.classList.toggle('active');
    console.log('Language menu toggled');
  });

  // 외부 클릭 시 닫기
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !trigger.contains(e.target)) {
      menu.classList.add('hidden');
      trigger.classList.remove('active');
    }
  });

  // 모든 언어 옵션에 클릭 이벤트
  document.querySelectorAll('.language-option').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = button.getAttribute('data-lang');
      console.log('Language selected:', lang);
      
      if (lang) {
        changeLang(lang);
        menu.classList.add('hidden');
        trigger.classList.remove('active');
      }
    });
  });

  // 초기 언어 설정
  updateLanguageTrigger();
  console.log('Language switcher initialized');
}

function changeLang(lang) {
  console.log('Changing language to:', lang);
  
  window.kResident.currentLang = lang;
  window.currentLang = lang;
  localStorage.setItem('selectedLang', lang);
  
  const t = window.translations[lang];
  if (!t) {
    console.error('Translation not found for:', lang);
    return;
  }
  
  // UI 업데이트
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });
  
  updateLanguageTrigger();
  console.log('Language changed successfully to:', lang);
}

function updateLanguageTrigger() {
  const currentLangText = document.getElementById('current-lang-text');
  if (currentLangText) {
    currentLangText.textContent = LANGUAGE_NAMES[window.kResident.currentLang] || '한국어';
  }
  
  document.querySelectorAll('.language-option').forEach(option => {
    const lang = option.getAttribute('data-lang');
    if (lang === window.kResident.currentLang) {
      option.classList.add('active');
    } else {
      option.classList.remove('active');
    }
  });
}

// ===========================================
// 2. 시작하기 버튼
// ===========================================
function initStartButton() {
  console.log('Initializing start button...');
  
  const btnStart = document.getElementById('btn-start');
  if (!btnStart) {
    console.error('Start button not found');
    return;
  }

  btnStart.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Start button clicked!');
    
    // OnboardingFlow가 있으면 시작
    if (typeof OnboardingFlow !== 'undefined') {
      if (!window.kResident.onboarding) {
        window.kResident.onboarding = new OnboardingFlow();
      }
      window.kResident.onboarding.start();
      console.log('Onboarding started');
    } else {
      console.error('OnboardingFlow not defined');
      alert('온보딩 시스템을 로드하는 중입니다. 잠시 후 다시 시도해주세요.');
    }
  });
  
  console.log('Start button initialized');
}

// ===========================================
// 3. 자세히 보기 버튼들
// ===========================================
function initLearnMoreButtons() {
  console.log('Initializing learn more buttons...');
  
  const buttons = document.querySelectorAll('.btn-secondary');
  console.log('Found', buttons.length, 'learn more buttons');
  
  buttons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Learn more button clicked:', index);
      
      const card = button.closest('.service-card');
      if (!card) {
        console.error('Service card not found');
        return;
      }
      
      const sectionId = card.id;
      console.log('Section:', sectionId);
      
      const t = window.translations[window.kResident.currentLang] || window.translations.ko;
      
      let title = '';
      let description = '';
      let features = [];
      
      switch(sectionId) {
        case 'tax':
          title = t.taxTitle || '세무 & 환급';
          description = t.taxDesc || '연말정산, 종합소득세 신고 및 환급';
          features = [
            t.taxFeature1 || '환급 예상액 자동 계산',
            t.taxFeature2 || '다국어 세무사 매칭',
            t.taxFeature3 || '성공 수수료 기반',
            '평균 환급액: 50-150만원',
            '처리 기간: 1-2주'
          ];
          break;
          
        case 'visa':
          title = t.visaTitle || '비자 & 체류관리';
          description = t.visaDesc || '체류 상태 관리 및 비자 연장';
          features = [
            t.visaFeature1 || '체류 만료 자동 알림',
            t.visaFeature2 || '서류 자동 작성',
            t.visaFeature3 || '출입국 가이드',
            '24시간 실시간 알림',
            '8개 언어 지원'
          ];
          break;
          
        case 'medical':
          title = t.medicalTitle || '의료 지원';
          description = t.medicalDesc || '외국인 친화 병원 검색 및 통역';
          features = [
            t.medicalFeature1 || '다국어 병원 검색',
            t.medicalFeature2 || 'AI 증상 문진',
            t.medicalFeature3 || '통역/동행 서비스',
            '외국인 친화 병원 1,000+',
            '실시간 의료 통역'
          ];
          break;
          
        case 'labor':
          title = t.laborTitle || '노동 & 권리보호';
          description = t.laborDesc || '근로계약 검토 및 권리 보호';
          features = [
            t.laborFeature1 || '계약서 자동 분석',
            t.laborFeature2 || '임금 계산기',
            t.laborFeature3 || '산재·체불 신고 지원',
            '무료 계약서 검토',
            '법률 상담 연결'
          ];
          break;
      }
      
      const message = `📋 ${title}\n\n${description}\n\n✅ ${features.join('\n✅ ')}`;
      alert(message);
      console.log('Alert shown for section:', sectionId);
    });
  });
  
  console.log('Learn more buttons initialized');
}

// ===========================================
// 초기화
// ===========================================
function initialize() {
  console.log('=== Initializing K-Resident One ===');
  
  if (window.kResident.initialized) {
    console.log('Already initialized');
    return;
  }
  
  // 1. 언어 전환
  initLanguageSwitcher();
  
  // 2. 시작하기 버튼
  initStartButton();
  
  // 3. 자세히 보기 버튼들
  initLearnMoreButtons();
  
  // 4. OnboardingFlow 초기화 (있으면)
  if (typeof OnboardingFlow !== 'undefined') {
    window.kResident.onboarding = new OnboardingFlow();
    console.log('OnboardingFlow initialized');
  } else {
    console.warn('OnboardingFlow not found, will initialize on demand');
  }
  
  window.kResident.initialized = true;
  console.log('=== K-Resident One Initialized Successfully ===');
}

// DOM 로드 완료 후 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    waitForTranslations(initialize);
  });
} else {
  waitForTranslations(initialize);
}

// 전역으로 노출 (디버깅용)
window.changeLang = changeLang;
window.kResidentInit = initialize;

console.log('=== Main.js Loaded ===');
