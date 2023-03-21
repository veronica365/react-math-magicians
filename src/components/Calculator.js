import PropTypes from 'prop-types';
import { BUTTON_VALUES, OPERATOR_VALUES } from '../constants';

export const Calculator = () => (
  <div className="calculator">
    <div className="screen">
      <Displaybar value={String(0)} />
    </div>
    <div className="touch-pad">
      {BUTTON_VALUES.map((button) => (
        <Button key={button} text={button} />
      ))}
    </div>
  </div>
);

export const Displaybar = ({ value }) => (
  <div id="display" className="display">
    {value}
  </div>
);
Displaybar.propTypes = {
  value: PropTypes.string.isRequired,
};

export const Button = ({ text }) => {
  const className = OPERATOR_VALUES.includes(text) ? 'operator' : '';
  return (
    <button type="button" className={className}>
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
