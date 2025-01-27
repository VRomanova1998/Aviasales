import { useEffect, useMemo, useState } from 'react';
import { Alert, Spin } from 'antd';

import { Filter } from '../filter/Filter';
import { Ticket } from '../ticket/Ticket';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { TicketType } from '../../types/types';
import store from '../../store';
import { getFilterTickets, getSortingTickets, fetchSearchID, fetchTickets } from '../../helper';

import styles from './tickets-container.module.scss';

export const TicketsContainer = () => {
  const dispatch = useAppDispatch();
  const searchId = useAppSelector((state) => state.searchID);
  const tickets = useAppSelector((state) => state.tickets.tickets);

  const activeSortingButton = useAppSelector((state) => state.sorting.sorting);
  const activeFilterButton = useAppSelector((state) => state.filter.filter);

  const isLoadingTickets = useAppSelector((state) => state.tickets.loading);
  const isLoadingSearchId = useAppSelector((state) => state.searchID.loading);

  const errorFetchTickets = useAppSelector((state) => state.tickets.error);
  const errorFetchSearchId = useAppSelector((state) => state.searchID.error);

  const [amountTicketsRender, setAmountTicketsRender] = useState(5);

  const changeAmountTicketsRender = () => {
    setAmountTicketsRender((prevAmount) => prevAmount + 5);
  };

  useEffect(() => {
    if (store.getState().searchID.loading === false) {
      dispatch(fetchSearchID());
    }
  }, []);
  useEffect(() => {
    if (searchId.data.searchId) {
      dispatch(fetchTickets());
    }
  }, [searchId]);

  useEffect(() => {
    setAmountTicketsRender(5);
  }, [activeSortingButton, activeFilterButton]);

  const arrayAllActiveFilter: string[] = [];
  activeFilterButton.map((item) => {
    if (item.checked === true) {
      arrayAllActiveFilter.push(item.name.toUpperCase());
    }
  });
  const arrForSort = [...tickets];
  let sortingResult: TicketType[] = useMemo(
    () => getSortingTickets(arrForSort, activeSortingButton),
    [arrForSort, activeSortingButton]
  );
  sortingResult = useMemo(
    () => getFilterTickets(sortingResult, arrayAllActiveFilter),
    [sortingResult, arrayAllActiveFilter]
  );
  const fragment =
    sortingResult.length === 0 && !isLoadingSearchId && !isLoadingTickets ? (
      <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" />
    ) : (
      sortingResult
        .filter((item, index) => index < amountTicketsRender)
        .map((item) => {
          return <Ticket {...item} key={`${item.carrier}/${item.price}/${item.segments[0].date}`} />;
        })
    );
  const button =
    sortingResult.length === 0 ? null : (
      <button className={styles.button} onClick={changeAmountTicketsRender}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
      </button>
    );
  return (
    <div className={styles.container}>
      <Filter />
      {errorFetchSearchId || errorFetchTickets ? (
        <Alert message="Ошибка запроса на сервер, попробуйте обновить страницу" type="error" />
      ) : null}
      {isLoadingSearchId || isLoadingTickets ? <Spin size="large" /> : null}
      {!errorFetchSearchId && !errorFetchTickets ? fragment : null}
      {button}
    </div>
  );
};
