import Element from './Element';
import styles from './Item.module.css';

export default function Item() {
  return (
    <div className={styles.itemRow}>
      <Element />
      <Element />
      <Element />
    </div>
  );
}
