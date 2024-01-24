import './Home.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../components/AnimatedLetters';
import Programmer from '../assets/images/Programmer.png';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = [' ', 'D', 'a', 'n', 'k', 'o'];
  const jobArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className='container home-page'>
        <div className='text-zone'>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={15}
            />
          </h1>
          <h2>Full Stack Developer</h2>
          <Link to='/contact' className='flat-button'>
            CONTACT ME
          </Link>
        </div>
        <div className='programmer-zone'>
          <img className='programmer' src={Programmer} />
        </div>
      </div>

      <Loader type='pacman' />
    </>
  );
};

export default Home;