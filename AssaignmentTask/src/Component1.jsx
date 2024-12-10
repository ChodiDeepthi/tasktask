import React from 'react';
import Items from './Items';
import styles from './Component1.module.css'; // Import the CSS module

const Component1 = () => {
  return (
    <div className={styles.component1}>
      <Items />
    </div>
  );
};

export default Component1;
