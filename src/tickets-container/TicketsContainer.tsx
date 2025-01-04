import { Filter } from '../filter/Filter';
import { Ticket } from '../ticket/Ticket';

import styles from './tickets-container.module.scss';

export const TicketsContainer = () => {
  return (
    <div className={styles.container}>
      <Filter />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};
