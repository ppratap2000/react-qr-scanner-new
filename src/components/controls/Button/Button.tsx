import * as React from 'react';
import './Button.scss';

const Button = (props) => {
  const { text, onClick } = props;

  const onClickHandler = (event) => {
    onClick?.(event);
  };

  return (
    <button className="btn" onClick={onClickHandler}>
      {text}
    </button>
  );
};

export default Button;
