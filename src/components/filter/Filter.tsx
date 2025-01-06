import { useDispatch } from 'react-redux';

import { toggleSorting } from '../../store/sortingSlice';

import styles from './filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeSorting = (e: React.MouseEvent<HTMLButtonElement>) => {
    const changeSort = e.currentTarget.textContent;
    dispatch(toggleSorting({ changeSort }));
  };
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={(e) => changeSorting(e)}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className={styles.button} onClick={(e) => changeSorting(e)}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button className={styles.button} onClick={(e) => changeSorting(e)}>
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
};
