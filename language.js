// Language translations
const translations = {
    en: {
        home: "Home",
        about: "About",
        services: "Services",
        projects: "Projects",
        certificates: "Certificates",
        contact: "Contact",
        darkMode: "Dark Mode",
        downloadResume: "Download Resume",
        aboutMe: "ABOUT Me",
        frontendDev: "Frontend Developer",
        aboutText: "My focus is on designing and building the user interface and experience of websites or web applications. This includes working with HTML, CSS, JavaScript to create interactive and visually appealing websites.",
        readMore: "Read more",
        myServices: "My Services",
        latestProjects: "Latest Projects",
        myCertificates: "My Certificates",
        contactMe: "Contact Me",
        fullName: "Full Name",
        emailAddress: "Email Address",
        mobileNumber: "Mobile Number",
        emailSubject: "Email Subject",
        yourMessage: "Your Message",
        submitForm: "Submit Form",
        viewMore: "View More",
        copyright: "Copyright © 2025 by @sachinjangir204 | All Rights Reserved.",
        portfolio: "Portfolio",
        greeting: "Hi, Myself",
        iAm: "And I'm a",
        homeDescription: "Crafting digital experiences at the intersection of design and code. \"Creating captivating user interfaces with cutting-edge technology and elegant design.\"",
        excelMastery: "Excel Mastery",
        powerQueryMastery: "Power Query Mastery",
        aiIntegration: "AI Integration in MS Office",
        powerBiMastery: "Power BI Mastery",
        sqlMastery: "SQL Mastery",
        pythonDev: "Python Development",
        office365Mastery: "Office 365 Mastery",
        powerpointMastery: "PowerPoint Mastery",
        tallyGst: "Tally Prime with GST",
        excelDesc: "Providing advanced Excel solutions, including data analysis, automation with macros, and complex formula creation to streamline your business processes.",
        powerQueryDesc: "Transform and analyze your data efficiently with Power Query, enabling seamless data integration and preparation for insightful reporting.",
        aiDesc: "Enhance your productivity with AI-powered tools in MS Office, offering smart suggestions and automation to optimize your workflow.",
        powerBiDesc: "Create interactive and dynamic dashboards with Power BI, providing real-time insights and data visualization to drive business decisions.",
        sqlDesc: "Design and manage efficient databases with SQL, ensuring data integrity and performance optimization for your applications.",
        pythonDesc: "Develop robust and scalable applications using Python, leveraging its extensive libraries for data science, web development, and automation.",
        office365Desc: "Optimize your business operations with Office 365, offering cloud-based solutions for collaboration, communication, and productivity.",
        powerpointDesc: "Create compelling presentations with PowerPoint, utilizing advanced features to engage your audience and convey your message effectively.",
        tallyDesc: "Manage your financial records and GST compliance efficiently with Tally Prime, ensuring accurate accounting and reporting.",
        viewMoreServices: "View More Services",
        viewMoreCertificates: "View More Certificates"
    },
    hi: {
        home: "होम",
        about: "परिचय",
        services: "सेवाएं",
        projects: "प्रोजेक्ट्स",
        certificates: "प्रमाणपत्र",
        contact: "संपर्क",
        darkMode: "डार्क मोड",
        downloadResume: "रेज्यूमे डाउनलोड करें",
        aboutMe: "मेरे बारे में",
        frontendDev: "फ्रंटएंड डेवलपर",
        aboutText: "मेरा फोकस वेबसाइट्स या वेब एप्लिकेशन के यूजर इंटरफेस और एक्सपीरियंस को डिजाइन और बनाने पर है। इसमें HTML, CSS, JavaScript का उपयोग करके इंटरैक्टिव और आकर्षक वेबसाइट बनाना शामिल है।",
        readMore: "और पढ़ें",
        myServices: "मेरी सेवाएं",
        latestProjects: "नवीनतम प्रोजेक्ट्स",
        myCertificates: "मेरे प्रमाणपत्र",
        contactMe: "संपर्क करें",
        fullName: "पूरा नाम",
        emailAddress: "ईमेल पता",
        mobileNumber: "मोबाइल नंबर",
        emailSubject: "ईमेल विषय",
        yourMessage: "आपका संदेश",
        submitForm: "फॉर्म जमा करें",
        viewMore: "और देखें",
        copyright: "कॉपीराइट © 2025 @sachinjangir204 | सर्वाधिकार सुरक्षित",
        portfolio: "पोर्टफोलियो",
        greeting: "नमस्ते, मैं",
        iAm: "और मैं एक",
        homeDescription: "डिज़ाइन और कोड के संगम पर डिजिटल अनुभवों का निर्माण। \"उन्नत तकनीक और सुंदर डिज़ाइन के साथ आकर्षक यूजर इंटरफेस बनाना।\"",
        excelMastery: "एक्सेल विशेषज्ञता",
        powerQueryMastery: "पावर क्वेरी विशेषज्ञता",
        aiIntegration: "एमएस ऑफिस में एआई एकीकरण",
        powerBiMastery: "पावर बीआई विशेषज्ञता",
        sqlMastery: "एसक्यूएल विशेषज्ञता",
        pythonDev: "पायथन डेवलपमेंट",
        office365Mastery: "ऑफिस 365 विशेषज्ञता",
        powerpointMastery: "पावरपॉइंट विशेषज्ञता",
        tallyGst: "टैली प्राइम और जीएसटी",
        excelDesc: "उन्नत एक्सेल समाधान प्रदान करना, जिसमें डेटा विश्लेषण, मैक्रोज के साथ स्वचालन, और आपके व्यवसाय प्रक्रियाओं को सुव्यवस्थित करने के लिए जटिल फॉर्मूला निर्माण शामिल है।",
        powerQueryDesc: "पावर क्वेरी के साथ अपने डेटा को कुशलतापूर्वक परिवर्तित और विश्लेषण करें, सहज डेटा एकीकरण और अंतर्दृष्टिपूर्ण रिपोर्टिंग के लिए तैयारी को सक्षम करें।",
        aiDesc: "एमएस ऑफिस में एआई-संचालित टूल्स के साथ अपनी उत्पादकता बढ़ाएं, आपके कार्यप्रवाह को अनुकूलित करने के लिए स्मार्ट सुझाव और स्वचालन प्रदान करें।",
        powerBiDesc: "पावर बीआई के साथ इंटरैक्टिव और डायनामिक डैशबोर्ड बनाएं, व्यावसायिक निर्णयों को चलाने के लिए रीयल-टाइम अंतर्दृष्टि और डेटा विजुअलाइजेशन प्रदान करें।",
        sqlDesc: "एसक्यूएल के साथ कुशल डेटाबेस डिजाइन और प्रबंधन करें, आपके एप्लिकेशन के लिए डेटा अखंडता और प्रदर्शन अनुकूलन सुनिश्चित करें।",
        pythonDesc: "पायथन का उपयोग करके मजबूत और स्केलेबल एप्लिकेशन विकसित करें, डेटा साइंस, वेब डेवलपमेंट और स्वचालन के लिए इसके व्यापक लाइब्रेरी का लाभ उठाएं।",
        office365Desc: "ऑफिस 365 के साथ अपने व्यवसाय संचालन को अनुकूलित करें, सहयोग, संचार और उत्पादकता के लिए क्लाउड-आधारित समाधान प्रदान करें।",
        powerpointDesc: "पावरपॉइंट के साथ आकर्षक प्रस्तुतियां बनाएं, अपने दर्शकों को आकर्षित करने और अपना संदेश प्रभावी ढंग से पहुंचाने के लिए उन्नत सुविधाओं का उपयोग करें।",
        tallyDesc: "टैली प्राइम के साथ अपने वित्तीय रिकॉर्ड और जीएसटी अनुपालन को कुशलतापूर्वक प्रबंधित करें, सटीक लेखांकन और रिपोर्टिंग सुनिश्चित करें।",
        viewMoreServices: "और सेवाएं देखें",
        viewMoreCertificates: "और प्रमाणपत्र देखें"
    }
};

// Function to change language
function changeLanguage(language) {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    const placeholdersToTranslate = document.querySelectorAll('[data-translate-placeholder]');

    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    placeholdersToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[language] && translations[language][key]) {
            element.placeholder = translations[language][key];
        }
    });
}

// Initialize language based on stored preference or default to English
document.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('preferredLanguage') || 'en';
    document.getElementById('languageSelect').value = storedLang;
    changeLanguage(storedLang);
}); 