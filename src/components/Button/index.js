import React from 'react';
import styles from './Button.module.css';

function Button({ children, className, onClick }) {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
