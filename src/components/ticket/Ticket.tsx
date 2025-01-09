import { TicketType } from '../../types/types';
import { PriceCarrier } from '../price-carrier/PriceCarrier';
import { TransferThither } from '../transfer-thither/TransferThither';

import styles from './ticket.module.scss';

export const Ticket = (props: TicketType) => {
  return (
    <div className={styles.card}>
      <PriceCarrier price={props.price} carrier={props.carrier} />
      <TransferThither segments={props.segments[0]} />
      <TransferThither segments={props.segments[1]} />
    </div>
  );
};
