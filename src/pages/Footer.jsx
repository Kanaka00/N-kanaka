import React from 'react';
import "./Footer.css";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            Iam passionate developers dedicated to creating dynamic and responsive web applications.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/skills">
            <li>Skills</li>
            </Link>
            <Link to="/contact">
            <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: kanakanelapati00@gmail.com</p>
          <p>Phone: +91 6304650601</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2025 YourCompany. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;