import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>K-Resident One - 외국인 전용 슈퍼앱</title>
        <meta name="description" content="외국인을 위한 세무·비자·의료·노동 통합 플랫폼" />
        
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Custom CSS */}
        <link href="/static/style.css?v=2" rel="stylesheet" />
      </head>
      <body>
        {children}
        
        {/* Common Modal HTML */}
        <div id="commonModal" class="modal">
          <div class="modal-content">
            <div class="modal-top">
              <div class="modal-progress">1 / 1</div>
              <button class="modal-close" aria-label="Close">&times;</button>
            </div>
            <div class="modal-body"></div>
            <div class="modal-actions">
              <button class="modal-next">다음</button>
            </div>
          </div>
        </div>
        
        {/* JavaScript - PC 4단 레이아웃 v=9 */}
        <script src="/static/i18n.js?v=9"></script>
        <script src="/static/modal.js?v=9"></script>
        <script src="/static/sections.js?v=9"></script>
        <script src="/static/chatbot-qa.js?v=9"></script>
        <script src="/static/onboarding.js?v=9"></script>
        <script src="/static/main.js?v=9"></script>
      </body>
    </html>
  )
})
