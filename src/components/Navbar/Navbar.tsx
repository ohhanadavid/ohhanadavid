import React from 'react';
import { useTranslation } from 'react-i18next';
import { Moon, Sun, Languages ,FileDown} from 'lucide-react';
import type { Language } from '../../types';
import { themeMode, useTheme } from '../../hooks/useTheme';
import useLanguage from './useLanguage';
import useScroll from './useScroll';
import useCV from '../CV/useCV';

const Navbar: React.FC = () => {
  const {theme, toggleTheme} = useTheme();
  const { toggleLanguage, isLanguageMenuOpen, changeLanguage, languageIcons } = useLanguage();
 // const { isCVMenuOpen, downloadCV, toggleCV, languageIcons: cvLanguageIcons } = useCV();
  const { scrollToSection } = useScroll();
  const { t } = useTranslation();

  const navItems = [ 'projects', 'skills','home', 'posts','about','cv'];

  return (
    <nav dir='ltr' className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Portfolio</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {t(`nav.${item}`)}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4"> 
                  {/* <div id="cv" className="relative">
                <button
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  onClick={() => toggleCV()}
                > */}
                  {/* <FileDown className="h-5 w-5" /> */}
                  {/* <span className="h-5 w-5">{t("cv.title")}</span>
                </button>
                {isCVMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    {Object.entries(cvLanguageIcons).map(([lang, FlagIcon]) => (
                      <button
                        key={lang}
                        onClick={() => downloadCV(lang as Language)}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <FlagIcon className="w-5 h-5 mr-2" />
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}
              </div> */} 

              <div className="relative">
                <button
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  onClick={() => toggleLanguage()}
                >
                  <Languages className="h-5 w-5" />
                </button>
                {isLanguageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                    {Object.entries(languageIcons).map(([lang, FlagIcon]) => (
                      <button
                        key={lang}
                        onClick={() => changeLanguage(lang as Language)}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <FlagIcon className="w-5 h-5 mr-2" />
                        {lang.toUpperCase()}
                      </button>
                    ))}
                  </div>
                )}
              </div>

          
              

              <button
                onClick={toggleTheme}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                aria-label="Toggle theme"
              >
                {theme === themeMode.DARK ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;