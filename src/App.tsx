import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects/Projects';
import Background from './components/Background';
import './i18n';
import Skills from './components/Skills';
import AboutME from './components/AboutMe';
import Posts from './components/Posts';
import  CV  from './components/CV/CV';


import { StagewiseToolbar } from '@stagewise/toolbar-react';
import ReactPlugin from '@stagewise-plugins/react';

function App() {

const stagewiseConfig = {
  plugins: [ReactPlugin],
};




  return (
    <>
      <StagewiseToolbar config={stagewiseConfig} />
      <div className={`min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200`}>
        <Background />
        <Navbar />
        <Hero />
        <AboutME />
        <CV/>
        <Projects />
        <Skills />
        <Posts/>
      </div>
    </>
  );
}

export default App;