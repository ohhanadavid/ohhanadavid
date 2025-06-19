import { useState } from 'react';
import type { Language } from '../../types';

import { GB,  IL } from 'country-flag-icons/react/3x2';

const useCV = () => {
    const [isCVMenuOpen, setIsCVMenuOpen] = useState(false);
    

    const languageIcons = {
        en: GB,
        he: IL,
    };

    const downloadCV = async (language: Language) => {
        const baseName = 'David Ohhana CV';
        const fileName = `${baseName} ${language.toUpperCase()}.pdf`;
        const fileUrl = `${import.meta.env.BASE_URL}CV/${fileName}`;

        try {
            const response = await fetch(fileUrl, { method: 'HEAD' });
            if (!response.ok) {
                
                setIsCVMenuOpen(false);
                return;
            }
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            
        }
        setIsCVMenuOpen(false);
    };

    const toggleCV = () => {
        setIsCVMenuOpen(prevIsCVMenuOpen => !prevIsCVMenuOpen)
    }

    return { isCVMenuOpen, downloadCV, toggleCV, languageIcons }
}

export default useCV