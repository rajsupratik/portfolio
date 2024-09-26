import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
import screenshot from '../../assets/Screenshot 2024-09-10 224341.png';


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={screenshot} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am a master's student specializing in cybersecurity and Python, with a strong focus on cloud computing. Passionate about advanced computing concepts, eager to solve complex technical challenges, and apply knowledge to secure cloud environments using Python.</p>
                <p>Enthusiastic about emerging technologies and their impact on cybersecurity.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Python</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Linux</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>AWS</p><hr style={{width:"30%"}} /></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>1</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>3+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
