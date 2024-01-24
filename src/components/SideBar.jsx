import './SideBar.scss';
import { useState } from 'react';
import Logo from '../assets/images/logo.png';
import LogoSubtitle from '../assets/images/slogan.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className='nav-bar'>
      <Link className='logo' to='/' onClick={() => setShowNav(false)}>
        <img src={Logo} alt='Logo' />
        <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
      </Link>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact='true'
          activeclassname='active'
          className='home-link'
          to='/'
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color='black' />
        </NavLink>
        <NavLink
          activeclassname='active'
          className='about-link'
          to='/about'
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color='black' />
        </NavLink>
        <NavLink
          activeclassname='active'
          className='projects-link'
          to='/projects'
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color='black' />
        </NavLink>
        <NavLink
          activeclassname='active'
          className='contact-link'
          to='/contact'
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color='black' />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color='white'
          size='3x'
          className='close-icon'
        />
      </nav>
      <ul>
        <li>
          <a href='' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon
              icon={faLinkedin}
              color='black'
              className='anchor-icon'
            />
          </a>
        </li>
        <li>
          <a href='' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon
              icon={faGithub}
              color='black'
              className='anchor-icon'
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color='white'
        size='3x'
        className='hamburger-icon'
      />
    </div>
  );
};

export default Sidebar;
