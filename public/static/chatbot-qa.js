// chatbot-qa.js - 다국어 FAQ 자동응답 시스템
window.chatbotQA = {
  ko: [
    { q: "사진만으로 세금 신고가 가능한가요?", a: "네, 영수증 없이도 가능합니다. 통장 캡처나 거래내역으로 신고할 수 있습니다." },
    { q: "외국인도 사용 가능한가요?", a: "네, 8개 국어(한국어, 영어, 중국어 간체, 중국어 번체, 일본어, 베트남어, 스페인어, 독일어)를 지원합니다." },
    { q: "세무 지식이 없어도 되나요?", a: "네, AI가 자동으로 분류하고 안내하므로 세무 지식이 없어도 쉽게 이용할 수 있습니다." },
    { q: "처리 시간은 얼마나 걸리나요?", a: "사진 업로드 후 평균 2~3분 내에 자동 분석이 완료됩니다." },
    { q: "비용은 얼마인가요?", a: "기본 서비스는 무료이며, 전문가 검토가 필요한 경우 별도 요금이 발생합니다." },
    { q: "비자 연장은 어떻게 하나요?", a: "앱에서 비자 유형을 선택하면 필요한 서류와 절차를 자동으로 안내해드립니다." },
    { q: "체류 기간 만료 알림을 받을 수 있나요?", a: "네, 만료 90일, 60일, 30일 전에 자동으로 알림을 보내드립니다." },
    { q: "외국인 등록증 재발급은?", a: "분실/도난 시 즉시 신고 후 재발급 신청이 가능하며, 필요 서류를 안내해드립니다." },
    { q: "다국어 지원 병원을 찾을 수 있나요?", a: "네, 지역별, 진료과목별로 다국어 지원 병원을 검색할 수 있습니다." },
    { q: "응급 상황에서는 어떻게 하나요?", a: "119(응급)를 먼저 연락하고, 앱의 응급 가이드를 참고하세요. 통역 서비스도 제공됩니다." },
    { q: "근로계약서를 확인해줄 수 있나요?", a: "네, 계약서를 업로드하면 AI가 위험 조항을 자동으로 분석해드립니다." },
    { q: "임금 체불이 발생하면?", a: "노동청 신고 절차를 안내하고, 필요시 노무사와 연결해드립니다." },
    { q: "최저임금은 얼마인가요?", a: "2024년 기준 시급 9,860원입니다. 앱의 임금 계산기로 정확한 급여를 계산할 수 있습니다." },
    { q: "산재보험은 어떻게 신청하나요?", a: "사고 발생 즉시 고용주에게 알리고, 근로복지공단에 신청하세요. 앱에서 단계별 가이드를 제공합니다." },
    { q: "어떤 국가 사람들이 많이 사용하나요?", a: "중국, 베트남, 미국, 일본, 중동 출신 외국인들이 주로 이용합니다." }
  ],
  en: [
    { q: "Can I file taxes using only a photo?", a: "Yes, receipts are not required. You can file with bank statements or transaction records." },
    { q: "Can foreigners use this service?", a: "Yes, we support 8 languages (Korean, English, Simplified Chinese, Traditional Chinese, Japanese, Vietnamese, Spanish, German)." },
    { q: "Do I need tax knowledge?", a: "No, AI automatically categorizes and guides you, so no tax knowledge is required." },
    { q: "How long does processing take?", a: "Automatic analysis is completed within 2-3 minutes after uploading photos." },
    { q: "What is the cost?", a: "Basic service is free. Expert review incurs separate charges." },
    { q: "How do I extend my visa?", a: "Select your visa type in the app and we'll automatically guide you through required documents and procedures." },
    { q: "Can I receive stay period expiry alerts?", a: "Yes, we automatically send alerts 90, 60, and 30 days before expiration." },
    { q: "How do I reissue my alien registration card?", a: "Report immediately if lost/stolen, then apply for reissue. We'll guide you through required documents." },
    { q: "Can I find multilingual hospitals?", a: "Yes, you can search for multilingual hospitals by region and medical department." },
    { q: "What should I do in an emergency?", a: "Call 119 (emergency) first, then refer to the app's emergency guide. Interpreter service is also available." },
    { q: "Can you review my employment contract?", a: "Yes, upload your contract and AI will automatically analyze risky clauses." },
    { q: "What if wages are unpaid?", a: "We'll guide you through the labor office reporting process and connect you with a labor attorney if needed." },
    { q: "What is the minimum wage?", a: "As of 2024, it's 9,860 won per hour. Use the app's wage calculator for accurate salary calculation." },
    { q: "How do I apply for industrial accident insurance?", a: "Notify your employer immediately after an accident and apply to the Workers' Compensation Board. The app provides step-by-step guidance." },
    { q: "Which countries use this service most?", a: "It's mainly used by foreigners from China, Vietnam, USA, Japan, and Middle East." }
  ],
  "zh-CN": [
    { q: "只用照片可以报税吗？", a: "可以，不需要收据。可以用银行对账单或交易记录申报。" },
    { q: "外国人可以使用吗？", a: "可以，支持8种语言（韩语、英语、简体中文、繁体中文、日语、越南语、西班牙语、德语）。" },
    { q: "不懂税务知识也可以吗？", a: "可以，AI会自动分类并引导，无需税务知识。" },
    { q: "处理需要多长时间？", a: "上传照片后，平均2-3分钟内完成自动分析。" },
    { q: "费用是多少？", a: "基础服务免费，需要专家审核时另行收费。" },
    { q: "如何延长签证？", a: "在应用中选择您的签证类型，我们会自动指导您所需的文件和程序。" },
    { q: "可以收到居留期限到期提醒吗？", a: "可以，我们会在到期前90天、60天和30天自动发送提醒。" },
    { q: "如何补发外国人登录证？", a: "遗失/被盗后立即报告，然后申请补发。我们会指导您所需的文件。" },
    { q: "可以找到多语言医院吗？", a: "可以，您可以按地区和科室搜索多语言医院。" },
    { q: "紧急情况下怎么办？", a: "先拨打119（急救），然后参考应用的紧急指南。还提供翻译服务。" },
    { q: "可以审查我的劳动合同吗？", a: "可以，上传合同，AI会自动分析风险条款。" },
    { q: "如果拖欠工资怎么办？", a: "我们会指导您向劳动局报告的程序，必要时与劳务律师联系。" },
    { q: "最低工资是多少？", a: "截至2024年，每小时9,860韩元。使用应用的工资计算器可以准确计算工资。" },
    { q: "如何申请工伤保险？", a: "事故发生后立即通知雇主并向劳动福利公团申请。应用提供分步指导。" },
    { q: "哪些国家的人使用最多？", a: "主要由来自中国、越南、美国、日本和中东的外国人使用。" }
  ],
  "zh-TW": [
    { q: "只用照片可以報稅嗎？", a: "可以，不需要收據。可以用銀行對帳單或交易記錄申報。" },
    { q: "外國人可以使用嗎？", a: "可以，支援8種語言（韓語、英語、簡體中文、繁體中文、日語、越南語、西班牙語、德語）。" },
    { q: "不懂稅務知識也可以嗎？", a: "可以，AI會自動分類並引導，無需稅務知識。" },
    { q: "處理需要多長時間？", a: "上傳照片後，平均2-3分鐘內完成自動分析。" },
    { q: "費用是多少？", a: "基礎服務免費，需要專家審核時另行收費。" },
    { q: "如何延長簽證？", a: "在應用程式中選擇您的簽證類型，我們會自動指導您所需的文件和程序。" },
    { q: "可以收到居留期限到期提醒嗎？", a: "可以，我們會在到期前90天、60天和30天自動發送提醒。" },
    { q: "如何補發外國人登錄證？", a: "遺失/被竊後立即報告，然後申請補發。我們會指導您所需的文件。" },
    { q: "可以找到多語言醫院嗎？", a: "可以，您可以按地區和科室搜尋多語言醫院。" },
    { q: "緊急情況下怎麼辦？", a: "先撥打119（急救），然後參考應用程式的緊急指南。還提供翻譯服務。" },
    { q: "可以審查我的勞動合約嗎？", a: "可以，上傳合約，AI會自動分析風險條款。" },
    { q: "如果拖欠工資怎麼辦？", a: "我們會指導您向勞動局報告的程序，必要時與勞務律師聯繫。" },
    { q: "最低工資是多少？", a: "截至2024年，每小時9,860韓元。使用應用程式的工資計算器可以準確計算工資。" },
    { q: "如何申請工傷保險？", a: "事故發生後立即通知雇主並向勞動福利公團申請。應用程式提供分步指導。" },
    { q: "哪些國家的人使用最多？", a: "主要由來自中國、越南、美國、日本和中東的外國人使用。" }
  ],
  ja: [
    { q: "写真だけで申告できますか？", a: "はい、領収書は不要です。口座明細や取引記録で申告できます。" },
    { q: "外国人でも使えますか？", a: "はい、8か国語（韓国語、英語、簡体字中国語、繁体字中国語、日本語、ベトナム語、スペイン語、ドイツ語）に対応しています。" },
    { q: "税務知識がなくても大丈夫ですか？", a: "はい、AIが自動的に分類して案内するので、税務知識は不要です。" },
    { q: "処理時間はどのくらいですか？", a: "写真アップロード後、平均2～3分で自動分析が完了します。" },
    { q: "費用はいくらですか？", a: "基本サービスは無料です。専門家のレビューが必要な場合は別途料金が発生します。" },
    { q: "ビザの延長はどうすればいいですか？", a: "アプリでビザの種類を選択すると、必要な書類と手続きを自動的にご案内します。" },
    { q: "滞在期間の期限切れアラートを受け取れますか？", a: "はい、期限切れの90日、60日、30日前に自動的にアラートを送信します。" },
    { q: "外国人登録証の再発行は？", a: "紛失・盗難後すぐに報告し、再発行を申請してください。必要書類をご案内します。" },
    { q: "多言語対応の病院を見つけられますか？", a: "はい、地域別、診療科目別に多言語対応病院を検索できます。" },
    { q: "緊急時はどうすればいいですか？", a: "まず119（救急）に連絡し、アプリの緊急ガイドを参照してください。通訳サービスも利用できます。" },
    { q: "雇用契約書を確認してもらえますか？", a: "はい、契約書をアップロードすると、AIが自動的にリスク条項を分析します。" },
    { q: "賃金未払いが発生したら？", a: "労働局への通報手続きをご案内し、必要に応じて労務士と連絡します。" },
    { q: "最低賃金はいくらですか？", a: "2024年基準で時給9,860ウォンです。アプリの賃金計算機で正確な給与を計算できます。" },
    { q: "労災保険はどう申請しますか？", a: "事故発生後すぐに雇用主に知らせ、勤労福祉公団に申請してください。アプリでステップバイステップのガイドを提供します。" },
    { q: "どの国の人が多く利用していますか？", a: "中国、ベトナム、アメリカ、日本、中東出身の外国人が主に利用しています。" }
  ],
  vi: [
    { q: "Chỉ cần ảnh là có thể khai thuế không?", a: "Có, không cần hóa đơn. Bạn có thể khai bằng sao kê ngân hàng hoặc lịch sử giao dịch." },
    { q: "Người nước ngoài có thể sử dụng không?", a: "Có, chúng tôi hỗ trợ 8 ngôn ngữ (Hàn, Anh, Trung giản thể, Trung phồn thể, Nhật, Việt, Tây Ban Nha, Đức)." },
    { q: "Không có kiến thức về thuế có được không?", a: "Được, AI tự động phân loại và hướng dẫn, không cần kiến thức thuế." },
    { q: "Thời gian xử lý mất bao lâu?", a: "Sau khi tải ảnh lên, phân tích tự động hoàn tất trong 2-3 phút." },
    { q: "Chi phí là bao nhiêu?", a: "Dịch vụ cơ bản miễn phí. Đánh giá chuyên gia có phí riêng." },
    { q: "Làm thế nào để gia hạn visa?", a: "Chọn loại visa của bạn trong ứng dụng và chúng tôi sẽ tự động hướng dẫn bạn các tài liệu và thủ tục cần thiết." },
    { q: "Tôi có thể nhận thông báo hết hạn cư trú không?", a: "Có, chúng tôi tự động gửi thông báo trước 90, 60 và 30 ngày trước khi hết hạn." },
    { q: "Làm thế nào để cấp lại thẻ đăng ký người nước ngoài?", a: "Báo cáo ngay lập tức nếu bị mất/bị đánh cắp, sau đó nộp đơn cấp lại. Chúng tôi sẽ hướng dẫn bạn các tài liệu cần thiết." },
    { q: "Tôi có thể tìm bệnh viện đa ngôn ngữ không?", a: "Có, bạn có thể tìm kiếm bệnh viện đa ngôn ngữ theo khu vực và khoa." },
    { q: "Tôi nên làm gì trong tình huống khẩn cấp?", a: "Gọi 119 (cấp cứu) trước, sau đó tham khảo hướng dẫn khẩn cấp trong ứng dụng. Dịch vụ phiên dịch cũng có sẵn." },
    { q: "Bạn có thể xem xét hợp đồng lao động của tôi không?", a: "Có, tải lên hợp đồng và AI sẽ tự động phân tích các điều khoản rủi ro." },
    { q: "Nếu tiền lương bị nợ thì sao?", a: "Chúng tôi sẽ hướng dẫn bạn quy trình báo cáo văn phòng lao động và kết nối bạn với luật sư lao động nếu cần." },
    { q: "Mức lương tối thiểu là bao nhiêu?", a: "Tính đến năm 2024, là 9,860 won mỗi giờ. Sử dụng máy tính tiền lương trong ứng dụng để tính toán lương chính xác." },
    { q: "Làm thế nào để nộp đơn bảo hiểm tai nạn lao động?", a: "Thông báo cho người sử dụng lao động ngay sau khi xảy ra tai nạn và nộp đơn lên Ban Bồi thường Công nhân. Ứng dụng cung cấp hướng dẫn từng bước." },
    { q: "Quốc gia nào sử dụng dịch vụ này nhiều nhất?", a: "Chủ yếu được sử dụng bởi người nước ngoài từ Trung Quốc, Việt Nam, Mỹ, Nhật Bản và Trung Đông." }
  ],
  es: [
    { q: "¿Puedo declarar impuestos solo con una foto?", a: "Sí, no se requieren recibos. Puede declarar con estados de cuenta bancarios o registros de transacciones." },
    { q: "¿Pueden usar este servicio los extranjeros?", a: "Sí, admitimos 8 idiomas (coreano, inglés, chino simplificado, chino tradicional, japonés, vietnamita, español, alemán)." },
    { q: "¿Necesito conocimientos fiscales?", a: "No, la IA categoriza y guía automáticamente, no se requieren conocimientos fiscales." },
    { q: "¿Cuánto tarda el procesamiento?", a: "El análisis automático se completa en 2-3 minutos después de cargar las fotos." },
    { q: "¿Cuál es el costo?", a: "El servicio básico es gratuito. La revisión de expertos tiene cargos adicionales." },
    { q: "¿Cómo extiendo mi visa?", a: "Seleccione su tipo de visa en la aplicación y le guiaremos automáticamente a través de los documentos y procedimientos requeridos." },
    { q: "¿Puedo recibir alertas de vencimiento del período de estadía?", a: "Sí, enviamos automáticamente alertas 90, 60 y 30 días antes del vencimiento." },
    { q: "¿Cómo vuelvo a emitir mi tarjeta de registro de extranjeros?", a: "Informe inmediatamente si se pierde/roba, luego solicite la reemisión. Le guiaremos a través de los documentos requeridos." },
    { q: "¿Puedo encontrar hospitales multilingües?", a: "Sí, puede buscar hospitales multilingües por región y departamento médico." },
    { q: "¿Qué debo hacer en una emergencia?", a: "Llame al 119 (emergencia) primero, luego consulte la guía de emergencia de la aplicación. El servicio de intérprete también está disponible." },
    { q: "¿Pueden revisar mi contrato laboral?", a: "Sí, cargue su contrato y la IA analizará automáticamente las cláusulas riesgosas." },
    { q: "¿Qué pasa si los salarios no se pagan?", a: "Le guiaremos a través del proceso de informe a la oficina laboral y lo conectaremos con un abogado laboral si es necesario." },
    { q: "¿Cuál es el salario mínimo?", a: "A partir de 2024, son 9,860 won por hora. Use la calculadora de salarios de la aplicación para un cálculo preciso." },
    { q: "¿Cómo solicito el seguro de accidentes laborales?", a: "Notifique a su empleador inmediatamente después de un accidente y presente una solicitud ante la Junta de Compensación de Trabajadores. La aplicación proporciona orientación paso a paso." },
    { q: "¿Qué países usan más este servicio?", a: "Es utilizado principalmente por extranjeros de China, Vietnam, EE.UU., Japón y Medio Oriente." }
  ],
  de: [
    { q: "Kann ich nur mit einem Foto Steuern einreichen?", a: "Ja, Belege sind nicht erforderlich. Sie können mit Kontoauszügen oder Transaktionsaufzeichnungen einreichen." },
    { q: "Können Ausländer diesen Service nutzen?", a: "Ja, wir unterstützen 8 Sprachen (Koreanisch, Englisch, vereinfachtes Chinesisch, traditionelles Chinesisch, Japanisch, Vietnamesisch, Spanisch, Deutsch)." },
    { q: "Brauche ich Steuerkenntnisse?", a: "Nein, KI kategorisiert und leitet automatisch, daher sind keine Steuerkenntnisse erforderlich." },
    { q: "Wie lange dauert die Verarbeitung?", a: "Die automatische Analyse ist innerhalb von 2-3 Minuten nach dem Hochladen von Fotos abgeschlossen." },
    { q: "Was kostet es?", a: "Der Grundservice ist kostenlos. Expertenprüfung verursacht separate Gebühren." },
    { q: "Wie verlängere ich mein Visum?", a: "Wählen Sie Ihren Visumstyp in der App und wir führen Sie automatisch durch erforderliche Dokumente und Verfahren." },
    { q: "Kann ich Benachrichtigungen über den Ablauf der Aufenthaltsdauer erhalten?", a: "Ja, wir senden automatisch Benachrichtigungen 90, 60 und 30 Tage vor Ablauf." },
    { q: "Wie stelle ich meine Ausländerregistrierungskarte erneut aus?", a: "Melden Sie sich sofort, wenn sie verloren geht/gestohlen wird, und beantragen Sie dann eine Neuausstellung. Wir führen Sie durch erforderliche Dokumente." },
    { q: "Kann ich mehrsprachige Krankenhäuser finden?", a: "Ja, Sie können mehrsprachige Krankenhäuser nach Region und medizinischer Abteilung suchen." },
    { q: "Was soll ich in einem Notfall tun?", a: "Rufen Sie zuerst 119 (Notfall) an und konsultieren Sie dann den Notfallleitfaden der App. Dolmetscherservice ist auch verfügbar." },
    { q: "Können Sie meinen Arbeitsvertrag überprüfen?", a: "Ja, laden Sie Ihren Vertrag hoch und KI analysiert automatisch riskante Klauseln." },
    { q: "Was ist, wenn Löhne nicht gezahlt werden?", a: "Wir führen Sie durch den Meldeprozess beim Arbeitsamt und verbinden Sie bei Bedarf mit einem Arbeitsanwalt." },
    { q: "Was ist der Mindestlohn?", a: "Ab 2024 sind es 9,860 Won pro Stunde. Verwenden Sie den Lohnrechner der App für eine genaue Berechnung." },
    { q: "Wie beantrage ich eine Unfallversicherung?", a: "Benachrichtigen Sie Ihren Arbeitgeber sofort nach einem Unfall und stellen Sie einen Antrag beim Arbeitnehmerentschädigungsausschuss. Die App bietet Schritt-für-Schritt-Anleitungen." },
    { q: "Welche Länder nutzen diesen Service am meisten?", a: "Es wird hauptsächlich von Ausländern aus China, Vietnam, USA, Japan und dem Nahen Osten genutzt." }
  ]
};

// 챗봇 렌더링 함수 (i18n 연동)
window.renderChatbot = function() {
  // i18n 시스템에서 현재 언어 가져오기
  const lang = (window.i18n && window.i18n.lang) || window.currentLang || localStorage.getItem('lang') || 'ko';
  const qaList = window.chatbotQA[lang] || window.chatbotQA['ko'];
  const container = document.getElementById('chatbotQuestions');
  
  if (!container) {
    console.warn('[chatbot] container not found, retrying...');
    return;
  }
  
  console.log('[chatbot] rendering with language:', lang);
  
  container.innerHTML = '';
  qaList.forEach((item, index) => {
    const faqItem = document.createElement('div');
    faqItem.className = 'faq-item';
    faqItem.innerHTML = `
      <button class="faq-question" onclick="window.toggleFAQ(${index})">
        <span>${item.q}</span>
        <i class="fas fa-chevron-down faq-icon"></i>
      </button>
      <div class="faq-answer" id="faq-answer-${index}">
        <p>${item.a}</p>
      </div>
    `;
    container.appendChild(faqItem);
  });
  
  console.log('[chatbot] rendered', qaList.length, 'questions');
};

// FAQ 토글 함수
window.toggleFAQ = function(index) {
  const answer = document.getElementById(`faq-answer-${index}`);
  const allAnswers = document.querySelectorAll('.faq-answer');
  const allIcons = document.querySelectorAll('.faq-icon');
  
  // 다른 FAQ 닫기
  allAnswers.forEach((ans, idx) => {
    if (idx !== index) {
      ans.classList.remove('active');
      allIcons[idx].style.transform = 'rotate(0deg)';
    }
  });
  
  // 현재 FAQ 토글
  answer.classList.toggle('active');
  const icon = allIcons[index];
  if (answer.classList.contains('active')) {
    icon.style.transform = 'rotate(180deg)';
  } else {
    icon.style.transform = 'rotate(0deg)';
  }
};

// DOM 로드 완료 후 초기화
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.renderChatbot);
} else {
  window.renderChatbot();
}

// 언어 변경 시 챗봇 자동 재렌더링 (i18n:changed 이벤트 구독)
document.addEventListener('i18n:changed', (e) => {
  const lang = e.detail.lang;
  console.log('[chatbot] language changed to:', lang, '- re-rendering...');
  
  // 100ms 지연 후 재렌더링 (i18n 적용 완료 보장)
  setTimeout(() => {
    window.renderChatbot();
  }, 100);
});
