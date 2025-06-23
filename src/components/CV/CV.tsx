import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import useCV from "./useCV";

type CVModel ={
    language: string;
};

const cvLanguages = ["en","he"];

const DownloadCV = ({language}: CVModel) => {
  const { t } = useTranslation();
   const {downloadCV} = useCV();
  return (
    <button className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ml-6 mr-6"
      onClick={() => downloadCV(language)}>
        <FileDown className="h-10 w-10 text-gray-900 dark:text-white" />
        <p className="text-gray-900 dark:text-white mt-2 text-center">
          {t(`cv.${language}`)}
        </p>
    </button>
  );
};

const CV = () => {
  const { t,i18n } = useTranslation();
 
  return (
    <div id="cv" className=" flex items-center justify-center bg-gray-50 dark:bg-gray-900"
            dir ={i18n.dir()}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
          
               <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-4 text-center p-2">
                {t('cv.title')}
              </h3>
              <div id="download-cv-icon" className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center">
  {cvLanguages.map((lang) => (
    <DownloadCV key={lang} language={lang} />
  ))}
</div>
            </motion.div>
          </div>
        </div>
  );
};

export default CV;
