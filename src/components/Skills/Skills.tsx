import { useTranslation } from "react-i18next";
import { ISkillsModel,skills } from "./Skills.config"
import { motion } from "framer-motion";


type SkillsProps = {
    skill: ISkillsModel;
};


const SkillsCard = ({ skill }: SkillsProps) => {
  return (
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300 h-25 w-25 max-h-25 max-w-25 mx-auto "
    >
      <div className="p-6" style={{ direction: 'ltr' }}>
        <div
          className=" flex items-center justify-center perspective-card"
          style={{
            borderRadius: "0.5rem",
          }}
        >
          <motion.h3
            className="text-3xl font-bold"
            
            animate={{ rotateX: [0, 10, 0], rotateY: [0, 15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img src={skill.url} alt={skill.title} loading="lazy" className="h-24 w-24 object-contain" />
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
};

type SkillsItemProps = {
  category: string;
};

const SkillsItem = ({ category }: SkillsItemProps) => {
  const { t, i18n } = useTranslation();
  const id = `skills-${category}`;
  const title = `skills.${category}`;
  return (
    <div>
      <motion.div
        id={id}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        dir={i18n.language === 'he' ? 'rtl' : 'ltr'}
      >
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-3xl">
          {t(title)}
        </h2>
      </motion.div>
      <div className="mt-12 grid gap-8 md:grid-cols-12 lg:grid-cols-6 mb-8">
        {skills.filter((s) => s.category === category).map((skill) => (
          <div key={skill.id}>
            <SkillsCard skill={skill} />
            <h2 className="text-1xl font-extrabold text-gray-900 dark:text-white sm:text-1xl mt-1 ml-2">
              {skill.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { t } = useTranslation();
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 pl-5" style={{ direction: 'ltr' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div id="skills-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-8">
            {t("skills.title")}
          </h2>
        </motion.div>
        <SkillsItem category="languages" />
        <SkillsItem category="backend" />
        <SkillsItem category="frontend" />
        <SkillsItem category="databases" />
        <SkillsItem category="cloud" />
        <SkillsItem category="tools" />
        
      </div>
    </section>
  );
};

export default Skills;
