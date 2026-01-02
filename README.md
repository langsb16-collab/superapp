# K-Resident One

**외국인을 위한 세무·비자·의료·노동 통합 슈퍼앱**

## 📌 프로젝트 개요

K-Resident One은 한국에 거주하는 외국인들이 겪는 모든 행정·생활·권리 문제를 하나의 플랫폼에서 해결할 수 있도록 설계된 통합 웹 애플리케이션입니다.

### 핵심 특징
- **8개 국어 지원**: 한국어, 영어, 중국어(간체), 중국어(번체), 일본어, 베트남어, 스페인어, 독일어
- **4대 핵심 서비스**: 세무/환급, 비자/체류, 의료, 노동/권리
- **다국어 AI 챗봇**: FAQ 리스트 방식의 자동응답 시스템
- **반응형 디자인**: 모바일과 PC 모두 최적화

## 🌐 공개 URL

- **Production**: https://3000-ijg7mongj1igwexz0jrxh-d0b9e1e2.sandbox.novita.ai

## 🎯 현재 구현된 기능

### 1. 다국어 지원 (8개 언어)
- ✅ 실시간 언어 전환
- ✅ 모든 UI 요소 번역
- ✅ 챗봇 응답 다국어 지원

### 2. 4대 핵심 서비스 섹션
- ✅ **세무/환급**: 환급 예상액 계산, 세무사 매칭, 성공 수수료 기반
- ✅ **비자/체류**: 체류 만료 알림, 서류 자동 작성, 출입국 가이드
- ✅ **의료**: 다국어 병원 검색, AI 증상 문진, 통역/동행 서비스
- ✅ **노동/권리**: 계약서 분석, 임금 계산기, 산재·체불 신고 지원

### 3. 다국어 AI 챗봇
- ✅ FAQ 리스트 방식 (15개 질문/답변 × 8개 언어)
- ✅ 아코디언 UI로 질문 클릭 시 답변 표시
- ✅ 실시간 언어 전환 지원

### 4. 반응형 디자인
- ✅ 모바일 최적화 (320px~)
- ✅ 태블릿 최적화 (768px~)
- ✅ 데스크톱 최적화 (1024px~)

## 📋 아직 구현되지 않은 기능

### Phase 2 (계획 중)
- [ ] 사용자 회원가입/로그인 시스템
- [ ] 비자 상태 실시간 조회
- [ ] 세무 환급 예상액 계산기
- [ ] 병원 검색 및 예약 시스템
- [ ] 근로계약서 자동 분석 AI

### Phase 3 (장기 계획)
- [ ] Cloudflare D1 데이터베이스 연동
- [ ] 전문가 매칭 시스템
- [ ] 결제 시스템 (구독/사건별)
- [ ] B2B 기업 관리자 대시보드
- [ ] 정부 기관 API 연동

## 🚀 권장 다음 단계

1. **데이터베이스 설계**: Cloudflare D1으로 사용자 정보, 비자 상태, 사건 관리
2. **인증 시스템**: 회원가입/로그인 기능 구현
3. **세무 계산 로직**: 환급 예상액 자동 계산 알고리즘
4. **병원 데이터**: 외국인 친화 병원 데이터베이스 구축
5. **전문가 네트워크**: 세무사, 노무사, 의료 통역사 연결 시스템

## 🛠 기술 스택

- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Backend**: Hono (Cloudflare Workers)
- **Deployment**: Cloudflare Pages
- **Package Manager**: npm
- **Process Manager**: PM2 (개발 환경)

## 📁 프로젝트 구조

```
webapp/
├── src/
│   ├── index.tsx           # Main Hono application
│   └── renderer.tsx        # HTML renderer
├── public/
│   └── static/
│       ├── style.css       # Global styles
│       ├── i18n.js         # 다국어 시스템
│       └── chatbot-qa.js   # 챗봇 FAQ 데이터
├── dist/                   # Build output
├── ecosystem.config.cjs    # PM2 configuration
├── package.json
├── wrangler.jsonc          # Cloudflare configuration
└── README.md
```

## 💻 로컬 개발

### 빌드
```bash
npm run build
```

### PM2로 실행
```bash
# 포트 정리
npm run clean-port

# 빌드
npm run build

# PM2로 시작
pm2 start ecosystem.config.cjs

# 로그 확인
pm2 logs k-resident-one --nostream

# 중지
pm2 delete k-resident-one
```

### 테스트
```bash
curl http://localhost:3000
```

## 📊 데이터 아키텍처 (계획)

### 주요 데이터 모델
- **Users**: 사용자 정보, 국적, 비자 유형
- **VisaStatus**: 체류 상태, 만료일, 알림 설정
- **TaxCases**: 세무 신고 케이스, 환급 상태
- **LaborCases**: 노동 분쟁 케이스, 진행 상태
- **Documents**: 계약서, 비자 서류 등

### 사용 예정 스토리지
- **Cloudflare D1**: 사용자 데이터, 케이스 관리
- **Cloudflare KV**: 세션, 캐시
- **Cloudflare R2**: 문서 파일 저장

## 🌍 지원 언어

| 언어 코드 | 언어명 | 플래그 |
|----------|--------|--------|
| ko | 한국어 | 🇰🇷 |
| en | English | 🇺🇸 |
| zh-CN | 中文(简) | 🇨🇳 |
| zh-TW | 中文(繁) | 🇹🇼 |
| ja | 日本語 | 🇯🇵 |
| vi | Tiếng Việt | 🇻🇳 |
| es | Español | 🇪🇸 |
| de | Deutsch | 🇩🇪 |

## 📄 배포 상태

- **Platform**: Cloudflare Pages (준비 완료)
- **Status**: ✅ 로컬 개발 완료
- **Last Updated**: 2025-01-02

## 📝 Git 커밋 히스토리

```bash
git log --oneline
```

최신 커밋:
- Initial commit: K-Resident One - 외국인 전용 슈퍼앱

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: #667eea (보라색)
- **Secondary**: #764ba2 (자주색)
- **Gradient**: linear-gradient(135deg, #667eea 0%, #764ba2 100%)

### 반응형 브레이크포인트
- **Mobile**: 0 ~ 767px
- **Tablet**: 768px ~ 1023px
- **Desktop**: 1024px+

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 GitHub Issues를 활용해주세요.

---

**© 2025 K-Resident One. All rights reserved.**
