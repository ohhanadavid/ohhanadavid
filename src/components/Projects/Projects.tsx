import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Github,Globe } from "lucide-react";
import { IProjectsModel, projects } from "./projects.config";
import YouTubePlayerButton from "../Youtube/Screen";

type ProjectCardProps = {
  project: IProjectsModel;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { i18n } = useTranslation();
  return (
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    
      className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
    
    >
      <div className="p-6" style={{ direction: 'ltr' }}>
        <div
          className="h-48 flex items-center justify-center perspective-card"
          style={{
            background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)`,
            borderRadius: "0.5rem",
          }}
        >
          <motion.h3
            className="text-3xl font-bold"
            style={{ color: project.color }}
            animate={{ rotateX: [0, 10, 0], rotateY: [0, 15, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {project.title}
          </motion.h3>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-4 text-center">
          {project.title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300" dir={i18n.language === 'he' ? 'rtl' : 'ltr'}>
          {i18n.language === 'he'? project.descriptionHE : project.descriptionEN}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
         <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
        >
          <Github className="h-5 w-5 mr-2" />
          View Repository
        </a>
        <br />
        {project.linkUrl&&<a
          href={project.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
          hidden={!project.linkUrl}
        >
          <Globe className="h-5 w-5 mr-2" />
          link
        </a>}
        <br />
         {project.videoUrl &&
         <YouTubePlayerButton
          videoId={project.videoUrl.split('youtu.be/')[1]}
        />}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { t,i18n } = useTranslation();

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900" style={{ direction: i18n.language==='he'?'rtl':'ltr' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t("projects.title")}
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
