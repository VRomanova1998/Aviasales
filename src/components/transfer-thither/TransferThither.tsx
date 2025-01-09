import React from 'react';
import { add, differenceInMinutes, format } from 'date-fns';

import { getAmountTransition } from '../../helper';

import styles from './transfer-thither.module.scss';

type Segment = {
  segments: {
    date: string;
    destination: string;
    duration: number;
    origin: string;
    stops: string[];
  };
};

export const TransferThither = ({ segments }: Segment) => {
  const transitionAmount = getAmountTransition(segments.stops.length);
  const date = segments.date;
  const timeArrival = add(date, { minutes: segments.duration });
  const newTime = `${format(date, 'HH')}:${format(date, 'mm')}-${format(timeArrival, 'HH')}:${format(timeArrival, 'mm')}`;
  const differenceTime = differenceInMinutes(new Date(timeArrival), new Date(date));
  const day = differenceTime / 1440 >= 1 ? `${Math.trunc(differenceTime / 1440)}д` : '';
  const onTheWay = `${day}${Math.trunc(differenceTime / 60)}ч ${differenceTime % 60}м`;
  return (
    <React.Fragment>
      <div className={styles.line}>
        <span className={styles.first}>
          {segments.origin}-{segments.destination}
        </span>
        <span className={styles.first}>В ПУТИ</span>
        <span className={styles.first}>{transitionAmount}</span>
      </div>
      <div className={styles.line}>
        <span className={styles.second}>{newTime}</span>
        <span className={styles.second}>{onTheWay}</span>
        <span className={styles.second}>{segments.stops.join(', ')}</span>
      </div>
    </React.Fragment>
  );
};
