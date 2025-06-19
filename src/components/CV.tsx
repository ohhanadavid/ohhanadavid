// import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
// import {  Linkedin } from "lucide-react";
// import { IPostsModel, posts } from "./posts.config";


// type PostsCardProps = {
//   post: IPostsModel;
// };


// const Posts = () => {
//   const { t,i18n } = useTranslation();

//   return (
//     <section id="posts" className="py-20 bg-gray-50 dark:bg-gray-900" style={{ direction: i18n.language==='he'?'rtl':'ltr' }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-center"
//         >
//           <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
//             {t("posts.title")}
//           </h2>
//         </motion.div>
//         <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {posts.map((post) => (
//             <PostCard key={post.id} post={post} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Posts;
