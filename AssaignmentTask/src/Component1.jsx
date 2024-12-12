import React from 'react';
import Items from './Items';
import styles from './Component1.module.css'; // Import the CSS module
import Desc from './Desc';
const Component1 = () => {
  return (
    <div className={styles.item}>
      <Desc />
      <Items />
      
    </div>
  );
};

export default Component1;
