import React from 'react';
import '../assets/styles/footer.css';

import fbIcon from '../assets/images/fb_icon.png';
import igIcon from '../assets/images/ig_icon.png';
import xIcon from '../assets/images/x_icon.png';
import ytIcon from '../assets/images/yt_icon.png';
import ttIcon from '../assets/images/tt_icon.png';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>ABOUT US</h4>
          <ul>
            <li><a href="#">About FC Barcelona</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>HELP CENTER</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Help Portal</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
            <li><a href="#">Returns & Exchanges</a></li>
            <li><a href="#">Track order information</a></li>
            <li><a href="#">Order Issues</a></li>
            <li><a href="#">Account & website</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>LEGAL</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>FOLLOW US</h4>
          <div className="social-links">
            <img src={fbIcon} alt="Facebook" />
            <img src={igIcon} alt="Instagram" />
            <img src={xIcon} alt="X (Twitter)" />
            <img src={ytIcon} alt="YouTube" />
            <img src={ttIcon} alt="TikTok" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 FC Barcelona. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
