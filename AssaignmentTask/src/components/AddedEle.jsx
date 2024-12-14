import styles from './AddedEle.module.css';

export default function AddedEle({item}) {
  return (


    <div className={styles.itemsContainer}>
        
        <div className={styles.matter}>{item.name} </div>
        <hr className={styles.up}/>
          <div className={styles.content}>
                  Run 
          </div>
        
        <hr className={styles.down}/>
    </div>
  );
}
