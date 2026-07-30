/*==========================================================
                    LANGUAGE.JS
            STEP 1 - MODULE SETUP
==========================================================*/

/*
============================================================
                LANGUAGE CONFIGURATION
============================================================
*/

const LANGUAGE = {

    version : "1.0.0",

    debug : true,

    defaultLanguage : "en"

};


/*
============================================================
                LANGUAGE CONSTANTS
============================================================
*/

const LANGUAGE_CONSTANTS = {

    ENGLISH :

        "en",

    HINDI :

        "hi"

};


/*
============================================================
                INITIALIZATION
============================================================
*/

document.addEventListener(

    "DOMContentLoaded",

    () => {

        initializeLanguageModule();

        initializeLanguage();

    }

);


/*
============================================================
            INITIALIZE LANGUAGE MODULE
============================================================
*/


function initializeLanguage(){

    if(LANGUAGE.debug){

        languageLog(

            "Language Module Initialized"

        );

        showLanguageSettings();

        showTranslation(

            "buttons",

            "next"

        );

    }

    loadSavedLanguage();

    validateLanguage();

    translatePage();

    updateDynamicContent();

    initializeLanguageButton();
}





/*
============================================================
                DEBUG LOGGER
============================================================
*/

function languageLog(

    message,

    data = ""

){

    if(!LANGUAGE.debug){

        return;

    }

    console.group(

        "[LANGUAGE]"

    );

    console.log(message);

    if(data !== ""){

        console.log(data);

    }

    console.groupEnd();

}





/*==========================================================
            STEP 2 - LANGUAGE CONFIGURATION
==========================================================*/

/*
============================================================
            SUPPORTED LANGUAGES
============================================================
*/

const SUPPORTED_LANGUAGES = {

    en : {

        code : "en",

        name : "English",

        nativeName : "English"

    },

    hi : {

        code : "hi",

        name : "Hindi",

        nativeName : "हिन्दी"

    }

};


/*
============================================================
            LANGUAGE SETTINGS
============================================================
*/

const LANGUAGE_SETTINGS = {

    current :

        LANGUAGE.defaultLanguage,

    fallback :

        LANGUAGE.defaultLanguage,

    available :

        Object.keys(

            SUPPORTED_LANGUAGES

        )

};





/*
============================================================
            GET CURRENT LANGUAGE
============================================================
*/

function getCurrentLanguage(){

    return LANGUAGE_SETTINGS.current;

}




/*
============================================================
            SET CURRENT LANGUAGE
============================================================
*/

function setCurrentLanguage(

    language

){

    if(

        !LANGUAGE_SETTINGS.available.includes(

            language

        )

    ){

        language =

            LANGUAGE_SETTINGS.fallback;

    }

    LANGUAGE_SETTINGS.current =

        language;

    languageLog(

        "Current Language",

        language

    );

}





/*
============================================================
            IS LANGUAGE SUPPORTED
============================================================
*/

function isLanguageSupported(

    language

){

    return LANGUAGE_SETTINGS.available.includes(

        language

    );

}





/*
============================================================
            SHOW LANGUAGE SETTINGS
============================================================
*/

function showLanguageSettings(){

    languageLog(

        "Language Settings",

        LANGUAGE_SETTINGS

    );

}





/*==========================================================
            STEP 3 - TRANSLATION DICTIONARY
==========================================================*/

/*
============================================================
            TRANSLATION DICTIONARY
============================================================
*/

const TRANSLATIONS = {

    /*
    ========================================================
                    ENGLISH
    ========================================================
    */

    en : {

        /*
        ----------------------------------------------------
                        LABELS
        ----------------------------------------------------
        */

        labels : {

            fullName : "Full Name",

            gender : "Gender",

            dateOfBirth : "Date of Birth",

            height : "Height",

            weight : "Weight",

            religion : "Religion",

            caste : "Caste",

            education : "Education",

            occupation : "Occupation",

            annualIncome : "Annual Income",

            fatherName : "Father's Name",

            motherName : "Mother's Name",

            address : "Address",

            mobile : "Mobile Number",

            email : "Email Address"

        },

        /*
        ----------------------------------------------------
                        BUTTONS
        ----------------------------------------------------
        */

        buttons : {

            next : "Next",

            previous : "Previous",

            submit : "Submit",

            preview : "Preview",

            generatePDF : "Download PDF",

            print : "Print",

            share : "Share",

            exportDraft : "Export Draft",

            importDraft : "Import Draft",

            clearDraft : "Clear Draft"

        },

        /*
        ----------------------------------------------------
                        MESSAGES
        ----------------------------------------------------
        */

        messages : {

            ready :

                "Ready to Generate",

            review :

                "Please review all the information carefully before generating your biodata.",

            success :

                "Biodata generated successfully.",

            error :

                "Something went wrong."

            enterFullName :

                "Enter Full Name"

        }

    },

    /*
    ========================================================
                    HINDI
    ========================================================
    */

    hi : {

        /*
        ----------------------------------------------------
                        LABELS
        ----------------------------------------------------
        */

        labels : {

            fullName : "पूरा नाम",

            gender : "लिंग",

            dateOfBirth : "जन्म तिथि",

            height : "लंबाई",

            weight : "वजन",

            religion : "धर्म",

            caste : "जाति",

            education : "शिक्षा",

            occupation : "व्यवसाय",

            annualIncome : "वार्षिक आय",

            fatherName : "पिता का नाम",

            motherName : "माता का नाम",

            address : "पता",

            mobile : "मोबाइल नंबर",

            email : "ईमेल पता"

        },

        /*
        ----------------------------------------------------
                        BUTTONS
        ----------------------------------------------------
        */

        buttons : {

            next : "आगे",

            previous : "पीछे",

            submit : "जमा करें",

            preview : "पूर्वावलोकन",

            generatePDF : "पीडीएफ डाउनलोड करें",

            print : "प्रिंट",

            share : "साझा करें",

            exportDraft : "ड्राफ्ट निर्यात करें",

            importDraft : "ड्राफ्ट आयात करें",

            clearDraft : "ड्राफ्ट हटाएँ"

        },

        /*
        ----------------------------------------------------
                        MESSAGES
        ----------------------------------------------------
        */

        messages : {

            ready :

                "जनरेट करने के लिए तैयार",

            review :

                "बायोडाटा बनाने से पहले कृपया सभी जानकारी ध्यानपूर्वक जाँच लें।",

            success :

                "बायोडाटा सफलतापूर्वक तैयार हो गया।",

            error :

                "कुछ गलत हो गया।"

            enterFullName :

                "पूरा नाम दर्ज करें"

        }

    }

};






/*
============================================================
            GET TRANSLATION
============================================================
*/

function getTranslation(

    category,

    key

){

    try{

        const language =

            getCurrentLanguage();

        if(

            TRANSLATIONS[language]?.[category]?.[key]

        ){

            return TRANSLATIONS[language][category][key];

        }

        if(

            TRANSLATIONS[LANGUAGE_SETTINGS.fallback]?.[category]?.[key]

        ){

            handleMissingTranslation(

                category,

                key

            );

            return TRANSLATIONS[LANGUAGE_SETTINGS.fallback][category][key];

        }

        handleMissingTranslation(

            category,

            key

        );

        return key;

    }

    catch(error){

        handleLanguageError(

            "Translation Failed",

            error

        );

        return key;

    }

}




/*
============================================================
            SHOW TRANSLATION
============================================================
*/

function showTranslation(

    category,

    key

){

    languageLog(

        key,

        getTranslation(

            category,

            key

        )

    );

}






/*==========================================================
            STEP 4 - TRANSLATE TEXT
==========================================================*/

/*
============================================================
            TRANSLATE ELEMENT
============================================================
*/

function translateElement(element){

    const category = element.dataset.translateCategory;

    const key = element.dataset.translateKey;

    if(!category || !key){

        return;

    }

    element.textContent = getTranslation(

        category,

        key

    );

}





/*
============================================================
            TRANSLATE ALL ELEMENTS
============================================================
*/

function translatePage(){

    const elements = document.querySelectorAll(

        "[data-translate-key]"

    );

    elements.forEach(element => {

        translateElement(

            element

        );

    });

    translateForm();

    languageLog(

        "Page Translated",

        getCurrentLanguage()

    );

}



/*
============================================================
            REFRESH TRANSLATIONS
============================================================
*/

function refreshTranslations(){

    translatePage();

}



/*
============================================================
            TRANSLATE SINGLE ELEMENT
============================================================
*/

function updateTranslation(

    selector,

    category,

    key

){

    const element = document.querySelector(

        selector

    );

    if(!element){

        return;

    }

    element.textContent = getTranslation(

        category,

        key

    );

}





/*==========================================================
            STEP 5 - TRANSLATE FORM
==========================================================*/

/*
============================================================
            TRANSLATE LABELS
============================================================
*/

function translateLabels(){

    const labels = document.querySelectorAll(

        "[data-translate-label]"

    );

    labels.forEach(label => {

        const category =

            label.dataset.translateCategory;

        const key =

            label.dataset.translateLabel;

        if(category && key){

            label.textContent = getTranslation(

                category,

                key

            );

        }

    });

}







/*
============================================================
            TRANSLATE PLACEHOLDERS
============================================================
*/

function translatePlaceholders(){

    const inputs = document.querySelectorAll(

        "[data-placeholder-key]"

    );

    inputs.forEach(input => {

        const category =

            input.dataset.translateCategory;

        const key =

            input.dataset.placeholderKey;

        if(category && key){

            input.placeholder = getTranslation(

                category,

                key

            );

        }

    });

}



/*
============================================================
            TRANSLATE SELECT OPTIONS
============================================================
*/

function translateSelectOptions(){

    const options = document.querySelectorAll(

        "option[data-translate-key]"

    );

    options.forEach(option => {

        const category =

            option.dataset.translateCategory;

        const key =

            option.dataset.translateKey;

        if(category && key){

            option.textContent = getTranslation(

                category,

                key

            );

        }

    });

}




/*
============================================================
            TRANSLATE FORM
============================================================
*/

function translateForm(){

    translateLabels();

    translatePlaceholders();

    translateSelectOptions();

    languageLog(

        "Form Translated"

    );

}





/*==========================================================
            STEP 6 - LANGUAGE SWITCHER
==========================================================*/

/*
============================================================
            CHANGE LANGUAGE
============================================================
*/

function changeLanguage(language){

    if(

        !isLanguageSupported(language)

    ){

        language =

            LANGUAGE_SETTINGS.fallback;

    }

    setCurrentLanguage(

        language

    );

    saveLanguage();

    translatePage();

    updateDynamicContent();

    updateLanguageButton();

    languageLog(

        "Language Changed",

        language

    );

}





/*
============================================================
            TOGGLE LANGUAGE
============================================================
*/

function toggleLanguage(){

    const language =

        getCurrentLanguage() === "en"

            ? "hi"

            : "en";

    changeLanguage(

        language

    );

}





/*
============================================================
            UPDATE LANGUAGE BUTTON
============================================================
*/

function updateLanguageButton(){

    const button = document.getElementById(

        "languageBtn"

    );

    if(!button){

        return;

    }

    button.textContent =

        getCurrentLanguage() === "en"

            ? "हिन्दी"

            : "English";

}




/*
============================================================
            INITIALIZE LANGUAGE BUTTON
============================================================
*/

function initializeLanguageButton(){

    const button = document.getElementById(

        "languageBtn"

    );

    if(!button){

        return;

    }

    button.addEventListener(

        "click",

        toggleLanguage

    );

    updateLanguageButton();

}




/*==========================================================
            STEP 7 - SAVE LANGUAGE
==========================================================*/

/*
============================================================
            SAVE LANGUAGE
============================================================
*/

function saveLanguage(){

    localStorage.setItem(

        "language",

        getCurrentLanguage()

    );

    languageLog(

        "Language Saved",

        getCurrentLanguage()

    );

}





/*
============================================================
            LOAD SAVED LANGUAGE
============================================================
*/

function loadSavedLanguage(){

    const savedLanguage =

        localStorage.getItem(

            "language"

        );

    if(

        savedLanguage &&

        isLanguageSupported(

            savedLanguage

        )

    ){

        setCurrentLanguage(

            savedLanguage

        );

    }

    else{

        setCurrentLanguage(

            LANGUAGE.defaultLanguage

        );

    }

}




/*==========================================================
            STEP 8 - DYNAMIC UPDATES
==========================================================*/

/*
============================================================
            UPDATE PREVIEW
============================================================
*/

function updatePreviewLanguage(){

    if(

        typeof updatePreview === "function"

    ){

        updatePreview();

    }

    languageLog(

        "Preview Updated"

    );

}




/*
============================================================
            UPDATE NAVIGATION
============================================================
*/

function updateNavigationLanguage(){

    translatePage();

    languageLog(

        "Navigation Updated"

    );

}






/*
============================================================
            UPDATE BUTTONS
============================================================
*/

function updateButtonsLanguage(){

    translatePage();

    languageLog(

        "Buttons Updated"

    );

}







/*
============================================================
            UPDATE FOOTER
============================================================
*/

function updateFooterLanguage(){

    translatePage();

    languageLog(

        "Footer Updated"

    );

}



/*
============================================================
            UPDATE TOAST
============================================================
*/

function updateToastLanguage(){

    const toast = document.querySelector(

        "#appToast .toast-body"

    );

    if(!toast){

        return;

    }

    toast.textContent = getTranslation(

        "messages",

        "success"

    );

}



/*
============================================================
            UPDATE ALL DYNAMIC CONTENT
============================================================
*/

function updateDynamicContent(){

    updatePreviewLanguage();

    updateNavigationLanguage();

    updateButtonsLanguage();

    updateFooterLanguage();

    updateToastLanguage();

    languageLog(

        "Dynamic Content Updated"

    );

}





/*==========================================================
            STEP 9 - ERROR HANDLING
==========================================================*/

/*
============================================================
            LANGUAGE ERROR HANDLER
============================================================
*/

function handleLanguageError(

    message,

    error = null

){

    console.error(

        "[LANGUAGE ERROR]",

        message,

        error

    );

}



/*
============================================================
            MISSING TRANSLATION
============================================================
*/

function handleMissingTranslation(

    category,

    key

){

    console.warn(

        "[LANGUAGE]",

        "Missing Translation:",

        category,

        key

    );

}




/*
============================================================
            VALIDATE LANGUAGE
============================================================
*/

function validateLanguage(){

    const language =

        getCurrentLanguage();

    if(

        !isLanguageSupported(

            language

        )

    ){

        handleLanguageError(

            "Unsupported Language"

        );

        setCurrentLanguage(

            LANGUAGE.defaultLanguage

        );

    }

}




/*==========================================================
            STEP 10 - FINAL CLEANUP
==========================================================*/

/*
============================================================
                MODULE INFORMATION
============================================================
*/

const LANGUAGE_MODULE = {

    name : "Language Module",

    version : "1.0.0",

    author : "Mayank Kumar",

    initialized : false

};


/*
============================================================
                LANGUAGE SUMMARY
============================================================
*/

function languageSummary(){

    languageLog(

        "Language Module",

        {

            version :

                LANGUAGE_MODULE.version,

            currentLanguage :

                getCurrentLanguage(),

            defaultLanguage :

                LANGUAGE.defaultLanguage,

            supportedLanguages :

                LANGUAGE_SETTINGS.available,

            initialized :

                LANGUAGE_MODULE.initialized

        }

    );

}


/*
============================================================
            INITIALIZE LANGUAGE MODULE
============================================================
*/

function initializeLanguageModule(){

    try{

        LANGUAGE_MODULE.initialized = true;

        languageSummary();

    }

    catch(error){

        handleLanguageError(

            "Unable to initialize language module.",

            error

        );

    }

}




