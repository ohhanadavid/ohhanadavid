import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const { t,i18n } = useTranslation();

  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
         >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">{t('hero.greeting')}</span>
            <span className="block text-indigo-600 dark:text-indigo-400 mt-2">David Ohhana</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            {t('hero.role')}
          </p>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            {t('hero.description', { sum: 25 })}
          </p>
          <div className="mt-8 flex justify-center gap-6"
          style={{direction: i18n.language === 'he' ? 'rtl' : 'ltr'}}>
            <a href="https://github.com/ohhanadavid/" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/david-ohhana-backend/" target='_blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:sustujbv167@gmail.com@gmail.com" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;