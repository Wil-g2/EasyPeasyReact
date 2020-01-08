import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
function App() {
  const counter = useStoreState(state => state.count);   
  const increment = useStoreActions(actions => actions.inc);
  const decrement = useStoreActions(actions => actions.decre);
  return (
    <div className="App">
      <h1>Test Easy peasy</h1>      
      <p>{counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
