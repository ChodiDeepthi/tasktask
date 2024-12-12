import styles from './Component2.module.css';
import Graph from './Graph.jsx';
import AddedEle from './AddedEle.jsx';
export default function  Component2(){

    return (
<div className={styles.item}>
      <Graph />

      <AddedEle/>
    </div>);

    
}