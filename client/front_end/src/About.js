import React from 'react'
import './About.css'
import topicImg from '../src/topic.jpg';
const About = () => {
  return (
    <>
    <div id='head'>
    <h1 className='home-h2'>Mission statement</h1>
      <div className='about-outer'>

        <div className='about-text'>
            <br></br>
            <p className='home-para1'>At EcoShare, we believe in a world where every individual is empowered to make a positive impact on the environment. We provide a platform for environmentalists to share tips, projects, and ideas, and to connect with like-minded individuals. Our mission is to create a community that inspires and supports each other in living a green lifestyle and protecting the planet for generations to come.</p><br/>
            <p className='home-para1'>Our mission is to empower individuals and communities to protect and restore the natural environment through education, advocacy, and action. We are committed to fostering sustainable practices, promoting biodiversity, and combating climate change by providing accessible resources, mobilizing grassroots efforts, and influencing policy change. Together, we aim to build a resilient and thriving planet for future generations.</p>
        </div>

        <div>
        <img src={topicImg} className='img3'></img>
        </div>
    </div>
    </div>
    </>
      
  )
}

export default About