import React, {useState, useEffect} from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaYoutube,
  FaTelegram,
} from 'react-icons/fa';
import {
  BsChat
} from 'react-icons/bs';
import { MdFingerprint } from 'react-icons/md';
import { exLinks } from './Data';

function Footer() {
  const [footerWrap, setFooterWrap] = useState(true);
  const footerResponsive = () => {
    if (window.innerWidth <= 960) {
      setFooterWrap(false);
    } else {
      setFooterWrap(true);
    }
  };
  useEffect(() => {
    footerResponsive();
    window.addEventListener('resize', footerResponsive);
  }, []);
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div className='footer-links'>
        <div className={footerWrap ? 'footer-link-wrapper' : 'footer-link-wrapper link-column'}>
          <div className='footer-link-items'>
            <h2>Laboran FTE</h2>
            <p>Gedung Barung Ruang N114</p>
            <p>Fakultas Teknik Elektro Telkom University</p>
            <p>Jl. Telekomunikasi 1 Terusan Buah Batu, Bandung</p>
          </div>
          <div className='footer-link-items'>
            <h2>Link Terkait</h2>
            {exLinks.map((link,index)=>(
              <Link to={link.link} key={index}>{link.name}</Link>
            ))}
          </div>
          <div className='footer-link-items'>
            <h2>Media Informasi</h2>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              
              <span className='social-icon'>
                <FaInstagram />
              </span>
              <span className='social-text'>
                <h4>Instagram</h4>
                <h5>@seelabstelu</h5>
              </span> 
              
            </Link>
            <Link
              className='social-icon-link'
              to={
                'bit.ly/grouppraktikanfte'
              }
              target='_blank'
              aria-label='Telegram'
            >
              <span className='social-icon'>
                <FaTelegram />
              </span>
              <span className='social-text'>
                <h4>Telegram</h4>
                <h5>bit.ly/grouppraktikanfte</h5>
              </span>
               
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <span className='social-icon'>
                <BsChat />
              </span>
              <span className='social-text'>
                <h4>Line</h4>
                <h5>@seelabstelu</h5>
              </span>
               
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <span className='social-icon'>
                <FaYoutube />
              </span>
              <span className='social-text'>
                <h4>Youtube</h4>
                <h5>Seelabs Telkom University</h5>
              </span>
               
            </Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            {/* <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              LAVISH
            </Link> */}
          </div>
          <small className='website-rights'>SEELABS © 2021</small>
          <div className='social-icons'>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
