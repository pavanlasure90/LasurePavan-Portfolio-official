import React from 'react'
import Info from './Info'
import './About.css'
import Navbar from './navbar'

const About = () => {
  return (
    <>
        <Info />
        <div className='aboutMe' style={{marginBottom:"2rem"}}>
          <h1 style={{textAlign:"start" , marginLeft:"10px"}}>About Me</h1>
          <p className='para'>
             I have a solid foundation in Full Stack development. My expertise lies in building Scalable and Responsive web applications using React JS. I have successfully developed and deployed multiple projects that showcase my ability to create intuitive user interfaces and interactive experiences.I enjoy transforming design concepts into functional websites and web applications, ensuring seamless user experiences across different devices and platforms. <br /><br />
             My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
          </p>

          <h2 style={{textAlign:"start" , padding:"10px" , fontWeight:"bold"}}>What I'm Doing</h2>

          <div className='task1'>
            <div className="taskleft1">
              <img src="./assets/icon-design.svg" alt="" />
            </div>
            <div className="taskleft2">
            <h3>Web Design</h3>
            <p>The most modern and high-quality design made at a professional level</p>
            </div>
          </div>


          <div className='task1'>
            <div className='taskleft3'>
              <img src="./assets/icon-dev.svg" alt="" />
            </div>
            <h3>Web Development</h3>
            <p className='para'>High-quality development of sites at the professional level</p>
          </div>

          <h2 style={{textAlign:"start" , padding:"10px" , fontWeight:"bold"}}>Testimonials</h2>
          <div className='testimonials'>
            <div className='testimonial-content'>
              <img className='testimonial-image' src="./assets/avatar-1.png" alt="" />
              <h3>Vivek</h3>
              <p>Lasure Pavan is an accomplished frontend developer specializing in React JS. With a deep understanding of the React ecosystem, Ankit consistently delivers robust and scalable solutions. His expertise in crafting dynamic user interfaces and optimizing React applications makes him a reliable choice for projects demanding top-tier React development skills.</p>
            </div>
            </div>

        </div>
        <Navbar />
    </>
  )
}

export default About;




