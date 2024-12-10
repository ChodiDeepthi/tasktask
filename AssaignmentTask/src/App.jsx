import { useState } from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import './App.css';

function App() {
  return ( // Add the return keyword
    <div className="app-container">
      <div className="component1">
        <Component1 />
      </div>
      <div className="component2">
        <Component2 />
      </div>
    </div>
  );
}

export default App;
