import React from 'react';
import styles from './style.module.scss';

function LoadingScreen() {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default LoadingScreen;
