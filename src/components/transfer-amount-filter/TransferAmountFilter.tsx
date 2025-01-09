import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { checkAll, toggleChecked, removeAll, changeButtonActive, removeChecked } from '../../store/filterTransferSlice';

import styles from './transfer-amount-filter.module.scss';

type Filter = {
  filter: { id: string; name: string; checked: boolean }[];
  buttonActive: string;
};

type StateFilter = {
  filter: Filter;
};

export const TransferAmountFilter = () => {
  const dispatch = useDispatch();
  const filterCreate = useSelector((state: StateFilter) => state.filter.filter);
  const activeButton = useSelector((state: StateFilter) => state.filter.buttonActive);
  useEffect(() => {
    checked();
  }, [filterCreate]);

  const checked = () => {
    const newArr = [...filterCreate.slice(1, 5)];
    if (filterCreate[0].checked === true && activeButton === 'Null') {
      dispatch(changeButtonActive('All'));
      dispatch(checkAll());
    }

    if (filterCreate[0].checked === false && activeButton === 'All' && newArr.every((item) => item.checked)) {
      dispatch(changeButtonActive('Null'));
      dispatch(removeAll());
    }
    if (newArr.every((item) => item.checked) && filterCreate[0].checked === false && activeButton !== 'All') {
      dispatch(checkAll());
    }
    if (filterCreate[0].checked === true && !newArr.every((item) => item.checked) && activeButton === 'All') {
      dispatch(changeButtonActive('Null'));
      dispatch(removeChecked());
    }
  };

  const onChange = (value: string) => {
    dispatch(toggleChecked({ value }));
  };

  const checkBoxFragment = filterCreate.map((item: { id: string; name: string; checked: boolean }, index) => {
    return (
      <span key={index} className={styles.label}>
        <input
          key={item.id}
          name={item.name}
          type="checkbox"
          checked={item.checked}
          onChange={() => onChange(item.name)}
          className={styles.checkbox}
        />
        <label>{item.name}</label>
      </span>
    );
  });
  return (
    <div className={[styles.container, styles.checkboxContainer].join(' ')}>
      <span className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      {checkBoxFragment}
    </div>
  );
};
