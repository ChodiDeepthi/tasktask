import Item from './Item';
import styles from './Items.module.css';

export default function Items() {
  return (
    <div className={styles.itemsContainer}>
      <div className={styles.row}>
        <Item />
      </div>
      <div className={styles.row}>
        <Item />
      </div>
    </div>
  );
}
