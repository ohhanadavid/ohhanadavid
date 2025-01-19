import { useState } from 'react';
import type { Language } from '../../types';
import { useTranslation } from 'react-i18next';
import { GB, ES, IL } from 'country-flag-icons/react/3x2';

const useLanguage = () => {
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const { i18n } = useTranslation();

    const languageIcons = {
        en: GB,
        es: ES,
        he: IL,
    };

    const changeLanguage = (language: Language) => {
        i18n.changeLanguage(language);
        document.documentElement.lang = language;
        setIsLanguageMenuOpen(false);
    };

    const toggleLanguage = () => {
        setIsLanguageMenuOpen(prevIsLanguageMenuOpen => !prevIsLanguageMenuOpen)
    }

    return { isLanguageMenuOpen, changeLanguage, toggleLanguage, languageIcons }
}

export default useLanguage