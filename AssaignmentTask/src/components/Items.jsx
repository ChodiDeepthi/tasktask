import { useState } from 'react';
import Item from './Item';
import styles from './Items.module.css';

export default function Items({data,setdata}) {
  const [topdata,settopdata]=useState([{name:"warmup",value:75},{name:"active",value:100},{name:"cooldown",values:50}]);
  const [bottomdata,setbottomdata]=useState([{name:"twostep",value:80},{name:"increm",value:90},{name:"decre",value:70}]);
  return (
    
    <div className={styles.itemsContainer}>
      <div className={styles.row}>
        <Item  item={topdata} setitem={settopdata} data={data} setdata={setdata}/>
      </div>
      <div className={styles.row}>
        <Item  item={bottomdata} setitem={setbottomdata} data={data} setdata={setdata} />
      </div>
    </div>
  );
}
