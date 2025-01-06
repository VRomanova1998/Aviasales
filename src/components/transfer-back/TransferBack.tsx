import React from 'react';

import styles from './transfer-back.module.scss';

export const TransferBack = () => {
  return (
    <React.Fragment>
      <div className={styles.line}>
        <span className={styles.first}>MOW - HNK</span>
        <span className={styles.first}>В ПУТИ</span>
        <span className={styles.first}>1 ПЕРЕСАДКА</span>
      </div>
      <div className={styles.line}>
        <span className={styles.second}>11:20-00:50</span>
        <span className={styles.second}>13ч 30м</span>
        <span className={styles.second}>HKG</span>
      </div>
    </React.Fragment>
  );
};
