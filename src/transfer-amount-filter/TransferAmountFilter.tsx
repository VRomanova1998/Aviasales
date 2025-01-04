import { Checkbox } from 'antd';

import styles from './transfer-amount-filter.module.scss';

export const TransferAmountFilter = () => {
  const onChange = (e: any) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className={styles.container}>
      <span className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <Checkbox onChange={onChange} className={styles.label}>
        Все
      </Checkbox>
      <Checkbox onChange={onChange} className={styles.label}>
        Без пересадок
      </Checkbox>
      <Checkbox onChange={onChange} className={styles.label}>
        1 пересадка
      </Checkbox>
      <Checkbox onChange={onChange} className={styles.label}>
        2 пересадки
      </Checkbox>
      <Checkbox onChange={onChange} className={styles.label}>
        3 пересадки
      </Checkbox>
    </div>
  );
};
