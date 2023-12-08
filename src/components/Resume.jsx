import React from 'react'
import Info from './Info'
import Navbar from './navbar'
import './Resume.css'

const Resume = () => {
  return (
    <div>
      <Info />

      <div className="resumeComponent" >
      <h2>Resume</h2>
        <ul>
        <li>
            <h2>Education</h2>
            <p>GD Goenka University , Gurugram , Haryana</p>
            <span>2018-2022</span>
            <p>Engineering , 7.62 CGPA</p>
        </li>
        <li>
          Narayana Junior College , Kukatpally , Hyderabad <br />
          <span>2016-2018</span>
          <p>Senior Secondary School,12, 86%</p>
        </li>
        <li>
          Pragna - High School , Bodhan, Nizamabad, Telangana. <br />
          <span>2015-2016</span>
          <p>10th , 88%</p>
        </li>
        </ul>

        <h2>Experience</h2>
        <ul>
          <li>Stack Developer Teainee</li>
          <span>2022-2023</span>
          <p>Cynohub</p>

          <li>Web Development Intern</li>
          <span>1 Month, June 2023</span>
          <p>InternPe</p>
        </ul>

        <h2>My Skills</h2>
            <ul>
              <h3><li>Web Design, Tailwind CSS, CSS </li><span>80%</span></h3>
              <h3><li>React Js, Node Js <span>80%</span> </li></h3>
              <h3><li>Redux, React-Router <span>70%</span></li></h3>
              <h3><li>HTML, CSS, Javascript <span>70%</span></li></h3>
              <h3><li>Firebase <span>80%</span></li></h3>
              <h3><li>Node JS, Express JS, Mongo DB <span>70%</span></li></h3>
            </ul>
      </div>

      <Navbar />

    </div>
  )
}

export default Resume



