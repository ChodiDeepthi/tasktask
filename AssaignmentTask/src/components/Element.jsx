import { useState } from 'react';
import styles from './Element.module.css';

export default function Element({ item, data, setdata }) {
  const [count, setcount] = useState(4); // Initialize the count

  // Define the addElement function
  function addElement(item, data, setdata) {
    // Add the item to the existing data array with a new unique ID
    setdata([...data, { id: count, name: item.name, value: item.value }]);
    setcount(count + 1); // Increment the count for the next ID
  }

  return (
    <div className={styles.elementBox}>
      <button onClick={() => addElement(item, data, setdata)}>
        {item.id} {/* Show the id of the item on the button */}
      </button>
    </div>
  );
}
