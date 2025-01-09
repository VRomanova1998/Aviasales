import { TicketType } from './types/types';

export const getAmountTransition = (amount: number) => {
  switch (amount) {
    case 0:
      return 'БЕЗ ПЕРЕСАДОК';
    case 1:
      return '1 ПЕРЕСАДКА';
    case 2:
      return '2 ПЕРЕСАДКИ';
    case 3:
      return '3 ПЕРЕСАДКИ';
    default:
      return `${amount} ПЕРЕСАДОК`;
  }
};

export const getSearchId = async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search');
  if (!response.ok) {
    throw new Error('Ошибка со стороны сервера');
  }
  const results = await response.json();
  return results;
};

export const getSortingTickets = (tickets: TicketType[], activeButton: string) => {
  switch (activeButton) {
    case 'САМЫЙ ДЕШЕВЫЙ':
      return tickets.sort((a, b) => {
        return a.price - b.price;
      });
    case 'САМЫЙ БЫСТРЫЙ':
      return tickets.sort((a, b) => {
        return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);
      });
    case 'ОПТИМАЛЬНЫЙ':
      return tickets.sort((a, b) => {
        if (
          a.price < b.price &&
          a.segments[0].duration + a.segments[1].duration < b.segments[0].duration + b.segments[1].duration
        ) {
          return -1;
        } else return 1;
      });
    default:
      return tickets;
  }
};

export const getFilterTickets = (array: TicketType[], activeBtn: string[]) => {
  if (activeBtn.length === 0) {
    return [];
  }
  if (activeBtn.includes('Все')) return array;

  return array.filter((item) => {
    const first = getAmountTransition(item.segments[0].stops.length);
    const second = getAmountTransition(item.segments[1].stops.length);
    return activeBtn.includes(first) && activeBtn.includes(second);
  });
};
