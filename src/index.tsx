import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Static files
app.use('/static/*', serveStatic({ root: './public' }))

// Main page
app.get('/', (c) => {
  return c.render(
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <i className="fas fa-globe-asia"></i>
            <span data-i18n="appTitle">K-Resident One</span>
          </div>
          <nav className="nav-menu">
            <a href="#tax" className="nav-link" data-i18n="menuTax">세무/환급</a>
            <a href="#visa" className="nav-link" data-i18n="menuVisa">비자/체류</a>
            <a href="#medical" className="nav-link" data-i18n="menuMedical">의료</a>
            <a href="#labor" className="nav-link" data-i18n="menuLabor">노동/권리</a>
            <div className="language-selector">
              <button className="lang-btn active" data-lang="ko" title="한국어" onclick="window.changeLang('ko')">🇰🇷</button>
              <button className="lang-btn" data-lang="en" title="English" onclick="window.changeLang('en')">🇺🇸</button>
              <button className="lang-btn" data-lang="zh-CN" title="中文(简)" onclick="window.changeLang('zh-CN')">🇨🇳</button>
              <button className="lang-btn" data-lang="zh-TW" title="中文(繁)" onclick="window.changeLang('zh-TW')">🇹🇼</button>
              <button className="lang-btn" data-lang="ja" title="日本語" onclick="window.changeLang('ja')">🇯🇵</button>
              <button className="lang-btn" data-lang="vi" title="Tiếng Việt" onclick="window.changeLang('vi')">🇻🇳</button>
              <button className="lang-btn" data-lang="es" title="Español" onclick="window.changeLang('es')">🇪🇸</button>
              <button className="lang-btn" data-lang="de" title="Deutsch" onclick="window.changeLang('de')">🇩🇪</button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 data-i18n="appTitle">K-Resident One</h1>
          <p data-i18n="appSubtitle">한국 생활의 모든 것을 하나로</p>
          <p data-i18n="description">외국인을 위한 세무·비자·의료·노동 통합 플랫폼</p>
          <button className="btn-primary" data-i18n="btnGetStarted" onclick="document.getElementById('chatbotIcon').click()">시작하기</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>4대 핵심 서비스</h2>
        <div className="services-grid">
          {/* Tax Service */}
          <div className="service-card" id="tax">
            <div className="service-icon">
              <i className="fas fa-calculator"></i>
            </div>
            <h3 data-i18n="taxTitle">세무 & 환급</h3>
            <p data-i18n="taxDesc">연말정산, 종합소득세 신고 및 환급</p>
            <ul className="service-features">
              <li data-i18n="taxFeature1">환급 예상액 자동 계산</li>
              <li data-i18n="taxFeature2">다국어 세무사 매칭</li>
              <li data-i18n="taxFeature3">성공 수수료 기반</li>
            </ul>
            <button className="btn-secondary" data-i18n="btnLearnMore">자세히 보기</button>
          </div>

          {/* Visa Service */}
          <div className="service-card" id="visa">
            <div className="service-icon">
              <i className="fas fa-passport"></i>
            </div>
            <h3 data-i18n="visaTitle">비자 & 체류관리</h3>
            <p data-i18n="visaDesc">체류 상태 관리 및 비자 연장</p>
            <ul className="service-features">
              <li data-i18n="visaFeature1">체류 만료 자동 알림</li>
              <li data-i18n="visaFeature2">서류 자동 작성</li>
              <li data-i18n="visaFeature3">출입국 가이드</li>
            </ul>
            <button className="btn-secondary" data-i18n="btnLearnMore">자세히 보기</button>
          </div>

          {/* Medical Service */}
          <div className="service-card" id="medical">
            <div className="service-icon">
              <i className="fas fa-hospital"></i>
            </div>
            <h3 data-i18n="medicalTitle">의료 지원</h3>
            <p data-i18n="medicalDesc">외국인 친화 병원 검색 및 통역</p>
            <ul className="service-features">
              <li data-i18n="medicalFeature1">다국어 병원 검색</li>
              <li data-i18n="medicalFeature2">AI 증상 문진</li>
              <li data-i18n="medicalFeature3">통역/동행 서비스</li>
            </ul>
            <button className="btn-secondary" data-i18n="btnLearnMore">자세히 보기</button>
          </div>

          {/* Labor Service */}
          <div className="service-card" id="labor">
            <div className="service-icon">
              <i className="fas fa-gavel"></i>
            </div>
            <h3 data-i18n="laborTitle">노동 & 권리보호</h3>
            <p data-i18n="laborDesc">근로계약 검토 및 권리 보호</p>
            <ul className="service-features">
              <li data-i18n="laborFeature1">계약서 자동 분석</li>
              <li data-i18n="laborFeature2">임금 계산기</li>
              <li data-i18n="laborFeature3">산재·체불 신고 지원</li>
            </ul>
            <button className="btn-secondary" data-i18n="btnLearnMore">자세히 보기</button>
          </div>
        </div>
      </section>

      {/* Chatbot Icon */}
      <div id="chatbotIcon" className="chatbot-icon" onclick="document.getElementById('chatbotWindow').classList.toggle('hidden')">
        <i className="fas fa-comments"></i>
        <div className="pulse-ring"></div>
      </div>

      {/* Chatbot Window */}
      <div id="chatbotWindow" className="chatbot-window hidden">
        <div className="chatbot-header">
          <div className="chatbot-header-left">
            <div className="bot-avatar-small">
              <i className="fas fa-robot"></i>
            </div>
            <div>
              <h3 data-i18n="chatbotTitle">K-Resident 케어봇</h3>
              <span className="status-online">
                <i className="fas fa-circle"></i>
                <span data-i18n="chatbotOnline">온라인</span>
              </span>
            </div>
          </div>
          <button className="btn-close" onclick="document.getElementById('chatbotWindow').classList.add('hidden')">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="chatbot-content" id="chatbotQuestions">
          {/* FAQ items will be dynamically generated here */}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 K-Resident One. All rights reserved.</p>
          <p>외국인을 위한 세무·비자·의료·노동 통합 플랫폼</p>
        </div>
      </footer>
    </div>
  )
})

export default app
