import React from 'react';
import './footerStyle.css';
import tiktok from '../../assets/tik-tok.png'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><img className='footer-icon' src={instagram} alt="" /></a>
            <a href="https://tiktok.com"><img className='footer-icon' src={tiktok} alt="" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><img className='footer-icon' src={youtube} alt="" /></a>
        </div>
      </div>
    </footer>
  );
};

