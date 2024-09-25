import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src="photo_2024-09-10_22-40-29.jpg" alt="" className='profile-img' />
      <h1><span>I'm Rajsu Pratik,</span> Python developer based in INDIA.</h1>
      <p>A passionate cybersecurity specialist and Python enthusiast. As a master's student deeply invested in cloud computing and advanced technologies.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
        <a href="https://drive.google.com/file/d/1EahX2PM_zO_5Xwx4RiT6aABYF_ZPW2Af/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            My Resume
        </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
