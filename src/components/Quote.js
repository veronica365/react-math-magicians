import PropTypes from 'prop-types';

const Quote = ({ quote, author }) => (
  <div className="quote">
    <span>{quote}</span>
    <span>--</span>
    <span>{author}</span>
  </div>
);

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Quote;
