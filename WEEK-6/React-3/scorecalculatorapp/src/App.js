import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore name="Harika" school="Vijeta High School" total={500} goal={5} />
    </div>
  );
}

export default App;
