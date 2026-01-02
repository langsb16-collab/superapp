/**
 * K-Resident One - 언어 선택기
 * 인라인 형태의 언어 선택 버튼
 */

// DOM 로드 완료 후 초기화
document.addEventListener('DOMContentLoaded', () => {
  // 언어 변경 함수 래핑
  const originalChangeLang = window.changeLang;
  window.changeLang = function(lang) {
    if (originalChangeLang) {
      originalChangeLang(lang);
    }
    
    // 활성 언어 옵션 표시
    document.querySelectorAll('.language-option').forEach(option => {
      const optionLang = option.getAttribute('data-lang');
      if (optionLang === lang) {
        option.classList.add('active');
      } else {
        option.classList.remove('active');
      }
    });
  };

  // 초기 언어 설정
  const currentLang = window.currentLang || 'ko';
  document.querySelectorAll('.language-option').forEach(option => {
    const optionLang = option.getAttribute('data-lang');
    if (optionLang === currentLang) {
      option.classList.add('active');
    } else {
      option.classList.remove('active');
    }
  });
});
