import React from 'react';

import styles from './transfer-thither.module.scss';

export const TransferThither = () => {
  return (
    <React.Fragment>
      <div className={styles.line}>
        <span className={styles.first}>MOW - HNK</span>
        <span className={styles.first}>В ПУТИ</span>
        <span className={styles.first}>2 ПЕРЕСАДКИ</span>
      </div>
      <div className={styles.line}>
        <span className={styles.second}>10:45-08:00</span>
        <span className={styles.second}>21ч 15м</span>
        <span className={styles.second}>HKG, JNB</span>
      </div>
    </React.Fragment>
  );
};
