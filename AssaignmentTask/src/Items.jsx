import React from 'react';
import Item from './Item';
import styles from './Items.module.css'; // Import the CSS module for Items

const Items = () => {
  return (
    <div className={styles.items}>
      {/* Render 6 Item components */}
      <div className={styles.itemRow}>
      <div className="item">
        <Item />
        </div>
        <div className="item">
        <Item />
        </div>
        <div className="item">
        <Item />
        </div>
      </div>
      <div className={styles.itemRow}>
      <div className="item">
        <Item />
        </div>
        <div className="item">
        <Item />
        </div>
        <div className="item">
        <Item />
        </div>
      </div>
    </div>
  );
};

export default Items;
