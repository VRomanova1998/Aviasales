import styles from './filter.module.scss';

export const Filter = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>САМЫЙ ДЕШЕВЫЙ</button>
      <button className={styles.button}>САМЫЙ БЫСТРЫЙ</button>
      <button className={styles.button}>ОПТИМАЛЬНЫЙ</button>
    </div>
  );
};
