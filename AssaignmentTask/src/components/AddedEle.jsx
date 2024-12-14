import { useState } from 'react';
import styles from './AddedEle.module.css';

export default function AddedEle({ item, data, setdata }) {
  const [isSelected, setIsSelected] = useState(false);

  function deleteData(item) {
    setdata(data.filter((element)=>(item!=element)))

  }
  

  // Toggle selection on click
  function toggleSelection() {
    setIsSelected(!isSelected);
  }

  return (
    <div 
      className={`${styles.itemsContainer} ${isSelected ? styles.selected : ''}`}
      onClick={toggleSelection}
    >
      <div className={styles.matter}>{item.name}</div>
      <hr />
      <div className={styles.content}>
        Run
        <button onClick={() => deleteData(item)}>
          X
        </button>
      </div>
      <hr />
    </div>
  );
}
