import PropTypes from 'prop-types';

const ErrorOrLoading = ({ loading, error }) => (
  <div className="quote">
    {loading && <span>Loading quote</span>}
    {error && (
      <span className="error">
        Something went wrong and we failed to get the quote
      </span>
    )}
  </div>
);

ErrorOrLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
};

export default ErrorOrLoading;
