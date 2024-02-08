import './AnimatedLetters.scss';
import PropTypes from 'prop-types';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

AnimatedLetters.propTypes = {
  letterClass: PropTypes.string.isRequired,
  strArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  idx: PropTypes.number.isRequired,
};

export default AnimatedLetters;
