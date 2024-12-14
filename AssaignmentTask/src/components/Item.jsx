import Element from './Element';
import styles from './Item.module.css';

export default function Item({item,setitem,data,setdata}) {
  return (
    <div className={styles.itemRow}>
      {item.map((x)=>(<Element  key ={item.name} item={x} data={data} setdata={setdata} ></Element>))}
    </div>
  );
}
