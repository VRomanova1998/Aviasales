import myImage from '../files/S7.png';

import styles from './price-carrier.module.scss';

export const PriceCarrier = () => {
  return (
    <div className={styles.container}>
      <span className={styles.price}>13 400 Р</span>
      <img src={myImage} />
    </div>
  );
};
