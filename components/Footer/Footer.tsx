import React from 'react';
import Link from 'next/link';
import './Footer.css';
import { FaGithub, FaBehance} from 'react-icons/fa'

const Footer = () => (
  <footer className='footer'>
    <div className='footer__container'>
      <Link href='/' className='footer__logo'>
        ♞
      </Link>
      <Link href='/games' className='footer__link'>
        games
      </Link>
      <Link href='/about' className='footer__link'>
        about
      </Link>
      <a
        href='https://delgadociteriowa.github.io/main/'
        target='_blank'
        rel='noreferrer'
        className='footer__link'
      >
        delgadociterio
      </a>
      <div className='social'>
        <a
          href='https://github.com/delgadociteriowa/boards'
          target='_blank'
          rel='noreferrer'
          className='social__logo social__github'
        >
          <FaGithub className='social__img'/>
        </a>
        <a
          href='https://www.behance.net/delgadociterio'
          target='_blank'
          rel='noreferrer'
          className='social__logo'
        >
          <FaBehance className='social__img'/>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
