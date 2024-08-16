import React from 'react';
import './SocialIcons.css'; // Ensure you create and include this CSS file

const SocialIcons = () => {
  return (
    <div id="icon">
      <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
        <img className="social-icon" src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMy0xMC5wbmc.png" alt="LinkedIn" />
      </a>
      <a href="https://www.instagram.com/direct/inbox/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer">
        <img className="social-icon" src="https://thumbs.dreamstime.com/b/kyiv-ukraine-may-new-instagram-camera-logo-icon-modern-gradient-design-instagram-photo-video-sharing-social-118304493.jpg" alt="Instagram" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img className="social-icon" src="https://static.vecteezy.com/system/resources/previews/018/930/476/original/facebook-logo-facebook-icon-transparent-free-png.png" alt="Facebook" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <img className="social-icon" src="https://e7.pngegg.com/pngimages/346/791/png-clipart-github-computer-icons-logo-repository-github-white-monochrome.png" alt="GitHub" />
      </a>
    </div>
  );
}

export default SocialIcons;
