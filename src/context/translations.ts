export type Language = 'en' | 'hi';

const enTranslations = {
  // Brand
  brandName: 'MedicineBridge',
  tagline: 'Understand your prescription. Find your medicine.',

  // Nav
  nav: {
    home: 'Home',
    upload: 'Upload Prescription',
    search: 'Search Medicine',
    priceComparison: 'Price Comparison',
    nearbySources: 'Nearby Sources',
    dashboard: 'Dashboard',
  },

  // Home / Hero
  hero: {
    heading: 'Understand Your Prescription. Find Your Medicine.',
    description:
      'Upload your prescription and let AI help identify medicines, check information, compare reference prices and find nearby medicine sources.',
    uploadBtn: 'Upload Prescription',
    searchBtn: 'Search Medicine',
    safetyNote:
      'MedicineBridge provides information and prescription-reading assistance only. Always verify medicines, dosage and treatment decisions with a qualified doctor or pharmacist.',
  },

  // How it works
  howItWorks: {
    title: 'How It Works',
    step1Title: 'Upload',
    step1Desc: 'Upload a clear photo of your prescription.',
    step2Title: 'AI Reads',
    step2Desc: 'AI identifies medicine names, strength and quantity.',
    step3Title: 'Check',
    step3Desc: 'Check medicine information and reference prices.',
    step4Title: 'Find',
    step4Desc: 'Find nearby medicine sources.',
  },

  // Upload page
  upload: {
    title: 'Upload Prescription',
    subtitle: 'Upload a clear photo of your prescription for AI analysis.',
    dropzone: 'Drag and drop your prescription image here',
    or: 'or',
    chooseFile: 'Choose Image',
    hint: 'For better results, upload a clear and well-lit prescription.',
    analyze: 'Analyze Prescription',
    remove: 'Remove Image',
    loading1: 'Reading your prescription...',
    loading2: 'Checking medicine names...',
    loading3: 'Almost done...',
    noImage: 'Please select an image first.',
    unclearTitle: 'Medicine name unclear',
    unclearDesc: 'Please check the prescription or confirm with your doctor/pharmacist.',
    checkAgain: 'Check Again',
    enterManually: 'Enter Medicine Manually',
    badImage: 'The image is not clear enough. Please upload a clearer photo.',
    readFail: "We couldn't clearly read this prescription. Please check it manually.",
    genericError: 'Something went wrong. Please try again.',
    resultsTitle: 'Prescription Results',
    resultsSubtitle: 'Here are the medicines we found in your prescription.',
    uploadAnother: 'Upload Another',
  },

  // Medicine results / cards
  medicine: {
    name: 'Medicine Name',
    strength: 'Strength',
    form: 'Form',
    quantity: 'Quantity',
    genericName: 'Generic Name',
    manufacturer: 'Manufacturer',
    referencePrice: 'Reference Price',
    source: 'Source',
    lastUpdated: 'Last Updated',
    clearlyRead: 'Clearly Read',
    needsVerification: 'Needs Verification',
    viewDetails: 'View Details',
    comparePrices: 'Compare Prices',
    findNearby: 'Find Nearby',
    checkTitle: 'MedicineBridge Check',
    nameIdentified: 'Medicine name identified',
    strengthIdentified: 'Strength identified',
    quantityIdentified: 'Quantity identified',
    needsVerificationShort: 'Needs verification',
    notFound: "We couldn't find this medicine in our current database.",
    noResults: 'No medicines found. Try uploading a prescription or searching.',
  },

  // Search page
  search: {
    title: 'Search for a Medicine',
    placeholder: 'Type medicine name...',
    searchBtn: 'Search',
    noResults: 'No medicines found. Try a different name.',
    demoLabel: 'Demo Data',
  },

  // Price comparison
  price: {
    title: 'Price Comparison',
    subtitle: 'Compare reference prices from different sources.',
    selectMedicine: 'Select a medicine to compare',
    referencePrice: 'Reference Price',
    source: 'Source',
    lastUpdated: 'Last Updated',
    demoLabel: 'Demo Data',
    compareBeforeYouGo: 'Compare Before You Go',
    nearbySources: 'Nearby Sources',
    distance: 'Distance',
    map: 'Map',
    noMedicineSelected: 'Choose a medicine from the search page or results to see price comparison.',
  },

  // Nearby sources
  nearby: {
    title: 'Find Medicine Near You',
    subtitle: 'Find nearby pharmacies and Jan Aushadhi Kendras.',
    requestLocation: 'Use My Location',
    locationDenied: 'Location access denied. Showing demo locations instead.',
    demoLabel: 'Demo Data',
    pharmacy: 'Pharmacy',
    janAushadhi: 'Jan Aushadhi Kendra',
    distance: 'Distance',
    address: 'Address',
    viewMap: 'View Map',
    noResults: 'No nearby sources found for this medicine.',
    selectMedicine: 'Search for a medicine first to find nearby sources.',
  },

  // Dashboard
  dashboard: {
    title: 'Dashboard',
    recentPrescriptions: 'Recent Prescriptions',
    date: 'Date',
    numMedicines: 'Medicines',
    viewResults: 'View Results',
    noPrescriptions: 'No prescriptions uploaded yet.',
    recentSearches: 'Recent Searches',
    noSearches: 'No recent searches.',
    savedMedicines: 'Saved Medicines',
    noSaved: 'No saved medicines yet.',
    medicineName: 'Medicine Name',
    basicInfo: 'Basic Information',
  },

  // Footer
  footer: {
    disclaimer:
      'MedicineBridge provides information and prescription-reading assistance only. Always verify medicines, dosage and treatment decisions with a qualified doctor or pharmacist.',
    rights: 'All rights reserved.',
  },

  // Common
  common: {
    demoData: 'Demo Data',
    loading: 'Loading...',
    back: 'Back',
    close: 'Close',
  },
};

export type TranslationKeys = typeof enTranslations;

const hiTranslations: TranslationKeys = {
  // Brand
  brandName: 'MedicineBridge',
  tagline: 'अपना प्रिस्क्रिप्शन समझें। अपनी दवा खोजें।',

  // Nav
  nav: {
    home: 'होम',
    upload: 'प्रिस्क्रिप्शन अपलोड करें',
    search: 'दवा खोजें',
    priceComparison: 'कीमतों की तुलना करें',
    nearbySources: 'आसपास स्रोत',
    dashboard: 'डैशबोर्ड',
  },

  // Home / Hero
  hero: {
    heading: 'अपना प्रिस्क्रिप्शन समझें। अपनी दवा खोजें।',
    description:
      'अपना प्रिस्क्रिप्शन अपलोड करें और AI दवाओं की पहचान, जानकारी जांच, कीमतों की तुलना और आसपास दवा स्रोत खोजने में सहायता करेगा।',
    uploadBtn: 'प्रिस्क्रिप्शन अपलोड करें',
    searchBtn: 'दवा खोजें',
    safetyNote:
      'MedicineBridge केवल जानकारी और प्रिस्क्रिप्शन पढ़ने में सहायता करता है। दवा, खुराक और उपचार से जुड़ी जानकारी की पुष्टि डॉक्टर या फार्मासिस्ट से करें।',
  },

  // How it works
  howItWorks: {
    title: 'यह कैसे काम करता है',
    step1Title: 'अपलोड करें',
    step1Desc: 'अपने प्रिस्क्रिप्शन की साफ तस्वीर अपलोड करें।',
    step2Title: 'AI पढ़ता है',
    step2Desc: 'AI दवाओं के नाम, शक्ति और मात्रा पहचानता है।',
    step3Title: 'जांच करें',
    step3Desc: 'दवा की जानकारी और संदर्भ कीमतें जांचें।',
    step4Title: 'खोजें',
    step4Desc: 'आसपास दवा स्रोत खोजें।',
  },

  // Upload page
  upload: {
    title: 'प्रिस्क्रिप्शन अपलोड करें',
    subtitle: 'AI विश्लेषण के लिए अपने प्रिस्क्रिप्शन की साफ तस्वीर अपलोड करें।',
    dropzone: 'अपनी प्रिस्क्रिप्शन तस्वीर यहाँ खींचें और छोड़ें',
    or: 'या',
    chooseFile: 'तस्वीर चुनें',
    hint: 'बेहतर परिणाम के लिए, साफ और अच्छी रोशनी वाला प्रिस्क्रिप्शन अपलोड करें।',
    analyze: 'प्रिस्क्रिप्शन विश्लेषण करें',
    remove: 'तस्वीर हटाएं',
    loading1: 'आपका प्रिस्क्रिप्शन पढ़ा जा रहा है...',
    loading2: 'दवाओं के नाम जांचे जा रहे हैं...',
    loading3: 'लगभग तैयार...',
    noImage: 'कृपया पहले एक तस्वीर चुनें।',
    unclearTitle: 'दवा का नाम स्पष्ट नहीं है',
    unclearDesc: 'कृपया प्रिस्क्रिप्शन जांचें या डॉक्टर/फार्मासिस्ट से पुष्टि करें।',
    checkAgain: 'फिर से जांचें',
    enterManually: 'दवा की जानकारी स्वयं भरें',
    badImage: 'तस्वीर पर्याप्त साफ नहीं है। कृपया एक साफ तस्वीर अपलोड करें।',
    readFail: 'हम इस प्रिस्क्रिप्शन को स्पष्ट रूप से नहीं पढ़ सके। कृपया स्वयं जांचें।',
    genericError: 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।',
    resultsTitle: 'प्रिस्क्रिप्शन परिणाम',
    resultsSubtitle: 'आपके प्रिस्क्रिप्शन में मिली दवाएं यहाँ हैं।',
    uploadAnother: 'एक और अपलोड करें',
  },

  // Medicine results / cards
  medicine: {
    name: 'दवा का नाम',
    strength: 'शक्ति',
    form: 'रूप',
    quantity: 'मात्रा',
    genericName: 'सामान्य नाम',
    manufacturer: 'निर्माता',
    referencePrice: 'संदर्भ कीमत',
    source: 'स्रोत',
    lastUpdated: 'अंतिम अपडेट',
    clearlyRead: 'स्पष्ट रूप से पढ़ा',
    needsVerification: 'जांच की जरूरत है',
    viewDetails: 'जानकारी देखें',
    comparePrices: 'कीमतों की तुलना करें',
    findNearby: 'आसपास खोजें',
    checkTitle: 'MedicineBridge जांच',
    nameIdentified: 'दवा का नाम पहचाना गया',
    strengthIdentified: 'शक्ति पहचानी गई',
    quantityIdentified: 'मात्रा पहचानी गई',
    needsVerificationShort: 'जांच की जरूरत है',
    notFound: 'यह दवा हमारे वर्तमान डेटाबेस में नहीं मिली।',
    noResults: 'कोई दवा नहीं मिली। प्रिस्क्रिप्शन अपलोड करें या खोजें।',
  },

  // Search page
  search: {
    title: 'दवा खोजें',
    placeholder: 'दवा का नाम लिखें...',
    searchBtn: 'खोजें',
    noResults: 'कोई दवा नहीं मिली। दूसरा नाम आजमाएं।',
    demoLabel: 'डेमो डेटा',
  },

  // Price comparison
  price: {
    title: 'कीमतों की तुलना करें',
    subtitle: 'विभिन्न स्रोतों से संदर्भ कीमतों की तुलना करें।',
    selectMedicine: 'तुलना के लिए दवा चुनें',
    referencePrice: 'संदर्भ कीमत',
    source: 'स्रोत',
    lastUpdated: 'अंतिम अपडेट',
    demoLabel: 'डेमो डेटा',
    compareBeforeYouGo: 'जाने से पहले तुलना करें',
    nearbySources: 'आसपास स्रोत',
    distance: 'दूरी',
    map: 'नक्शा',
    noMedicineSelected: 'कीमत तुलना देखने के लिए खोज पृष्ठ या परिणामों से दवा चुनें।',
  },

  // Nearby sources
  nearby: {
    title: 'अपने पास दवा खोजें',
    subtitle: 'आसपास फार्मेसी और जन औषधि केंद्र खोजें।',
    requestLocation: 'मेरी स्थिति उपयोग करें',
    locationDenied: 'स्थान अनुमति अस्वीकृत। डेमो स्थान दिखाए जा रहे हैं।',
    demoLabel: 'डेमो डेटा',
    pharmacy: 'फार्मेसी',
    janAushadhi: 'जन औषधि केंद्र',
    distance: 'दूरी',
    address: 'पता',
    viewMap: 'नक्शा देखें',
    noResults: 'इस दवा के लिए कोई आसपास स्रोत नहीं मिला।',
    selectMedicine: 'आसपास स्रोत खोजने के लिए पहले दवा खोजें।',
  },

  // Dashboard
  dashboard: {
    title: 'डैशबोर्ड',
    recentPrescriptions: 'हाल के प्रिस्क्रिप्शन',
    date: 'तारीख',
    numMedicines: 'दवाएं',
    viewResults: 'परिणाम देखें',
    noPrescriptions: 'अभी तक कोई प्रिस्क्रिप्शन अपलोड नहीं किया गया।',
    recentSearches: 'हाल की खोजें',
    noSearches: 'कोई हाल की खोज नहीं।',
    savedMedicines: 'सहेजी गई दवाएं',
    noSaved: 'अभी तक कोई दवा सहेजी नहीं गई।',
    medicineName: 'दवा का नाम',
    basicInfo: 'मूल जानकारी',
  },

  // Footer
  footer: {
    disclaimer:
      'MedicineBridge केवल जानकारी और प्रिस्क्रिप्शन पढ़ने में सहायता करता है। दवा, खुराक और उपचार से जुड़ी जानकारी की पुष्टि डॉक्टर या फार्मासिस्ट से करें।',
    rights: 'सर्वाधिकार सुरक्षित।',
  },

  // Common
  common: {
    demoData: 'डेमो डेटा',
    loading: 'लोड हो रहा है...',
    back: 'वापस',
    close: 'बंद करें',
  },
};

export const translations: Record<Language, TranslationKeys> = {
  en: enTranslations,
  hi: hiTranslations,
};
