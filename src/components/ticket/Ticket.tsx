import { PriceCarrier } from '../price-carrier/PriceCarrier';
import { TransferBack } from '../transfer-back/TransferBack';
import { TransferThither } from '../transfer-thither/TransferThither';

import styles from './ticket.module.scss';

export const Ticket = () => {
  return (
    <div className={styles.card}>
      <PriceCarrier />
      <TransferThither />
      <TransferBack />
    </div>
  );
};
