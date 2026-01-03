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
        
        {/* JavaScript - 캐시 무효화를 위한 버전 파라미터 */}
        <script src="/static/i18n.js?v=3"></script>
        <script src="/static/language-dropdown.js?v=3"></script>
        <script src="/static/chatbot-qa.js?v=3"></script>
        <script src="/static/onboarding.js?v=3"></script>
        <script src="/static/app.js?v=3"></script>
      </body>
    </html>
  )
})
