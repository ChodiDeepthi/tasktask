import styles from './AddedEle.module.css';

export default function AddedEle({item}) {
  return (


    <div className={styles.itemsContainer}>
        <hr/>
          <div className={styles.content}>
                  {item.name} {item.value}
          </div>
        
        <hr/>
    </div>
  );
}
