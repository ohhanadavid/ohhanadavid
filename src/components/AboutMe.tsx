import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';


const AboutME: React.FC = () => {
  const { t,i18n } = useTranslation();

  return (
    <div id="about" className=" flex items-center justify-center bg-gray-50 dark:bg-gray-900"
        dir ={i18n.language === 'he' ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
      
           <p className="mt-7 font-bold text-base text-gray-500 dark:text-gray-400 sm:mt-7 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-7 md:text-xl">
            {t('aboutME.title')}
          </p>
          <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
            {t('aboutME.description', { sum: 25 })}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutME;