/**
 * K-Resident One - 메인 앱 스크립트
 * 모든 버튼 이벤트 처리
 */

// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', () => {
  console.log('App.js loaded - initializing event handlers');
  
  // OnboardingFlow가 로드될 때까지 대기
  const initOnboarding = () => {
    if (typeof OnboardingFlow !== 'undefined') {
      window.onboarding = new OnboardingFlow();
      console.log('Onboarding initialized');
    } else {
      console.log('Waiting for OnboardingFlow...');
      setTimeout(initOnboarding, 100);
    }
  };
  
  initOnboarding();
  
  // 1. 시작하기 버튼 이벤트
  const btnStart = document.getElementById('btn-start');
  if (btnStart) {
    btnStart.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Start button clicked');
      
      if (window.onboarding) {
        console.log('Starting onboarding...');
        window.onboarding.start();
      } else {
        console.error('Onboarding not initialized yet');
        alert('시스템을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.');
      }
    });
    console.log('Start button event listener added');
  } else {
    console.error('Start button not found');
  }
  
  // 2. 자세히 보기 버튼 이벤트 (모든 섹션)
  document.querySelectorAll('.btn-secondary').forEach((button, index) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      
      // 가장 가까운 service-card 찾기
      const card = button.closest('.service-card');
      if (!card) return;
      
      // 섹션 ID로 서비스 구분
      const sectionId = card.id;
      const t = window.translations[window.currentLang] || window.translations.ko;
      
      let serviceInfo = '';
      
      switch(sectionId) {
        case 'tax':
          serviceInfo = `
📊 ${t.taxTitle || '세무 & 환급'}

${t.taxDesc || '연말정산, 종합소득세 신고 및 환급'}

✅ ${t.taxFeature1 || '환급 예상액 자동 계산'}
✅ ${t.taxFeature2 || '다국어 세무사 매칭'}
✅ ${t.taxFeature3 || '성공 수수료 기반'}

💰 평균 환급액: 50-150만원
📅 처리 기간: 1-2주
🔒 안전한 개인정보 보호
          `;
          break;
          
        case 'visa':
          serviceInfo = `
🛂 ${t.visaTitle || '비자 & 체류관리'}

${t.visaDesc || '체류 상태 관리 및 비자 연장'}

✅ ${t.visaFeature1 || '체류 만료 자동 알림'}
✅ ${t.visaFeature2 || '서류 자동 작성'}
✅ ${t.visaFeature3 || '출입국 가이드'}

📱 24시간 실시간 알림
📝 간편한 온라인 신청
🌐 8개 언어 지원
          `;
          break;
          
        case 'medical':
          serviceInfo = `
🏥 ${t.medicalTitle || '의료 지원'}

${t.medicalDesc || '외국인 친화 병원 검색 및 통역'}

✅ ${t.medicalFeature1 || '다국어 병원 검색'}
✅ ${t.medicalFeature2 || 'AI 증상 문진'}
✅ ${t.medicalFeature3 || '통역/동행 서비스'}

👨‍⚕️ 외국인 친화 병원 1,000+
💬 실시간 의료 통역
🚑 응급 상황 지원
          `;
          break;
          
        case 'labor':
          serviceInfo = `
⚖️ ${t.laborTitle || '노동 & 권리보호'}

${t.laborDesc || '근로계약 검토 및 권리 보호'}

✅ ${t.laborFeature1 || '계약서 자동 분석'}
✅ ${t.laborFeature2 || '임금 계산기'}
✅ ${t.laborFeature3 || '산재·체불 신고 지원'}

📋 무료 계약서 검토
💵 임금 체불 신고 지원
🛡️ 법률 상담 연결
          `;
          break;
      }
      
      alert(serviceInfo);
    });
  });
  
  console.log('Learn More button events added to all sections');
  
  // 3. 온보딩 초기화
  if (typeof OnboardingFlow !== 'undefined') {
    window.onboarding = new OnboardingFlow();
    console.log('Onboarding initialized');
  } else {
    console.warn('OnboardingFlow class not found');
  }
});
