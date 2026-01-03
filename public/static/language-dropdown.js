/**
 * K-Resident One - 언어 드롭다운
 * 컴팩트한 드롭다운 형태
 */

// 언어 이름 매핑 (자기 언어로 표기)
const languageNames = {
  'ko': '한국어',
  'en': 'English',
  'zh-CN': '中文(简)',
  'zh-TW': '中文(繁)',
  'ja': '日本語',
  'vi': 'Tiếng Việt',
  'es': 'Español',
  'de': 'Deutsch'
};

// DOM 로드 완료 후 초기화
document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('language-trigger');
  const menu = document.getElementById('language-menu');
  const currentLangText = document.getElementById('current-lang-text');
  
  if (!trigger || !menu) return;

  // 트리거 클릭 이벤트
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
    trigger.classList.toggle('active');
  });

  // 외부 클릭 시 메뉴 닫기
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !trigger.contains(e.target)) {
      menu.classList.add('hidden');
      trigger.classList.remove('active');
    }
  });

  // 현재 언어 텍스트 업데이트 함수
  window.updateLanguageTrigger = function() {
    const currentLang = window.currentLang || 'ko';
    if (currentLangText) {
      currentLangText.textContent = languageNames[currentLang] || '한국어';
    }

    // 활성 언어 옵션 표시
    document.querySelectorAll('.language-option').forEach(option => {
      const lang = option.getAttribute('data-lang');
      if (lang === currentLang) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  };

  // 모든 언어 옵션 버튼에 클릭 이벤트 추가
  document.querySelectorAll('.language-option').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = button.getAttribute('data-lang');
      if (lang && window.changeLang) {
        console.log('Language button clicked:', lang);
        window.changeLang(lang);
        
        // 메뉴 닫기
        menu.classList.add('hidden');
        trigger.classList.remove('active');
      }
    });
  });

  // 언어 변경 함수 래핑 (기존 호환성 유지)
  const originalChangeLang = window.changeLang;
  if (originalChangeLang) {
    window.changeLang = function(lang) {
      console.log('changeLang wrapper called with:', lang);
      originalChangeLang(lang);
      
      // 메뉴 닫기
      menu.classList.add('hidden');
      trigger.classList.remove('active');
      
      // 트리거 텍스트 업데이트
      window.updateLanguageTrigger();
    };
  }

  // 초기 언어 설정
  window.updateLanguageTrigger();
});
