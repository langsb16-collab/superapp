/* ======================================================
   onboarding.js – NEW (Language-agnostic, i18n-driven)
   Requirements:
   - window.i18n.t(key) available (from i18n.js)
   - showModal(message, options) / closeModal() available
     (or 아래 기본 모달 구현을 같이 사용)
   ====================================================== */

(() => {
  // 중복 실행 방지(Lock)
  let running = false;

  // 현재 흐름 상태
  let serviceKey = null;
  let stepIndex = 0;

  // ✅ 언어와 무관한 "키"로만 구성 (translations.json에서 각 언어로 매핑)
  const STEPS = {
    start: [
      'onboarding.start.1',
      'onboarding.start.2'
    ],
    tax: [
      'onboarding.tax.1',
      'onboarding.tax.2'
    ],
    visa: [
      'onboarding.visa.1'
    ],
    medical: [
      'onboarding.medical.1'
    ],
    labor: [
      'onboarding.labor.1'
    ]
  };

  // 안전한 번역 접근
  function t(key) {
    if (!window.i18n || typeof window.i18n.t !== 'function') {
      console.warn('[onboarding] window.i18n.t not ready');
      return `[${key}]`;
    }
    return window.i18n.t(key);
  }

  function getSteps(key) {
    return STEPS[key] || STEPS.start;
  }

  function render() {
    const list = getSteps(serviceKey);
    const key = list[stepIndex];

    // step이 끝났으면 종료
    if (!key) {
      window.closeModal?.();
      reset();
      return;
    }

    // 모달 UI로 표시 (alert 금지)
    window.showModal?.(t(key), {
      step: stepIndex + 1,
      total: list.length,
      onNext: next,
      onClose: () => {
        window.closeModal?.();
        reset();
      }
    });
  }

  function start(key = 'start') {
    if (running) return;

    running = true;
    serviceKey = key;
    stepIndex = 0;

    try {
      render();
    } finally {
      // 연타 방지 최소 해제 지연
      setTimeout(() => (running = false), 250);
    }
  }

  function next() {
    stepIndex += 1;
    render();
  }

  function reset() {
    serviceKey = null;
    stepIndex = 0;
    running = false;
  }

  // 언어가 바뀌면 열려있는 온보딩/모달은 정리 (권장)
  document.addEventListener('i18n:changed', () => {
    window.closeModal?.();
    reset();
  });

  // 전역 노출
  window.OnboardingFlow = { start, next, reset };
})();
