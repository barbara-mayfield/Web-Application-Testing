import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import Display from './components/Display'

function App() {
  const [ballCount, setBallCount] = useState(0);
  const [strike, setStrike] = useState(0);
  


  return (
    <div className="App">
      <Display 
                ballCount={ballCount} 
                strike={strike} />
      <Dashboard 
                ballCount={ballCount}
                setBallCount={setBallCount} 
                strike={strike}
                setStrike={setStrike}          
      />
    </div>
  );
}

export default App;
