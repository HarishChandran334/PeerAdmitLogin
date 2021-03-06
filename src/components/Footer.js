import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-newsletter'>
        <p className='footer-newsletter-heading'>
          [Possible Newsletter?]
        </p>
        <p className='footer-newsletter-text'>
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
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Services</h2>
            <Link to='/'>1</Link>
            <Link to='/'>2</Link>
            <Link to='/'>3</Link>
            <Link to='/'>4</Link>
          </div>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>1</Link>
            <Link to='/'>2</Link>
            <Link to='/'>3</Link>
            <Link to='/'>4</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Blog</h2>
            <Link to='/'>1</Link>
            <Link to='/'>2</Link>
            <Link to='/'>3</Link>
            <Link to='/'>4</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>1</Link>
            <Link to='/'>2</Link>
            <Link to='/'>3</Link>
            <Link to='/'>4</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Peer Admit
            </Link>
          </div>
          <small class='website-rights'>Peer Admit ?? 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to={{ pathname: "https://www.facebook.com/peeradmit/" }}
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://www.instagram.com/peeradmit/" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to={{ pathname: "https://www.youtube.com/peeradmit/" }}
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to={{ pathname: "https://www.twitter.com/peeradmit/" }}
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to={{ pathname: "https://in.linkedin.com/company/peeradmit" }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;