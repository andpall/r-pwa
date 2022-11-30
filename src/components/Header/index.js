import React from 'react';
import routes from '../../router/routes';
import styles from './Header.module.css';
import RouteButton from './RouteButton';

function Header() {
  return (
    <nav>
      <div className={styles.header}>
        {routes.map((route) => (
          <RouteButton route={route} />
        ))}
      </div>
    </nav>
  );
}
export default Header;
