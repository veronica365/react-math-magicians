import { useState } from 'react';
import PropTypes from 'prop-types';
import { BUTTON_VALUES, OPERATOR_VALUES } from '../constants';
import calculate from '../logic/calculate';

export const Calculator = () => {
  const [state, setState] = useState({});
  const handleClick = (e) => {
    const result = calculate({ ...state }, e.target.name);
    setState((prev) => ({ ...prev, ...result }));
  };
  const { total, operation, next } = state;
  return (
    <div className="calculator">
      <div className="screen">
        <small>
          {total}
          {operation}
          {next}
        </small>
        <Displaybar value={String(total || 0)} />
      </div>
      <div className="touch-pad">
        {BUTTON_VALUES.map((button) => (
          <Button key={button} handleClick={handleClick} text={button} />
        ))}
      </div>
    </div>
  );
};

export const Displaybar = ({ value }) => (
  <div id="display" className="display">
    {value}
  </div>
);
Displaybar.propTypes = {
  value: PropTypes.string.isRequired,
};

export const Button = ({ text, handleClick }) => {
  const className = OPERATOR_VALUES.includes(text) ? 'operator' : '';
  return (
    <button
      type="button"
      name={text}
      onClick={handleClick}
      className={className}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
