import { useDispatch } from 'react-redux';

import { toggleSorting } from '../../store/sortingSlice';
import { useAppSelector } from '../../hooks';

import styles from './filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeSorting = (e: React.MouseEvent<HTMLButtonElement>) => {
    const changeSort = e.currentTarget.textContent;
    dispatch(toggleSorting({ changeSort }));
  };
  const activeFilter = useAppSelector((state) => state.sorting.sorting);
  const sortingButtonValue = ['САМЫЙ ДЕШЕВЫЙ', 'САМЫЙ БЫСТРЫЙ', 'ОПТИМАЛЬНЫЙ'];
  const sortingButtonFragment = sortingButtonValue.map((item, index) => {
    return (
      <button
        className={activeFilter === item ? [styles.button, styles.active].join(' ') : styles.button}
        onClick={(e) => changeSorting(e)}
        key={index}
      >
        {item}
      </button>
    );
  });
  return <div className={styles.container}>{sortingButtonFragment}</div>;
};
