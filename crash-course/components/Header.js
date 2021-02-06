import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const x = 2;
  return (
    <div>
      <h1 className={styles.title}>
        <span>WebDev </span>News
      </h1>
      <p className={styles.description}>
        Keep to date with the latest web dev news
      </p>
    </div>
  );
};

export default Header;
