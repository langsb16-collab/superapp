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
        <link href="/static/style.css" rel="stylesheet" />
      </head>
      <body>
        {children}
        
        {/* JavaScript */}
        <script src="/static/i18n.js"></script>
        <script src="/static/language-dropdown.js"></script>
        <script src="/static/chatbot-qa.js"></script>
        <script src="/static/onboarding.js"></script>
      </body>
    </html>
  )
})
