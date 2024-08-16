import React from 'react';
import './Home.css';
import globalImg from '../src/28044.jpg'
import landslideImg from '../src/landslide.jpeg';
import waterImg from '../src/water.jpg';
import topicImg from '../src/topic.jpg';
import { useNavigate } from 'react-router-dom';

const Sub = (e) =>
  {
      //e.preventDefault();
      const navigate=useNavigate();
      navigate("/AddView");
  }


  function Home()
  {
    return(
      <>
      <div id='back2'>

          <div id='topic'>
          <li><h1><img id='img' src='https://img.lovepik.com/free-png/20210928/lovepik-tree-icon-png-image_401644448_wh1200.png'></img>Our Ecosystem</h1></li>
          </div>

          <div id='home'>
         <ul>
          <div>
            <li><a href='/'>Home</a></li></div>
            <li><a href='/About'>About</a></li>
            <li><a href=''>Services</a></li>
            <li><a href=''>Contact</a></li>
        </ul>
          </div>
      </div> 
        
        <div id='major'>
        <h1 id='prob'>Major Problems In Eco System</h1>
        <br /><br></br>
        <div id='flex1'>
          <div><img id='img1' src={globalImg}></img><h1>Global Warming</h1><p id='p2'>Global warming is the long-term warming of the planet's overall temperature. Though this warming trend has been going on for a long time, its pace has significantly increased in the last hundred years due to the burning of fossil fuels.</p></div>
          <div><img id='img1' src={landslideImg}></img><h1>Landslide</h1><p id='p2'>Landslides, also known as landslips, or rockslides are several forms of mass wasting that may include a wide range of ground movements, such as rockfalls, mudflows, shallow or deep-seated slope failures and debris flows.</p></div>
          <div><img id='img1' src={waterImg}></img><h1>Water Scarcity</h1><p id='p2'>Water scarcity is an increasing problem on every continent, with poorer communities most badly affected. To build resilience against climate change and to serve a growing population, an integrated and inclusive approach must be taken to managing this finite resource.</p></div>
          </div>
        </div>

        <div id='sug'>
          <h1>Add Your Suggestion here</h1>
          <a id='click1' href='/Addview' onClick={Sub()}><h2 id='click'>Click Me!</h2></a>
          <h3></h3>
        </div>

        <footer className="footer">
  <p>Copyright © 2024 Green World!</p>
  <div className="social-icons">
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/128/25/25347.png" alt="Twitter" />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" alt="Facebook" />
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/128/1400/1400829.png" alt="Instagram" />
    </a>
    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn-icons-png.flaticon.com/128/254/254412.png" alt="YouTube" />
    </a>
  </div>
</footer>


        </>
    );
  }
  export default Home; 