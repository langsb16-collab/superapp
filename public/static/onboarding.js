/* ======================================================
   onboarding.js – 실제 서비스 선택 및 신청 기능
   ====================================================== */

(() => {
  let running = false;
  let currentStep = 0;
  let selectedServices = [];
  let userData = {
    name: '',
    phone: '',
    email: ''
  };

  // 4대 핵심 서비스
  const SERVICES = {
    tax: {
      icon: '💰',
      titleKey: 'taxTitle',
      descKey: 'taxDesc'
    },
    visa: {
      icon: '📋',
      titleKey: 'visaTitle',
      descKey: 'visaDesc'
    },
    medical: {
      icon: '🏥',
      titleKey: 'medicalTitle',
      descKey: 'medicalDesc'
    },
    labor: {
      icon: '⚖️',
      titleKey: 'laborTitle',
      descKey: 'laborDesc'
    }
  };

  function t(key) {
    if (!window.i18n || typeof window.i18n.t !== 'function') {
      return `[${key}]`;
    }
    return window.i18n.t(key);
  }

  // 1단계: 서비스 선택
  function renderStep1() {
    const html = `
      <div class="onboarding-step">
        <h2 class="step-title">${t('onboarding.selectService') || '필요한 서비스를 선택하세요'}</h2>
        <p class="step-subtitle">${t('onboarding.multipleSelect') || '여러 개 선택 가능합니다'}</p>
        
        <div class="service-select-grid">
          ${Object.keys(SERVICES).map(key => {
            const service = SERVICES[key];
            return `
              <label class="service-select-card" data-service="${key}">
                <input type="checkbox" name="service" value="${key}" />
                <div class="service-select-content">
                  <div class="service-select-icon">${service.icon}</div>
                  <h3>${t(service.titleKey)}</h3>
                  <p>${t(service.descKey)}</p>
                </div>
              </label>
            `;
          }).join('')}
        </div>
        
        <div class="step-actions">
          <button class="btn-secondary" onclick="window.OnboardingFlow.close()">
            ${t('btnCancel') || '취소'}
          </button>
          <button class="btn-primary" onclick="window.OnboardingFlow.nextStep()" id="nextBtn" disabled>
            ${t('btnNext') || '다음'}
          </button>
        </div>
      </div>
    `;

    showModal(html);
    
    // 체크박스 변경 이벤트
    const checkboxes = document.querySelectorAll('input[name="service"]');
    const nextBtn = document.getElementById('nextBtn');
    
    checkboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        selectedServices = Array.from(checkboxes)
          .filter(c => c.checked)
          .map(c => c.value);
        nextBtn.disabled = selectedServices.length === 0;
      });
    });
  }

  // 2단계: 사용자 정보 입력
  function renderStep2() {
    const html = `
      <div class="onboarding-step">
        <h2 class="step-title">${t('onboarding.enterInfo') || '신청자 정보를 입력하세요'}</h2>
        <p class="step-subtitle">${t('onboarding.infoDesc') || '서비스 신청을 위한 기본 정보입니다'}</p>
        
        <div class="form-group">
          <label class="form-label">
            <i class="fas fa-user"></i>
            ${t('onboarding.name') || '이름'}
          </label>
          <input type="text" class="form-input" id="userName" placeholder="${t('onboarding.namePlaceholder') || '홍길동'}" required />
        </div>
        
        <div class="form-group">
          <label class="form-label">
            <i class="fas fa-phone"></i>
            ${t('onboarding.phone') || '연락처'}
          </label>
          <input type="tel" class="form-input" id="userPhone" placeholder="${t('onboarding.phonePlaceholder') || '010-1234-5678'}" required />
        </div>
        
        <div class="form-group">
          <label class="form-label">
            <i class="fas fa-envelope"></i>
            ${t('onboarding.email') || '이메일'}
          </label>
          <input type="email" class="form-input" id="userEmail" placeholder="${t('onboarding.emailPlaceholder') || 'example@email.com'}" />
        </div>
        
        <div class="step-actions">
          <button class="btn-secondary" onclick="window.OnboardingFlow.prevStep()">
            ${t('btnPrev') || '이전'}
          </button>
          <button class="btn-primary" onclick="window.OnboardingFlow.submitApplication()" id="submitBtn" disabled>
            ${t('btnSubmit') || '신청하기'}
          </button>
        </div>
      </div>
    `;

    showModal(html);
    
    // 입력 필드 검증
    const nameInput = document.getElementById('userName');
    const phoneInput = document.getElementById('userPhone');
    const submitBtn = document.getElementById('submitBtn');
    
    function validateForm() {
      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();
      submitBtn.disabled = !name || !phone;
    }
    
    nameInput.addEventListener('input', validateForm);
    phoneInput.addEventListener('input', validateForm);
  }

  // 3단계: 신청 완료
  function renderStep3() {
    const serviceNames = selectedServices.map(key => t(SERVICES[key].titleKey)).join(', ');
    
    const html = `
      <div class="onboarding-step">
        <div class="success-icon">✅</div>
        <h2 class="step-title">${t('onboarding.applicationComplete') || '신청이 완료되었습니다!'}</h2>
        <p class="step-subtitle">${t('onboarding.completeDesc') || '담당자가 확인 후 연락드리겠습니다.'}</p>
        
        <div class="application-summary">
          <h3>${t('onboarding.applicationSummary') || '신청 내역'}</h3>
          <div class="summary-item">
            <strong>${t('onboarding.selectedServices') || '선택한 서비스'}:</strong>
            <span>${serviceNames}</span>
          </div>
          <div class="summary-item">
            <strong>${t('onboarding.name') || '이름'}:</strong>
            <span>${userData.name}</span>
          </div>
          <div class="summary-item">
            <strong>${t('onboarding.phone') || '연락처'}:</strong>
            <span>${userData.phone}</span>
          </div>
          ${userData.email ? `
            <div class="summary-item">
              <strong>${t('onboarding.email') || '이메일'}:</strong>
              <span>${userData.email}</span>
            </div>
          ` : ''}
        </div>
        
        <div class="step-actions">
          <button class="btn-primary btn-large" onclick="window.OnboardingFlow.close()">
            ${t('btnConfirm') || '확인'}
          </button>
        </div>
      </div>
    `;

    showModal(html);
    
    // 신청 데이터 저장 (실제로는 서버에 전송)
    saveApplication();
  }

  function showModal(content) {
    const modal = document.getElementById('commonModal');
    if (!modal) return;

    const modalBody = modal.querySelector('.modal-body');
    const modalProgress = modal.querySelector('.modal-progress');
    const modalActions = modal.querySelector('.modal-actions');
    
    if (modalBody) modalBody.innerHTML = content;
    if (modalProgress) modalProgress.textContent = `${currentStep + 1} / 3`;
    if (modalActions) modalActions.style.display = 'none';
    
    modal.classList.add('open');
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    const modal = document.getElementById('commonModal');
    if (modal) {
      modal.classList.remove('open');
      document.body.classList.remove('modal-open');
    }
  }

  function saveApplication() {
    const application = {
      services: selectedServices,
      user: userData,
      timestamp: new Date().toISOString(),
      language: window.i18n?.getCurrentLanguage?.() || 'ko'
    };
    
    // localStorage에 저장
    const applications = JSON.parse(localStorage.getItem('applications') || '[]');
    applications.push(application);
    localStorage.setItem('applications', JSON.stringify(applications));
    
    console.log('[Application Submitted]', application);
  }

  // 공개 API
  window.OnboardingFlow = {
    start() {
      if (running) return;
      running = true;
      currentStep = 0;
      selectedServices = [];
      userData = { name: '', phone: '', email: '' };
      renderStep1();
      setTimeout(() => (running = false), 300);
    },
    
    nextStep() {
      currentStep++;
      if (currentStep === 1) {
        renderStep2();
      }
    },
    
    prevStep() {
      currentStep--;
      if (currentStep === 0) {
        renderStep1();
      }
    },
    
    submitApplication() {
      const nameInput = document.getElementById('userName');
      const phoneInput = document.getElementById('userPhone');
      const emailInput = document.getElementById('userEmail');
      
      userData.name = nameInput.value.trim();
      userData.phone = phoneInput.value.trim();
      userData.email = emailInput.value.trim();
      
      currentStep++;
      renderStep3();
    },
    
    close() {
      closeModal();
      currentStep = 0;
      selectedServices = [];
      userData = { name: '', phone: '', email: '' };
      running = false;
    }
  };

  // 언어 변경 시 모달 닫기
  document.addEventListener('i18n:changed', () => {
    window.OnboardingFlow.close();
  });
})();
