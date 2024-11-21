import React from "react";
import "./Footer.css";

const Footer = () => {
   return (
    <> 
     <footer className="footer">
      <div className="footer-container">
        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@hostelname.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Hostel Street, City, Country</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/rooms">Rooms</a></li>
            <li><a href="/booking">Book Now</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 Hostel Name. All Rights Reserved.</p>
      </div>
    </footer>
    </>
   )
}
export default Footer;