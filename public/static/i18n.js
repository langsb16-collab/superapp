// i18n.js - 다국어 번역 시스템 (8개 언어 지원)
window.translations = {
  ko: {
    appTitle: "K-Resident One",
    appSubtitle: "한국 생활의 모든 것을 하나로",
    welcome: "환영합니다",
    description: "외국인을 위한 세무·비자·의료·노동 통합 플랫폼",
    
    // 메뉴
    menuTax: "세무/환급",
    menuVisa: "비자/체류",
    menuMedical: "의료",
    menuLabor: "노동/권리",
    
    // 세무 섹션
    taxTitle: "세무 & 환급",
    taxDesc: "연말정산, 종합소득세 신고 및 환급",
    taxFeature1: "환급 예상액 자동 계산",
    taxFeature2: "다국어 세무사 매칭",
    taxFeature3: "성공 수수료 기반",
    
    // 비자 섹션
    visaTitle: "비자 & 체류관리",
    visaDesc: "체류 상태 관리 및 비자 연장",
    visaFeature1: "체류 만료 자동 알림",
    visaFeature2: "서류 자동 작성",
    visaFeature3: "출입국 가이드",
    
    // 의료 섹션
    medicalTitle: "의료 지원",
    medicalDesc: "외국인 친화 병원 검색 및 통역",
    medicalFeature1: "다국어 병원 검색",
    medicalFeature2: "AI 증상 문진",
    medicalFeature3: "통역/동행 서비스",
    
    // 노동 섹션
    laborTitle: "노동 & 권리보호",
    laborDesc: "근로계약 검토 및 권리 보호",
    laborFeature1: "계약서 자동 분석",
    laborFeature2: "임금 계산기",
    laborFeature3: "산재·체불 신고 지원",
    
    // 챗봇
    chatbotTitle: "K-Resident 케어봇",
    chatbotOnline: "온라인",
    chatbotWelcome: "안녕하세요! 👋\\n저는 K-Resident 케어봇입니다.\\n무엇을 도와드릴까요?",
    chatbotPlaceholder: "메시지를 입력하세요...",
    
    // 버튼
    btnLearnMore: "자세히 보기",
    btnStart: "시작하기",
    
    // 온보딩
    onboarding: {
      step1: {
        title: "몇 가지 정보만 입력하면, 필요한 서비스를 바로 안내해 드립니다",
        subtitle: "30초 안에 완료할 수 있습니다 ⏱️",
        language: "선호 언어",
        nationality: "국적",
        selectNationality: "국적을 선택하세요",
        visaType: "현재 비자 유형",
        selectVisa: "비자 유형을 선택하세요",
        purpose: "한국 체류 목적",
        purposeWork: "근로",
        purposeStudy: "유학",
        purposeBusiness: "주재/사업",
        purposeMarriage: "결혼이민",
        purposeOther: "기타",
        other: "기타",
        next: "다음"
      },
      step2: {
        title: "지금 어떤 도움이 가장 필요하신가요?",
        subtitle: "여러 개를 선택할 수 있습니다",
        tax: {
          title: "세무·환급",
          desc: "연말정산, 세금 환급",
          feature1: "환급액 자동 계산",
          feature2: "세무사 연결"
        },
        visa: {
          title: "비자·체류",
          desc: "체류 만료 확인, 비자 연장",
          feature1: "만료일 자동 알림",
          feature2: "서류 자동 작성"
        },
        medical: {
          title: "의료 지원",
          desc: "외국인 병원 찾기, 통역",
          feature1: "다국어 병원 검색",
          feature2: "AI 증상 문진"
        },
        labor: {
          title: "노동·권리",
          desc: "임금/계약 문제, 산재/체불",
          feature1: "계약서 자동 분석",
          feature2: "권리 보호 지원"
        },
        back: "이전",
        next: "다음"
      },
      step3: {
        title: "{name}님을 위한 맞춤 안내입니다",
        subtitle: "선택하신 정보를 기반으로 현재 상태를 분석했습니다",
        visa: {
          title: "체류 상태",
          status: "체류 만료까지 42일",
          description: "비자 연장 준비가 필요합니다",
          details: [
            "E-9 비자: 2024년 3월 15일 만료",
            "연장 신청 가능 기간: 현재",
            "필요 서류: 근로계약서, 건강검진서"
          ]
        },
        tax: {
          title: "세무 상태",
          status: "환급 가능",
          description: "예상 환급액 약 1,250,000원",
          details: [
            "2023년 근로소득: 30,000,000원",
            "원천징수세액: 2,100,000원",
            "환급 신청 마감: 2024년 5월 31일"
          ]
        },
        labor: {
          title: "근로 상태",
          status: "검토 필요",
          description: "근로계약서 확인이 필요합니다",
          details: [
            "최저임금 충족 여부 확인 필요",
            "야간/휴일수당 계산 검토",
            "근로계약서 등록 권장"
          ]
        },
        medical: {
          title: "의료 정보",
          status: "정상",
          description: "가까운 외국인 친화 병원을 확인하세요",
          details: [
            "반경 5km 내 다국어 병원 3곳",
            "건강보험 적용 가능",
            "통역 서비스 이용 가능"
          ]
        },
        back: "이전",
        next: "다음"
      },
      step4: {
        title: "지금 바로 시작할 수 있습니다",
        subtitle: "원하는 서비스를 선택하세요",
        tax: {
          title: "환급액 바로 계산하기",
          description: "2분이면 예상 환급액을 확인할 수 있습니다"
        },
        visa: {
          title: "비자 연장 준비 시작",
          description: "필요한 서류와 절차를 안내해 드립니다"
        },
        medical: {
          title: "외국인 병원 검색",
          description: "가까운 다국어 지원 병원을 찾아보세요"
        },
        labor: {
          title: "근로계약서 업로드 및 분석",
          description: "계약서를 분석하고 문제점을 확인합니다"
        },
        back: "이전",
        skip: "나중에 할게요"
      },
      step5: {
        title: "AI 맞춤 안내",
        aiMessage: {
          visaTax: "현재 상황을 볼 때, 비자 연장과 세금 환급을 함께 진행하는 것이 가장 유리합니다. 필요하시면 전문가 연결도 도와드립니다.",
          visa: "비자 만료일이 얼마 남지 않았습니다. 지금 바로 연장 준비를 시작하시는 것을 권장합니다.",
          tax: "올해 세금 환급을 받을 수 있습니다. 예상 환급액을 확인하고 신청을 도와드리겠습니다.",
          labor: "근로계약서 검토가 필요합니다. 최저임금과 근로조건을 확인해 드리겠습니다.",
          general: "선택하신 서비스를 위한 맞춤 안내를 제공합니다. 필요하시면 전문가와 연결해 드립니다."
        },
        expertTitle: "전문가 연결이 필요하신가요?",
        expertTax: "세무사",
        expertVisa: "행정사",
        expertLabor: "노무사",
        expertMedical: "의료 통역사",
        later: "나중에 할게요",
        finish: "완료",
        finishMessage: "온보딩이 완료되었습니다! 이제 모든 서비스를 이용하실 수 있습니다.",
        finishWithExpert: "전문가 연결 요청이 접수되었습니다. 곧 연락드리겠습니다."
      }
    }
  },
    btnGetStarted: "시작하기",
    btnChat: "상담하기"
  },
  
  en: {
    appTitle: "K-Resident One",
    appSubtitle: "All-in-One Platform for Life in Korea",
    welcome: "Welcome",
    description: "Integrated Platform for Tax, Visa, Medical & Labor for Foreigners",
    
    menuTax: "Tax/Refund",
    menuVisa: "Visa/Stay",
    menuMedical: "Medical",
    menuLabor: "Labor/Rights",
    
    taxTitle: "Tax & Refund",
    taxDesc: "Year-end tax filing and refund service",
    taxFeature1: "Auto-calculate refund estimate",
    taxFeature2: "Multilingual tax expert matching",
    taxFeature3: "Success-based fee",
    
    visaTitle: "Visa & Stay Management",
    visaDesc: "Manage stay status and visa extensions",
    visaFeature1: "Auto stay expiry alerts",
    visaFeature2: "Auto-fill documents",
    visaFeature3: "Immigration guide",
    
    medicalTitle: "Medical Support",
    medicalDesc: "Search foreigner-friendly hospitals",
    medicalFeature1: "Multilingual hospital search",
    medicalFeature2: "AI symptom checker",
    medicalFeature3: "Interpreter/escort service",
    
    laborTitle: "Labor & Rights Protection",
    laborDesc: "Contract review and rights protection",
    laborFeature1: "Auto-analyze contracts",
    laborFeature2: "Wage calculator",
    laborFeature3: "Report industrial accidents",
    
    chatbotTitle: "K-Resident Care Bot",
    chatbotOnline: "Online",
    chatbotWelcome: "Hello! 👋\\nI'm K-Resident Care Bot.\\nHow can I help you?",
    chatbotPlaceholder: "Type a message...",
    
    btnLearnMore: "Learn More",
    btnGetStarted: "Get Started",
    btnChat: "Chat Now",
    btnStart: "Get Started",
    
    // Onboarding
    onboarding: {
      step1: {
        title: "Just a few details, and we'll guide you to the right services",
        subtitle: "Takes less than 30 seconds ⏱️",
        language: "Preferred Language",
        nationality: "Nationality",
        selectNationality: "Select your nationality",
        visaType: "Current Visa Type",
        selectVisa: "Select your visa type",
        purpose: "Purpose of Stay in Korea",
        purposeWork: "Employment",
        purposeStudy: "Study",
        purposeBusiness: "Business",
        purposeMarriage: "Marriage",
        purposeOther: "Other",
        other: "Other",
        next: "Next"
      },
      step2: {
        title: "What do you need help with right now?",
        subtitle: "You can select multiple options",
        tax: {
          title: "Tax & Refund",
          desc: "Year-end tax adjustment, tax refund",
          feature1: "Automatic refund calculation",
          feature2: "Tax accountant connection"
        },
        visa: {
          title: "Visa & Residency",
          desc: "Expiry check, visa extension",
          feature1: "Automatic expiry alerts",
          feature2: "Document auto-fill"
        },
        medical: {
          title: "Medical Support",
          desc: "Foreign-friendly hospitals, interpreter",
          feature1: "Multilingual hospital search",
          feature2: "AI symptom consultation"
        },
        labor: {
          title: "Labor & Rights",
          desc: "Wage/contract issues, workplace injury",
          feature1: "Contract auto-analysis",
          feature2: "Rights protection support"
        },
        back: "Back",
        next: "Next"
      },
      step3: {
        title: "Your Personalized Guide",
        subtitle: "Based on your information, here's your current status analysis",
        visa: {
          title: "Residency Status",
          status: "42 days until expiry",
          description: "You need to prepare for visa extension",
          details: [
            "E-9 Visa: Expires March 15, 2024",
            "Extension period: Available now",
            "Required documents: Employment contract, health certificate"
          ]
        },
        tax: {
          title: "Tax Status",
          status: "Refund available",
          description: "Estimated refund: ₩1,250,000",
          details: [
            "2023 Employment income: ₩30,000,000",
            "Tax withheld: ₩2,100,000",
            "Refund deadline: May 31, 2024"
          ]
        },
        labor: {
          title: "Employment Status",
          status: "Review needed",
          description: "Employment contract review required",
          details: [
            "Minimum wage compliance check needed",
            "Night/holiday pay calculation review",
            "Contract registration recommended"
          ]
        },
        medical: {
          title: "Medical Information",
          status: "Normal",
          description: "Check nearby foreign-friendly hospitals",
          details: [
            "3 multilingual hospitals within 5km",
            "Health insurance applicable",
            "Interpreter service available"
          ]
        },
        back: "Back",
        next: "Next"
      },
      step4: {
        title: "You can start right away",
        subtitle: "Choose the service you want",
        tax: {
          title: "Calculate My Refund Now",
          description: "Check your estimated refund in 2 minutes"
        },
        visa: {
          title: "Start Visa Extension Prep",
          description: "We'll guide you through required documents and procedures"
        },
        medical: {
          title: "Search Foreign-Friendly Hospitals",
          description: "Find nearby multilingual hospitals"
        },
        labor: {
          title: "Upload & Analyze Employment Contract",
          description: "We'll analyze your contract and identify issues"
        },
        back: "Back",
        skip: "Maybe Later"
      },
      step5: {
        title: "AI Personalized Guidance",
        aiMessage: {
          visaTax: "Based on your situation, it's best to process both visa extension and tax refund together. We can also connect you with experts if needed.",
          visa: "Your visa expiry is approaching. We recommend starting the extension process now.",
          tax: "You're eligible for a tax refund this year. Let us help you check the estimated amount and file your application.",
          labor: "Your employment contract needs review. We'll check minimum wage compliance and working conditions.",
          general: "We provide personalized guidance for your selected services. We can connect you with experts if needed."
        },
        expertTitle: "Need to connect with an expert?",
        expertTax: "Tax Accountant",
        expertVisa: "Immigration Specialist",
        expertLabor: "Labor Attorney",
        expertMedical: "Medical Interpreter",
        later: "Maybe Later",
        finish: "Complete",
        finishMessage: "Onboarding complete! You can now access all services.",
        finishWithExpert: "Expert connection request received. We'll contact you soon."
      }
    }
  },
  "zh-CN": {
    appTitle: "K-Resident One",
    appSubtitle: "在韩生活一站式平台",
    welcome: "欢迎",
    description: "外国人税务·签证·医疗·劳动综合平台",
    
    menuTax: "税务/退税",
    menuVisa: "签证/居留",
    menuMedical: "医疗",
    menuLabor: "劳动/权益",
    
    taxTitle: "税务与退税",
    taxDesc: "年度纳税申报和退税服务",
    taxFeature1: "自动计算退税预估",
    taxFeature2: "多语言税务专家匹配",
    taxFeature3: "成功收费制",
    
    visaTitle: "签证与居留管理",
    visaDesc: "管理居留状态和签证延期",
    visaFeature1: "居留到期自动提醒",
    visaFeature2: "文件自动填写",
    visaFeature3: "出入境指南",
    
    medicalTitle: "医疗支持",
    medicalDesc: "搜索外国人友好医院",
    medicalFeature1: "多语言医院搜索",
    medicalFeature2: "AI症状问诊",
    medicalFeature3: "翻译/陪同服务",
    
    laborTitle: "劳动与权益保护",
    laborDesc: "合同审查和权益保护",
    laborFeature1: "自动分析合同",
    laborFeature2: "工资计算器",
    laborFeature3: "工伤举报支持",
    
    chatbotTitle: "K-Resident 关怀机器人",
    chatbotOnline: "在线",
    chatbotWelcome: "您好！👋\\n我是K-Resident关怀机器人。\\n我能帮您什么？",
    chatbotPlaceholder: "输入消息...",
    
    btnLearnMore: "了解更多",
    btnGetStarted: "开始使用",
    btnChat: "立即咨询"
  },
  
  "zh-TW": {
    appTitle: "K-Resident One",
    appSubtitle: "在韓生活一站式平台",
    welcome: "歡迎",
    description: "外國人稅務·簽證·醫療·勞動綜合平台",
    
    menuTax: "稅務/退稅",
    menuVisa: "簽證/居留",
    menuMedical: "醫療",
    menuLabor: "勞動/權益",
    
    taxTitle: "稅務與退稅",
    taxDesc: "年度納稅申報和退稅服務",
    taxFeature1: "自動計算退稅預估",
    taxFeature2: "多語言稅務專家配對",
    taxFeature3: "成功收費制",
    
    visaTitle: "簽證與居留管理",
    visaDesc: "管理居留狀態和簽證延期",
    visaFeature1: "居留到期自動提醒",
    visaFeature2: "文件自動填寫",
    visaFeature3: "出入境指南",
    
    medicalTitle: "醫療支持",
    medicalDesc: "搜索外國人友好醫院",
    medicalFeature1: "多語言醫院搜索",
    medicalFeature2: "AI症狀問診",
    medicalFeature3: "翻譯/陪同服務",
    
    laborTitle: "勞動與權益保護",
    laborDesc: "合約審查和權益保護",
    laborFeature1: "自動分析合約",
    laborFeature2: "工資計算器",
    laborFeature3: "工傷舉報支持",
    
    chatbotTitle: "K-Resident 關懷機器人",
    chatbotOnline: "在線",
    chatbotWelcome: "您好！👋\\n我是K-Resident關懷機器人。\\n我能幫您什麼？",
    chatbotPlaceholder: "輸入訊息...",
    
    btnLearnMore: "了解更多",
    btnGetStarted: "開始使用",
    btnChat: "立即諮詢"
  },
  
  ja: {
    appTitle: "K-Resident One",
    appSubtitle: "韓国生活のすべてを一つに",
    welcome: "ようこそ",
    description: "外国人のための税務·ビザ·医療·労働統合プラットフォーム",
    
    menuTax: "税務/還付",
    menuVisa: "ビザ/滞在",
    menuMedical: "医療",
    menuLabor: "労働/権利",
    
    taxTitle: "税務と還付",
    taxDesc: "年末調整と総合所得税申告サービス",
    taxFeature1: "還付予想額自動計算",
    taxFeature2: "多言語税理士マッチング",
    taxFeature3: "成功報酬制",
    
    visaTitle: "ビザと滞在管理",
    visaDesc: "滞在状態管理とビザ延長",
    visaFeature1: "滞在期限自動通知",
    visaFeature2: "書類自動作成",
    visaFeature3: "出入国ガイド",
    
    medicalTitle: "医療支援",
    medicalDesc: "外国人対応病院検索",
    medicalFeature1: "多言語病院検索",
    medicalFeature2: "AI症状問診",
    medicalFeature3: "通訳/同行サービス",
    
    laborTitle: "労働と権利保護",
    laborDesc: "労働契約検討と権利保護",
    laborFeature1: "契約書自動分析",
    laborFeature2: "賃金計算機",
    laborFeature3: "労災·賃金未払い通報支援",
    
    chatbotTitle: "K-Resident ケアボット",
    chatbotOnline: "オンライン",
    chatbotWelcome: "こんにちは！👋\\n私はK-Residentケアボットです。\\n何かお手伝いしましょうか？",
    chatbotPlaceholder: "メッセージを入力してください...",
    
    btnLearnMore: "詳しく見る",
    btnGetStarted: "始める",
    btnChat: "相談する"
  },
  
  vi: {
    appTitle: "K-Resident One",
    appSubtitle: "Nền tảng tất cả trong một cho cuộc sống tại Hàn Quốc",
    welcome: "Chào mừng",
    description: "Nền tảng tích hợp thuế, visa, y tế và lao động cho người nước ngoài",
    
    menuTax: "Thuế/Hoàn thuế",
    menuVisa: "Visa/Cư trú",
    menuMedical: "Y tế",
    menuLabor: "Lao động/Quyền lợi",
    
    taxTitle: "Thuế và hoàn thuế",
    taxDesc: "Dịch vụ quyết toán thuế cuối năm và hoàn thuế",
    taxFeature1: "Tự động tính toán hoàn thuế dự kiến",
    taxFeature2: "Kết nối chuyên gia thuế đa ngôn ngữ",
    taxFeature3: "Phí dựa trên thành công",
    
    visaTitle: "Quản lý visa và cư trú",
    visaDesc: "Quản lý tình trạng cư trú và gia hạn visa",
    visaFeature1: "Thông báo tự động hết hạn cư trú",
    visaFeature2: "Tự động điền tài liệu",
    visaFeature3: "Hướng dẫn xuất nhập cảnh",
    
    medicalTitle: "Hỗ trợ y tế",
    medicalDesc: "Tìm kiếm bệnh viện thân thiện với người nước ngoài",
    medicalFeature1: "Tìm kiếm bệnh viện đa ngôn ngữ",
    medicalFeature2: "Khám bệnh qua AI",
    medicalFeature3: "Dịch vụ phiên dịch/đi cùng",
    
    laborTitle: "Bảo vệ lao động và quyền lợi",
    laborDesc: "Xem xét hợp đồng và bảo vệ quyền lợi",
    laborFeature1: "Phân tích hợp đồng tự động",
    laborFeature2: "Máy tính tiền lương",
    laborFeature3: "Hỗ trợ báo cáo tai nạn lao động",
    
    chatbotTitle: "K-Resident Care Bot",
    chatbotOnline: "Trực tuyến",
    chatbotWelcome: "Xin chào! 👋\\nTôi là K-Resident Care Bot.\\nTôi có thể giúp gì cho bạn?",
    chatbotPlaceholder: "Nhập tin nhắn...",
    
    btnLearnMore: "Tìm hiểu thêm",
    btnGetStarted: "Bắt đầu",
    btnChat: "Trò chuyện ngay"
  },
  
  es: {
    appTitle: "K-Resident One",
    appSubtitle: "Plataforma todo en uno para la vida en Corea",
    welcome: "Bienvenido",
    description: "Plataforma integrada de impuestos, visa, médica y laboral para extranjeros",
    
    menuTax: "Impuestos/Reembolso",
    menuVisa: "Visa/Residencia",
    menuMedical: "Médico",
    menuLabor: "Laboral/Derechos",
    
    taxTitle: "Impuestos y reembolso",
    taxDesc: "Servicio de declaración de impuestos de fin de año y reembolso",
    taxFeature1: "Cálculo automático de reembolso estimado",
    taxFeature2: "Conexión con expertos fiscales multilingües",
    taxFeature3: "Tarifa basada en éxito",
    
    visaTitle: "Gestión de visa y residencia",
    visaDesc: "Gestión de estado de residencia y extensión de visa",
    visaFeature1: "Alertas automáticas de vencimiento de residencia",
    visaFeature2: "Rellenar documentos automáticamente",
    visaFeature3: "Guía de inmigración",
    
    medicalTitle: "Apoyo médico",
    medicalDesc: "Buscar hospitales amigables para extranjeros",
    medicalFeature1: "Búsqueda de hospitales multilingües",
    medicalFeature2: "Consulta de síntomas con IA",
    medicalFeature3: "Servicio de intérprete/acompañante",
    
    laborTitle: "Protección laboral y de derechos",
    laborDesc: "Revisión de contratos y protección de derechos",
    laborFeature1: "Análisis automático de contratos",
    laborFeature2: "Calculadora de salario",
    laborFeature3: "Apoyo para reportar accidentes laborales",
    
    chatbotTitle: "K-Resident Care Bot",
    chatbotOnline: "En línea",
    chatbotWelcome: "¡Hola! 👋\\nSoy K-Resident Care Bot.\\n¿En qué puedo ayudarte?",
    chatbotPlaceholder: "Escribe un mensaje...",
    
    btnLearnMore: "Saber más",
    btnGetStarted: "Comenzar",
    btnChat: "Chatear ahora"
  },
  
  de: {
    appTitle: "K-Resident One",
    appSubtitle: "All-in-One-Plattform für das Leben in Korea",
    welcome: "Willkommen",
    description: "Integrierte Plattform für Steuern, Visa, Medizin und Arbeit für Ausländer",
    
    menuTax: "Steuern/Rückerstattung",
    menuVisa: "Visum/Aufenthalt",
    menuMedical: "Medizinisch",
    menuLabor: "Arbeit/Rechte",
    
    taxTitle: "Steuern und Rückerstattung",
    taxDesc: "Jahresendsteuererklärung und Rückerstattungsservice",
    taxFeature1: "Automatische Berechnung der geschätzten Rückerstattung",
    taxFeature2: "Mehrsprachige Steuerexpertenverbindung",
    taxFeature3: "Erfolgsbasierte Gebühr",
    
    visaTitle: "Visum- und Aufenthaltsverwaltung",
    visaDesc: "Verwaltung des Aufenthaltsstatus und Visumverlängerung",
    visaFeature1: "Automatische Benachrichtigungen über Ablauf des Aufenthalts",
    visaFeature2: "Automatisches Ausfüllen von Dokumenten",
    visaFeature3: "Einwanderungsleitfaden",
    
    medicalTitle: "Medizinische Unterstützung",
    medicalDesc: "Suche nach ausländerfreundlichen Krankenhäusern",
    medicalFeature1: "Mehrsprachige Krankenhaussuche",
    medicalFeature2: "KI-Symptomprüfung",
    medicalFeature3: "Dolmetscher-/Begleitservice",
    
    laborTitle: "Arbeits- und Rechtsschutz",
    laborDesc: "Vertragsüberprüfung und Rechtsschutz",
    laborFeature1: "Automatische Vertragsanalyse",
    laborFeature2: "Lohnrechner",
    laborFeature3: "Unterstützung bei der Meldung von Arbeitsunfällen",
    
    chatbotTitle: "K-Resident Care Bot",
    chatbotOnline: "Online",
    chatbotWelcome: "Hallo! 👋\\nIch bin K-Resident Care Bot.\\nWie kann ich Ihnen helfen?",
    chatbotPlaceholder: "Nachricht eingeben...",
    
    btnLearnMore: "Mehr erfahren",
    btnGetStarted: "Loslegen",
    btnChat: "Jetzt chatten"
  }
};

// 현재 언어 설정
window.currentLang = localStorage.getItem('selectedLang') || 'ko';

// 언어 변경 함수
window.changeLang = function(lang) {
  window.currentLang = lang;
  localStorage.setItem('selectedLang', lang);
  updateUI();
  
  // 챗봇 언어도 업데이트
  if (window.renderChatbot) {
    window.renderChatbot();
  }
};

// UI 업데이트 함수
function updateUI() {
  const t = window.translations[window.currentLang];
  
  // 데이터 속성을 가진 모든 요소 업데이트
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      el.textContent = t[key];
    }
  });
  
  // placeholder 업데이트
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) {
      el.placeholder = t[key];
    }
  });
  
  // 언어 버튼 활성화 상태 업데이트
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === window.currentLang) {
      btn.classList.add('active');
    }
  });
}

// DOM 로드 완료 후 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateUI);
} else {
  updateUI();
}
