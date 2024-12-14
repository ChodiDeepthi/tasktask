import { useState } from 'react';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import './App.css';

function App() {
  const [datas,setdata]=useState([
    { id:3,name: "warmup", value: 75 },
    { id:1,name: "active", value: 100 },
    { id:2,name: "cooldown", value: 50 },
   
  ]);
  return ( // Add the return keyword
    <div className="app-container">
      <div className="component1">
        <Component1 data={datas} setdata={setdata}/>
      </div>
      <div className="component2" >
        <Component2 data={datas} setdata={setdata} />
      </div>
    </div>
  );
}

export default App;
