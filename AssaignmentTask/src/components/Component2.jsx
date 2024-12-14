import styles from './Component2.module.css';
import Graph from './Graph.jsx';
import AddedEle from './AddedEle.jsx';
export default function  Component2({data,setdata}){

    return (
<div className={styles.item}>
      <Graph data={data} setdata={setdata}/>

      <AddedEle/>
    </div>);

    
}