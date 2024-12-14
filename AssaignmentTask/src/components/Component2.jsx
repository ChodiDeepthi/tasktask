import styles from './Component2.module.css';
import Graph from './Graph.jsx';
import AddedEle from './AddedEle.jsx';

export default function Component2({ data, setdata }) {
  return (
    <div className={styles.item}>
      <Graph data={data} setdata={setdata} />
      <div className={styles.container}>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <AddedEle item={item} data={data} setdata={setdata} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
