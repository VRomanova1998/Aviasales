import styles from './price-carrier.module.scss';

type PriceCarrierType = {
  price: number;
  carrier: string;
};

export const PriceCarrier = ({ price, carrier }: PriceCarrierType) => {
  const newPrice = `${price.toString().slice(0, -3)} ${price.toString().slice(-3)}`;
  return (
    <div className={styles.container}>
      <span className={styles.price}>{newPrice}</span>
      <img src={`https://pics.avs.io/99/36/${carrier}.png`} />
    </div>
  );
};
