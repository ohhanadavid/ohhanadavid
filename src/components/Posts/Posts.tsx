import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {  Linkedin } from "lucide-react";
import { IPostsModel, posts } from "./posts.config";


type PostsCardProps = {
  post: IPostsModel;
};

const PostCard = ({ post }: PostsCardProps) => {
  const { i18n } = useTranslation();
  return (
    
    <motion.div
    id="posts"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    
      className="p-6 text-center  rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
     style={{
            background: `linear-gradient(135deg, ${post.color}22, ${post.color}11)`,
            borderRadius: "0.5rem",
            direction: i18n.language === 'he' ? 'rtl' : 'ltr'
          }}
    >
        
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-4 text-center p-2">
          {i18n.language==='he'?post.titleHE:post.titleEN}
        </h3>
        <p className="mt-5 text-gray-600 dark:text-gray-300">
          {i18n.language === 'he'? post.descriptionHE : post.descriptionEN}
        </p>
        <br />
        {post.linkUrl&&<a
          href={post.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center  text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
          hidden={!post.linkUrl}
          
        >
          <Linkedin className="h-10 w-10 " />
          
        </a>}
    
      {/* </div> */}
    </motion.div>
  );
};

const Posts = () => {
  const { t,i18n } = useTranslation();

  return (
    <section id="posts" className="py-20 bg-gray-50 dark:bg-gray-900" style={{ direction: i18n.language==='he'?'rtl':'ltr' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t("posts.title")}
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
