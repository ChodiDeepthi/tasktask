import { useState } from 'react';
import styles from './AddedEle.module.css';

export default function AddedEle({ item, data, setdata }) {
  const [isSelected, setIsSelected] = useState(false);

  // Function to delete the item
  function deleteData(itemId) {
    const updatedData = data.filter(item => item.id !== itemId);
    setdata(updatedData);
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
        <button onClick={() => deleteData(item.id)}>
          X
        </button>
      </div>
      <hr />
    </div>
  );
}
