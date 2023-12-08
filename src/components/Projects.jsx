import React, { useState } from 'react';
import Info from './Info';
import Navbar from './navbar';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categorizedProjects = [
    { title: 'Instabuy', category: 'Web Development', link: 'https://instabuydynamic.netlify.app', imgSrc: './assets/instabuy.jpeg' },
    { title: 'Ticketbox', category: 'Web Development', link: 'https://ticketboxdynamic.netlify.app', imgSrc: './assets/ticketbox.jpeg' },
    { title: 'Instagram Clone', category: 'Web Development', link: 'https://instagramproject-static.netlify.app', imgSrc: './assets/insta.jpg' },
    
  ];

  const applicationProjects = [
    { title: 'Text Utils', category: 'Applications', link: 'https://textutils-dynamic.netlify.app', imgSrc: './assets/TextutilsImg.png' },
    { title: 'Medstart', category: 'Applications', link: 'https://medstartdynamic.netlify.app', imgSrc: './assets/medstart.jpg' },
    { title: 'Noteland', category: 'Applications', link: 'https://notelandproject.netlify.app', imgSrc: './assets/notelandImg.png' },
    { title: 'Quiz App', category: 'Applications', link: 'https://quizdynamic.netlify.app', imgSrc: './assets/quizApp.png' },
    { title: 'Word Counter', category: 'Applications', link: 'https://word-counter-application-static.netlify.app', imgSrc: './assets/word.jpg' },
    { title: 'Length Convertor', category: 'Applications', link: 'https://lengthconverterdunamic.netlify.app', imgSrc: './assets/lengthConverter.png' },

  ];



  const webDevelopmentProjects = [
    { title: 'Linklens', category: 'Web Design', link: 'https://linklenshub.netlify.app', imgSrc: './assets/linklensImg.png' },
    { title: 'Cinema Elk', category: 'Web Design', link: 'https://cinema-elk-dynamic.netlify.app', imgSrc: './assets/CinemaElkImg.png' },
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? [
          ...categorizedProjects,
          ...applicationProjects,
          ...webDevelopmentProjects,
        ]
      : selectedCategory === 'Web Design'
      ? categorizedProjects
      : selectedCategory === 'Applications'
      ? applicationProjects
      : selectedCategory === 'Web Development'
      ? webDevelopmentProjects
      : [];

  return (
    <div>
      <Info />

      <div className='projectsContainer'>
        <h2>Projects</h2>

        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value='All'>All</option>
          <option value='Web Design'>Web Design</option>
          <option value='Applications'> Web Applications</option>
          <option value='Web Development'>Web Development</option>
        </select>

        <div className='projects'>
          {filteredProjects.map((project, index) => (
            <a key={index} className='card' href={project.link} target='_blank' rel='noopener noreferrer'>
              <div className='box'>
                <img src={project.imgSrc} alt='' />
                <h3>{project.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Projects;
