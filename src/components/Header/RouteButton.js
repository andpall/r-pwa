import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

function RouteButton({ route }) {
  const navigate = useNavigate();

  const onPress = () => {
    navigate(route.path);
  };

  return (
    <button
      onClick={onPress}
      type="button"
      key={route.path}
      className={styles.link}
    >
      {route.title}
    </button>
  );
}

export default RouteButton;
