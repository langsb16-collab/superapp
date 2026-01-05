/* ======================================================
   modal.js – Common Modal System
   Requirements:
   - HTML: #commonModal element must exist
   - CSS: .modal, .modal.open classes must be defined
   ====================================================== */

(() => {
  // DOM이 준비될 때까지 대기
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const modal = document.getElementById('commonModal');

    if (!modal) {
      console.warn('[modal] #commonModal not found in HTML');
      return;
    }

    const body = modal.querySelector('.modal-body');
    const progress = modal.querySelector('.modal-progress');
    const nextBtn = modal.querySelector('.modal-next');
    const closeBtn = modal.querySelector('.modal-close');

    window.showModal = (message, opts = {}) => {
      if (!body) return;

      body.textContent = message;

      if (progress) {
        const step = opts.step || 1;
        const total = opts.total || 1;
        progress.textContent = `${step} / ${total}`;
      }

      // 핸들러 연결
      if (nextBtn) {
        nextBtn.onclick = () => opts.onNext?.();
      }
      if (closeBtn) {
        closeBtn.onclick = () => {
          if (opts.onClose) {
            opts.onClose();
          } else {
            window.closeModal();
          }
        };
      }

      modal.classList.add('open');
      document.body.classList.add('modal-open');
    };

    window.closeModal = () => {
      modal.classList.remove('open');
      document.body.classList.remove('modal-open');
    };

    // ESC 키로 모달 닫기
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        window.closeModal?.();
      }
    });

    console.log('[modal] Initialized successfully');
  }
})();
