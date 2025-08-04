
import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  const flag = true; // Change to false to display IndianPlayers

  return (
    <div className="App">
      <header className="App-header">
        <h1>🏏 Welcome to Cricket App</h1>
        {flag ? <ListofPlayers /> : <IndianPlayers />}
      </header>
    </div>
  );
}

export default App;
