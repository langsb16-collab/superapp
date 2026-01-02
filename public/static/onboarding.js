/**
 * K-Resident One - 온보딩 플로우
 * 5단계 온보딩 UX: 언어/국적/비자/목적 → 필요 서비스 선택 → 맞춤 대시보드 → 실행 CTA → 전문가 연결
 */

class OnboardingFlow {
  constructor() {
    this.currentStep = 0;
    this.userData = {
      language: window.currentLang || 'ko',
      nationality: '',
      visaType: '',
      purpose: '',
      needs: [],
      timestamp: null
    };
    
    this.steps = [
      'step1-basic-info',
      'step2-needs-selection',
      'step3-dashboard',
      'step4-cta',
      'step5-expert'
    ];
  }

  /**
   * 온보딩 시작
   */
  start() {
    this.showModal();
    this.renderStep1();
  }

  /**
   * 모달 표시
   */
  showModal() {
    const existingModal = document.getElementById('onboarding-modal');
    if (existingModal) {
      existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.id = 'onboarding-modal';
    modal.className = 'onboarding-modal';
    modal.innerHTML = `
      <div class="onboarding-backdrop"></div>
      <div class="onboarding-container">
        <button class="onboarding-close" onclick="window.onboarding.close()">&times;</button>
        <div class="onboarding-progress">
          <div class="progress-bar">
            <div class="progress-fill" style="width: 0%"></div>
          </div>
          <div class="progress-text">1 / 5</div>
        </div>
        <div id="onboarding-content" class="onboarding-content"></div>
      </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
  }

  /**
   * 모달 닫기
   */
  close() {
    const modal = document.getElementById('onboarding-modal');
    if (modal) {
      modal.classList.remove('active');
      setTimeout(() => modal.remove(), 300);
    }
  }

  /**
   * 진행률 업데이트
   */
  updateProgress(step) {
    const progress = ((step + 1) / 5) * 100;
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill) {
      progressFill.style.width = `${progress}%`;
    }
    if (progressText) {
      progressText.textContent = `${step + 1} / 5`;
    }
  }

  /**
   * 1단계: 기본 정보 입력
   */
  renderStep1() {
    this.currentStep = 0;
    this.updateProgress(0);
    
    const content = document.getElementById('onboarding-content');
    const t = window.translations[this.userData.language].onboarding.step1;
    
    content.innerHTML = `
      <div class="onboarding-step step1">
        <h2 class="step-title">${t.title}</h2>
        <p class="step-subtitle">${t.subtitle}</p>
        
        <div class="form-group">
          <label class="form-label">
            <i class="fas fa-language"></i> ${t.language}
          </label>
          <select id="select-language" class="form-select">
            <option value="ko" ${this.userData.language === 'ko' ? 'selected' : ''}>🇰🇷 한국어 (Korean)</option>
            <option value="en" ${this.userData.language === 'en' ? 'selected' : ''}>🇺🇸 English</option>
            <option value="zh-CN" ${this.userData.language === 'zh-CN' ? 'selected' : ''}>🇨🇳 简体中文 (Simplified Chinese)</option>
            <option value="zh-TW" ${this.userData.language === 'zh-TW' ? 'selected' : ''}>🇹🇼 繁體中文 (Traditional Chinese)</option>
            <option value="ja" ${this.userData.language === 'ja' ? 'selected' : ''}>🇯🇵 日本語 (Japanese)</option>
            <option value="vi" ${this.userData.language === 'vi' ? 'selected' : ''}>🇻🇳 Tiếng Việt (Vietnamese)</option>
            <option value="es" ${this.userData.language === 'es' ? 'selected' : ''}>🇪🇸 Español (Spanish)</option>
            <option value="de" ${this.userData.language === 'de' ? 'selected' : ''}>🇩🇪 Deutsch (German)</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">
            <i class="fas fa-globe"></i> ${t.nationality}
          </label>
          <select id="select-nationality" class="form-select">
            <option value="">${t.selectNationality}</option>
            <option value="VN">🇻🇳 Vietnam</option>
            <option value="CN">🇨🇳 China</option>
            <option value="TH">🇹🇭 Thailand</option>
            <option value="PH">🇵🇭 Philippines</option>
            <option value="ID">🇮🇩 Indonesia</option>
            <option value="NP">🇳🇵 Nepal</option>
            <option value="MM">🇲🇲 Myanmar</option>
            <option value="KH">🇰🇭 Cambodia</option>
            <option value="US">🇺🇸 USA</option>
            <option value="JP">🇯🇵 Japan</option>
            <option value="IN">🇮🇳 India</option>
            <option value="BD">🇧🇩 Bangladesh</option>
            <option value="other">${t.other}</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">
            <i class="fas fa-passport"></i> ${t.visaType}
          </label>
          <select id="select-visa" class="form-select">
            <option value="">${t.selectVisa}</option>
            <option value="E-9">E-9 (비전문취업 / Non-professional Employment)</option>
            <option value="E-7">E-7 (특정활동 / Specified Activities)</option>
            <option value="D-2">D-2 (유학 / Student)</option>
            <option value="F-6">F-6 (결혼이민 / Marriage Migrant)</option>
            <option value="F-5">F-5 (영주 / Permanent Resident)</option>
            <option value="E-1">E-1~E-6 (교수/회화지도/연구/기술지도/전문직)</option>
            <option value="H-2">H-2 (방문취업 / Working Visit)</option>
            <option value="D-10">D-10 (구직 / Job Seeker)</option>
            <option value="other">${t.other}</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">
            <i class="fas fa-briefcase"></i> ${t.purpose}
          </label>
          <div class="radio-group">
            <label class="radio-card">
              <input type="radio" name="purpose" value="work">
              <span class="radio-content">
                <i class="fas fa-hard-hat"></i>
                <span>${t.purposeWork}</span>
              </span>
            </label>
            <label class="radio-card">
              <input type="radio" name="purpose" value="study">
              <span class="radio-content">
                <i class="fas fa-graduation-cap"></i>
                <span>${t.purposeStudy}</span>
              </span>
            </label>
            <label class="radio-card">
              <input type="radio" name="purpose" value="business">
              <span class="radio-content">
                <i class="fas fa-building"></i>
                <span>${t.purposeBusiness}</span>
              </span>
            </label>
            <label class="radio-card">
              <input type="radio" name="purpose" value="marriage">
              <span class="radio-content">
                <i class="fas fa-heart"></i>
                <span>${t.purposeMarriage}</span>
              </span>
            </label>
            <label class="radio-card">
              <input type="radio" name="purpose" value="other">
              <span class="radio-content">
                <i class="fas fa-ellipsis-h"></i>
                <span>${t.purposeOther}</span>
              </span>
            </label>
          </div>
        </div>

        <button id="btn-step1-next" class="btn-primary btn-large" disabled>
          ${t.next} <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    `;

    // 이벤트 리스너
    this.attachStep1Listeners();
  }

  attachStep1Listeners() {
    const selectLang = document.getElementById('select-language');
    const selectNationality = document.getElementById('select-nationality');
    const selectVisa = document.getElementById('select-visa');
    const purposeRadios = document.querySelectorAll('input[name="purpose"]');
    const btnNext = document.getElementById('btn-step1-next');

    const validateStep1 = () => {
      const hasNationality = selectNationality.value !== '';
      const hasVisa = selectVisa.value !== '';
      const hasPurpose = Array.from(purposeRadios).some(r => r.checked);
      
      btnNext.disabled = !(hasNationality && hasVisa && hasPurpose);
    };

    selectLang.addEventListener('change', (e) => {
      this.userData.language = e.target.value;
      window.changeLang(e.target.value);
      this.renderStep1(); // 언어 변경 시 재렌더링
    });

    selectNationality.addEventListener('change', (e) => {
      this.userData.nationality = e.target.value;
      validateStep1();
    });

    selectVisa.addEventListener('change', (e) => {
      this.userData.visaType = e.target.value;
      validateStep1();
    });

    purposeRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        this.userData.purpose = e.target.value;
        validateStep1();
      });
    });

    btnNext.addEventListener('click', () => {
      this.renderStep2();
    });
  }

  /**
   * 2단계: 필요한 서비스 선택
   */
  renderStep2() {
    this.currentStep = 1;
    this.updateProgress(1);
    
    const content = document.getElementById('onboarding-content');
    const t = window.translations[this.userData.language].onboarding.step2;
    
    content.innerHTML = `
      <div class="onboarding-step step2">
        <h2 class="step-title">${t.title}</h2>
        <p class="step-subtitle">${t.subtitle}</p>
        
        <div class="needs-grid">
          <label class="need-card" data-need="tax">
            <input type="checkbox" name="needs" value="tax">
            <div class="need-content">
              <div class="need-icon">🧾</div>
              <h3 class="need-title">${t.tax.title}</h3>
              <p class="need-desc">${t.tax.desc}</p>
              <ul class="need-features">
                <li>${t.tax.feature1}</li>
                <li>${t.tax.feature2}</li>
              </ul>
            </div>
          </label>

          <label class="need-card" data-need="visa">
            <input type="checkbox" name="needs" value="visa">
            <div class="need-content">
              <div class="need-icon">🛂</div>
              <h3 class="need-title">${t.visa.title}</h3>
              <p class="need-desc">${t.visa.desc}</p>
              <ul class="need-features">
                <li>${t.visa.feature1}</li>
                <li>${t.visa.feature2}</li>
              </ul>
            </div>
          </label>

          <label class="need-card" data-need="medical">
            <input type="checkbox" name="needs" value="medical">
            <div class="need-content">
              <div class="need-icon">🏥</div>
              <h3 class="need-title">${t.medical.title}</h3>
              <p class="need-desc">${t.medical.desc}</p>
              <ul class="need-features">
                <li>${t.medical.feature1}</li>
                <li>${t.medical.feature2}</li>
              </ul>
            </div>
          </label>

          <label class="need-card" data-need="labor">
            <input type="checkbox" name="needs" value="labor">
            <div class="need-content">
              <div class="need-icon">⚖️</div>
              <h3 class="need-title">${t.labor.title}</h3>
              <p class="need-desc">${t.labor.desc}</p>
              <ul class="need-features">
                <li>${t.labor.feature1}</li>
                <li>${t.labor.feature2}</li>
              </ul>
            </div>
          </label>
        </div>

        <div class="step-actions">
          <button id="btn-step2-back" class="btn-secondary">
            <i class="fas fa-arrow-left"></i> ${t.back}
          </button>
          <button id="btn-step2-next" class="btn-primary" disabled>
            ${t.next} <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;

    this.attachStep2Listeners();
  }

  attachStep2Listeners() {
    const needsCheckboxes = document.querySelectorAll('input[name="needs"]');
    const btnNext = document.getElementById('btn-step2-next');
    const btnBack = document.getElementById('btn-step2-back');

    const validateStep2 = () => {
      const checkedNeeds = Array.from(needsCheckboxes).filter(cb => cb.checked);
      btnNext.disabled = checkedNeeds.length === 0;
      this.userData.needs = checkedNeeds.map(cb => cb.value);
    };

    needsCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', validateStep2);
    });

    btnNext.addEventListener('click', () => {
      this.userData.timestamp = new Date().toISOString();
      this.renderStep3();
    });

    btnBack.addEventListener('click', () => {
      this.renderStep1();
    });
  }

  /**
   * 3단계: 맞춤 대시보드
   */
  renderStep3() {
    this.currentStep = 2;
    this.updateProgress(2);
    
    const content = document.getElementById('onboarding-content');
    const t = window.translations[this.userData.language].onboarding.step3;
    
    // AI 분석 결과 생성
    const analysis = this.generateAnalysis();
    
    content.innerHTML = `
      <div class="onboarding-step step3">
        <h2 class="step-title">${t.title.replace('{name}', this.getUserDisplayName())}</h2>
        <p class="step-subtitle">${t.subtitle}</p>
        
        <div class="dashboard-cards">
          ${analysis.map(item => `
            <div class="dashboard-card ${item.priority}">
              <div class="card-header">
                <div class="card-icon">${item.icon}</div>
                <h3 class="card-title">${item.title}</h3>
              </div>
              <div class="card-body">
                <div class="card-status ${item.statusClass}">
                  <i class="fas ${item.statusIcon}"></i>
                  <span>${item.status}</span>
                </div>
                <p class="card-description">${item.description}</p>
                ${item.details ? `
                  <ul class="card-details">
                    ${item.details.map(d => `<li>${d}</li>`).join('')}
                  </ul>
                ` : ''}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="step-actions">
          <button id="btn-step3-back" class="btn-secondary">
            <i class="fas fa-arrow-left"></i> ${t.back}
          </button>
          <button id="btn-step3-next" class="btn-primary">
            ${t.next} <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;

    document.getElementById('btn-step3-back').addEventListener('click', () => {
      this.renderStep2();
    });

    document.getElementById('btn-step3-next').addEventListener('click', () => {
      this.renderStep4();
    });
  }

  /**
   * 4단계: 즉시 실행 CTA
   */
  renderStep4() {
    this.currentStep = 3;
    this.updateProgress(3);
    
    const content = document.getElementById('onboarding-content');
    const t = window.translations[this.userData.language].onboarding.step4;
    
    const ctas = this.generateCTAs();
    
    content.innerHTML = `
      <div class="onboarding-step step4">
        <h2 class="step-title">${t.title}</h2>
        <p class="step-subtitle">${t.subtitle}</p>
        
        <div class="cta-grid">
          ${ctas.map(cta => `
            <button class="cta-card" data-action="${cta.action}">
              <div class="cta-icon">${cta.icon}</div>
              <h3 class="cta-title">${cta.title}</h3>
              <p class="cta-desc">${cta.description}</p>
              <span class="cta-arrow">→</span>
            </button>
          `).join('')}
        </div>

        <div class="step-actions">
          <button id="btn-step4-back" class="btn-secondary">
            <i class="fas fa-arrow-left"></i> ${t.back}
          </button>
          <button id="btn-step4-skip" class="btn-text">
            ${t.skip} <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;

    // CTA 버튼 이벤트
    document.querySelectorAll('.cta-card').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const action = e.currentTarget.dataset.action;
        this.handleCTAAction(action);
      });
    });

    document.getElementById('btn-step4-back').addEventListener('click', () => {
      this.renderStep3();
    });

    document.getElementById('btn-step4-skip').addEventListener('click', () => {
      this.renderStep5();
    });
  }

  /**
   * 5단계: AI 안내 및 전문가 연결
   */
  renderStep5() {
    this.currentStep = 4;
    this.updateProgress(4);
    
    const content = document.getElementById('onboarding-content');
    const t = window.translations[this.userData.language].onboarding.step5;
    
    const aiMessage = this.generateAIMessage();
    
    content.innerHTML = `
      <div class="onboarding-step step5">
        <h2 class="step-title">${t.title}</h2>
        
        <div class="ai-message-card">
          <div class="ai-avatar">
            <i class="fas fa-robot"></i>
          </div>
          <div class="ai-message">
            <p>${aiMessage}</p>
          </div>
        </div>

        <div class="expert-options">
          <h3 class="expert-title">${t.expertTitle}</h3>
          <div class="expert-grid">
            <button class="expert-card" data-expert="tax">
              <i class="fas fa-calculator"></i>
              <span>${t.expertTax}</span>
            </button>
            <button class="expert-card" data-expert="visa">
              <i class="fas fa-passport"></i>
              <span>${t.expertVisa}</span>
            </button>
            <button class="expert-card" data-expert="labor">
              <i class="fas fa-gavel"></i>
              <span>${t.expertLabor}</span>
            </button>
            <button class="expert-card" data-expert="medical">
              <i class="fas fa-user-md"></i>
              <span>${t.expertMedical}</span>
            </button>
          </div>
        </div>

        <div class="step-actions">
          <button id="btn-step5-later" class="btn-secondary">
            ${t.later}
          </button>
          <button id="btn-step5-finish" class="btn-primary">
            ${t.finish} <i class="fas fa-check"></i>
          </button>
        </div>
      </div>
    `;

    // 전문가 카드 이벤트
    document.querySelectorAll('.expert-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const expert = e.currentTarget.dataset.expert;
        this.connectExpert(expert);
      });
    });

    document.getElementById('btn-step5-later').addEventListener('click', () => {
      this.finish(false);
    });

    document.getElementById('btn-step5-finish').addEventListener('click', () => {
      this.finish(true);
    });
  }

  /**
   * 헬퍼 함수들
   */
  getUserDisplayName() {
    const nationalityMap = {
      'VN': 'Việt Nam', 'CN': '中国', 'TH': 'ไทย', 'PH': 'Philippines',
      'ID': 'Indonesia', 'NP': 'नेपाल', 'MM': 'Myanmar', 'KH': 'កម្ពុជា',
      'US': 'USA', 'JP': '日本', 'IN': 'भारत', 'BD': 'বাংলাদেশ'
    };
    return nationalityMap[this.userData.nationality] || this.userData.nationality;
  }

  generateAnalysis() {
    const t = window.translations[this.userData.language].onboarding.step3;
    const analysis = [];

    // 비자 분석
    if (this.userData.needs.includes('visa')) {
      analysis.push({
        icon: '🛂',
        title: t.visa.title,
        status: t.visa.status,
        statusClass: 'status-warning',
        statusIcon: 'fa-exclamation-triangle',
        description: t.visa.description,
        details: t.visa.details,
        priority: 'high'
      });
    }

    // 세무 분석
    if (this.userData.needs.includes('tax')) {
      analysis.push({
        icon: '🧾',
        title: t.tax.title,
        status: t.tax.status,
        statusClass: 'status-success',
        statusIcon: 'fa-check-circle',
        description: t.tax.description,
        details: t.tax.details,
        priority: 'medium'
      });
    }

    // 노동 분석
    if (this.userData.needs.includes('labor')) {
      analysis.push({
        icon: '⚖️',
        title: t.labor.title,
        status: t.labor.status,
        statusClass: 'status-info',
        statusIcon: 'fa-info-circle',
        description: t.labor.description,
        details: t.labor.details,
        priority: 'medium'
      });
    }

    // 의료 분석
    if (this.userData.needs.includes('medical')) {
      analysis.push({
        icon: '🏥',
        title: t.medical.title,
        status: t.medical.status,
        statusClass: 'status-info',
        statusIcon: 'fa-info-circle',
        description: t.medical.description,
        details: t.medical.details,
        priority: 'low'
      });
    }

    return analysis;
  }

  generateCTAs() {
    const t = window.translations[this.userData.language].onboarding.step4;
    const ctas = [];

    if (this.userData.needs.includes('tax')) {
      ctas.push({
        icon: '💰',
        title: t.tax.title,
        description: t.tax.description,
        action: 'tax-calculator'
      });
    }

    if (this.userData.needs.includes('visa')) {
      ctas.push({
        icon: '📋',
        title: t.visa.title,
        description: t.visa.description,
        action: 'visa-extension'
      });
    }

    if (this.userData.needs.includes('medical')) {
      ctas.push({
        icon: '🏥',
        title: t.medical.title,
        description: t.medical.description,
        action: 'hospital-search'
      });
    }

    if (this.userData.needs.includes('labor')) {
      ctas.push({
        icon: '📄',
        title: t.labor.title,
        description: t.labor.description,
        action: 'contract-review'
      });
    }

    return ctas;
  }

  generateAIMessage() {
    const t = window.translations[this.userData.language].onboarding.step5;
    const needs = this.userData.needs;
    
    if (needs.includes('visa') && needs.includes('tax')) {
      return t.aiMessage.visaTax;
    } else if (needs.includes('visa')) {
      return t.aiMessage.visa;
    } else if (needs.includes('tax')) {
      return t.aiMessage.tax;
    } else if (needs.includes('labor')) {
      return t.aiMessage.labor;
    } else {
      return t.aiMessage.general;
    }
  }

  handleCTAAction(action) {
    console.log('CTA Action:', action, this.userData);
    
    // 실제 서비스로 이동 (향후 구현)
    const routes = {
      'tax-calculator': '/tax',
      'visa-extension': '/visa',
      'hospital-search': '/medical',
      'contract-review': '/labor'
    };

    alert(`${action} 서비스로 이동합니다. (향후 구현)`);
    // window.location.href = routes[action];
  }

  connectExpert(expertType) {
    console.log('Connect Expert:', expertType, this.userData);
    alert(`${expertType} 전문가 연결 서비스는 곧 출시됩니다.`);
  }

  finish(withExpert) {
    // 데이터 저장 (localStorage)
    try {
      localStorage.setItem('k-resident-onboarding', JSON.stringify(this.userData));
      localStorage.setItem('k-resident-onboarding-completed', 'true');
    } catch (e) {
      console.error('Failed to save onboarding data:', e);
    }

    // 완료 메시지
    const t = window.translations[this.userData.language].onboarding.step5;
    alert(withExpert ? t.finishWithExpert : t.finishMessage);

    // 모달 닫기
    this.close();

    // 페이지 새로고침 (선택사항)
    // window.location.reload();
  }
}

// 전역 인스턴스
window.onboarding = new OnboardingFlow();

// 시작하기 버튼 이벤트
document.addEventListener('DOMContentLoaded', () => {
  const btnStart = document.getElementById('btn-start');
  if (btnStart) {
    btnStart.addEventListener('click', (e) => {
      e.preventDefault();
      window.onboarding.start();
    });
  }
});
