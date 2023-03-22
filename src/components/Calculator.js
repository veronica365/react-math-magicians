import { useState } from 'react';
import PropTypes from 'prop-types';
import { BUTTON_VALUES, OPERATOR_VALUES } from '../constants';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

export const Calculator = () => {
  const [state, setState] = useState({});
  const { one, two, symbol } = state;
  const handleClick = ({ target: { name } }) => {
    const { next, operation } = calculate({}, name);
    if (operation) {
      return setState((prev) => ({
        ...prev,
        one: prev.one || prev.total || 0,
        symbol: operation,
      }));
    }
    if (symbol && next) {
      return setState((prev) => ({
        ...prev,
        two: `${prev.two || ''}${next || ''}`,
      }));
    }

    if (next) {
      return setState((prev) => ({
        ...prev,
        one: `${prev.one || ''}${next || ''}`,
      }));
    }

    if (next === null && operation === null) {
      return setState({});
    }

    if (!one || !two || !symbol) return 0;
    const result = operate(one, two, symbol);
    return setState({
      two: '',
      one: '',
      symbol: '',
      total: result,
    });
  };
  return (
    <div className="calculator">
      <div className="screen">
        <small>
          {one}
          {' '}
          {symbol}
          {' '}
          {two}
        </small>
        <Displaybar value={String(state.total || 0)} />
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
