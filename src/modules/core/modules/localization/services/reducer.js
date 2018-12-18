import { languages, localizationReducerFactory } from '../dependencies';

const getInitialLanguage = () => {
    let language = languages[0];
    const lang = window.navigator.language;
    const langSplitted = lang.split('-')[0];

    if (languages.includes(lang)) {
        language = lang;
    } else if (languages.includes(langSplitted)) {
        language = langSplitted;
    }

    return language;
};

const language = getInitialLanguage();

export default localizationReducerFactory(language);
