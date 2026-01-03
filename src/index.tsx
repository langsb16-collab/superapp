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
            <div className="language-dropdown-compact">
              <button id="language-trigger" className="language-trigger-compact">
                <i className="fas fa-globe"></i>
                <span id="current-lang-text">한국어</span>
                <i className="fas fa-chevron-down"></i>
              </button>
              <div id="language-menu" className="language-menu-compact hidden">
                <button className="language-option active" data-lang="ko">
                  <span className="lang-flag">🇰🇷</span>
                  <span className="lang-name">한국어</span>
                  <span className="lang-check">✓</span>
                </button>
                <button className="language-option" data-lang="en">
                  <span className="lang-flag">🇺🇸</span>
                  <span className="lang-name">English</span>
                  <span className="lang-check">✓</span>
                </button>
                <button className="language-option" data-lang="zh-CN">
                  <span className="lang-flag">🇨🇳</span>
                  <span className="lang-name">中文(简)</span>
                  <span className="lang-check">✓</span>
                </button>
                <button className="language-option" data-lang="zh-TW">
                  <span className="lang-flag">🇹🇼</span>
                  <span className="lang-name">中文(繁)</span>
                  <span className="lang-check">✓</span>
                </button>
                <button className="language-option" data-lang="ja">
                  <span className="lang-flag">🇯🇵</span>
                  <span className="lang-name">日本語</span>
                  <span className="lang-check">✓</span>
                </button>
                <button className="language-option" data-lang="vi">
                  <span className="lang-flag">🇻🇳</span>
                  <span className="lang-name">Tiếng Việt</span>
                  <span className="lang-check">✓</span>
                </button>
                <button className="language-option" data-lang="es">
                  <span className="lang-flag">🇪🇸</span>
                  <span className="lang-name">Español</span>
                  <span className="lang-check">✓</span>
                </button>
                <button className="language-option" data-lang="de">
                  <span className="lang-flag">🇩🇪</span>
                  <span className="lang-name">Deutsch</span>
                  <span className="lang-check">✓</span>
                </button>
              </div>
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
          <button id="btn-start" className="btn-primary" data-i18n="btnStart">시작하기</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2 data-i18n="serviceSectionTitle"></h2>
        <div className="services-grid">
          {/* Tax Service */}
          <div className="service-card" id="tax" data-service="tax">
            <div className="service-icon">
              <i className="fas fa-calculator"></i>
            </div>
            
            {/* Simple Version (Default) */}
            <div className="service-simple">
              <h3 data-i18n="taxTitle">세무 & 환급</h3>
              <p data-i18n="taxDesc">연말정산, 종합소득세 신고 및 환급</p>
              <ul className="service-features">
                <li data-i18n="taxFeature1">환급 예상액 자동 계산</li>
                <li data-i18n="taxFeature2">다국어 세무사 매칭</li>
                <li data-i18n="taxFeature3">성공 수수료 기반</li>
              </ul>
              <button className="btn-secondary btn-show-detail" data-i18n="btnLearnMore">자세히 보기</button>
            </div>
            
            {/* Detailed Version (On Menu Click) */}
            <div className="service-detailed" style="display: none;">
              <h3 className="service-headline" data-i18n="taxHeadline">외국인 세금 신고와 환급을 가장 쉽게</h3>
              <p className="service-summary" data-i18n="taxSummary">한국 거주 외국인을 위한 연말정산·종합소득세 신고와 환급을 AI 자동 계산과 다국어 안내로 간편하게 처리합니다.</p>
              
              <div className="service-features-grid">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="taxCheck1">환급 가능 여부 자동 판별</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="taxCheck2">예상 환급액 실시간 계산</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="taxCheck3">외국인 맞춤 세금 신고 가이드</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="taxCheck4">다국어 세무사 매칭</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="taxCheck5">성공 수수료 기반 (환급 성공 시만 비용 발생)</span>
                </div>
              </div>

              <div className="trust-point">
                <p data-i18n="taxTrust">외국인 세금 체납·미신고 문제를 사전 안내로 예방하고, 언어·제도 이해 부족으로 인한 불이익을 최소화합니다.</p>
              </div>

              <div className="cta-buttons">
                <button className="btn-cta-primary" data-i18n="taxCTA1">환급액 지금 확인하기</button>
                <button className="btn-cta-secondary" data-i18n="taxCTA2">세금 신고 시작하기</button>
              </div>
            </div>
          </div>

          {/* Visa Service */}
          <div className="service-card" id="visa" data-service="visa">
            <div className="service-icon">
              <i className="fas fa-passport"></i>
            </div>
            
            <div className="service-simple">
              <h3 data-i18n="visaTitle">비자 & 체류관리</h3>
              <p data-i18n="visaDesc">체류 상태 관리 및 비자 연장</p>
              <ul className="service-features">
                <li data-i18n="visaFeature1">체류 만료 자동 알림</li>
                <li data-i18n="visaFeature2">서류 자동 작성</li>
                <li data-i18n="visaFeature3">출입국 가이드</li>
              </ul>
              <button className="btn-secondary btn-show-detail" data-i18n="btnLearnMore">자세히 보기</button>
            </div>
            
            <div className="service-detailed" style="display: none;">
              <h3 className="service-headline" data-i18n="visaHeadline">비자 만료·체류 리스크를 미리 관리하세요</h3>
              <p className="service-summary" data-i18n="visaSummary">비자 유형별 요건과 체류 기간을 자동으로 관리하고, 연장·변경에 필요한 절차를 단계별로 안내합니다.</p>
              
              <div className="service-features-grid">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="visaCheck1">비자 만료 D-90 / 60 / 30 자동 알림</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="visaCheck2">비자 유형별 필요 서류 체크리스트</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="visaCheck3">연장·변경 가능 여부 자동 점검</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="visaCheck4">신청서/사유서 자동 작성</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="visaCheck5">출입국 관리소 방문 가이드</span>
                </div>
              </div>

              <div className="trust-point">
                <p data-i18n="visaTrust">체류 문제로 인한 불법 체류·벌금 리스크를 예방하고, 세무·노동 이력과 연계한 통합 체류 관리를 제공합니다.</p>
              </div>

              <div className="cta-buttons">
                <button className="btn-cta-primary" data-i18n="visaCTA1">내 비자 상태 점검</button>
                <button className="btn-cta-secondary" data-i18n="visaCTA2">연장 준비 시작하기</button>
              </div>
            </div>
          </div>

          {/* Medical Service */}
          <div className="service-card" id="medical" data-service="medical">
            <div className="service-icon">
              <i className="fas fa-hospital"></i>
            </div>
            
            <div className="service-simple">
              <h3 data-i18n="medicalTitle">의료 지원</h3>
              <p data-i18n="medicalDesc">외국인 친화 병원 검색 및 통역</p>
              <ul className="service-features">
                <li data-i18n="medicalFeature1">다국어 병원 검색</li>
                <li data-i18n="medicalFeature2">AI 증상 문진</li>
                <li data-i18n="medicalFeature3">통역/동행 서비스</li>
              </ul>
              <button className="btn-secondary btn-show-detail" data-i18n="btnLearnMore">자세히 보기</button>
            </div>
            
            <div className="service-detailed" style="display: none;">
              <h3 className="service-headline" data-i18n="medicalHeadline">언어 걱정 없이 병원을 이용하세요</h3>
              <p className="service-summary" data-i18n="medicalSummary">외국인 친화 병원 검색부터 증상 설명, 통역·동행까지 의료 이용 전 과정을 지원합니다.</p>
              
              <div className="service-features-grid">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="medicalCheck1">외국인 진료 가능 병원 검색</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="medicalCheck2">언어별 병원 필터 (영어·중국어·베트남어 등)</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="medicalCheck3">AI 증상 문진 및 진료 요약</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="medicalCheck4">통역/동행 서비스 연결</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="medicalCheck5">진료 기록 저장</span>
                </div>
              </div>

              <div className="trust-point">
                <p data-i18n="medicalTrust">의료 오해·과잉 진료를 방지하고, 응급 상황에서도 의사소통 문제를 최소화합니다.</p>
              </div>

              <div className="cta-buttons">
                <button className="btn-cta-primary" data-i18n="medicalCTA1">병원 찾기</button>
                <button className="btn-cta-secondary" data-i18n="medicalCTA2">AI 증상 문진 시작</button>
              </div>
            </div>
          </div>

          {/* Labor Service */}
          <div className="service-card" id="labor" data-service="labor">
            <div className="service-icon">
              <i className="fas fa-gavel"></i>
            </div>
            
            <div className="service-simple">
              <h3 data-i18n="laborTitle">노동 & 권리보호</h3>
              <p data-i18n="laborDesc">근로계약 검토 및 권리 보호</p>
              <ul className="service-features">
                <li data-i18n="laborFeature1">계약서 자동 분석</li>
                <li data-i18n="laborFeature2">임금 계산기</li>
                <li data-i18n="laborFeature3">산재·체불 신고 지원</li>
              </ul>
              <button className="btn-secondary btn-show-detail" data-i18n="btnLearnMore">자세히 보기</button>
            </div>
            
            <div className="service-detailed" style="display: none;">
              <h3 className="service-headline" data-i18n="laborHeadline">근로 계약과 권리를 정확히 보호하세요</h3>
              <p className="service-summary" data-i18n="laborSummary">근로계약·임금·산재·체불 문제를 외국인 기준으로 쉽게 확인하고 대응할 수 있습니다.</p>
              
              <div className="service-features-grid">
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="laborCheck1">근로계약서 자동 분석 (불리한 조항 표시)</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="laborCheck2">임금·연장근로·야간수당 계산</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="laborCheck3">임금 체불·산재 대응 가이드</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="laborCheck4">신고 서류 초안 자동 작성</span>
                </div>
                <div className="feature-item">
                  <i className="fas fa-check-circle"></i>
                  <span data-i18n="laborCheck5">노무사·전문가 연결</span>
                </div>
              </div>

              <div className="trust-point">
                <p data-i18n="laborTrust">외국인 노동자의 권리 보호를 강화하고, 분쟁 발생 전·후 증거와 절차를 체계적으로 관리합니다.</p>
              </div>

              <div className="cta-buttons">
                <button className="btn-cta-primary" data-i18n="laborCTA1">계약서 업로드 & 분석</button>
                <button className="btn-cta-secondary" data-i18n="laborCTA2">임금 계산하기</button>
              </div>
            </div>
          </div>
        </div>

        {/* Common Bottom Message */}
        <div className="service-message">
          <p data-i18n="serviceMessage">K-Resident One은 외국인의 불편을 줄여 자발적 납세와 합법적 체류, 안정적인 근로를 돕는 한국 생활 통합 플랫폼입니다.</p>
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
