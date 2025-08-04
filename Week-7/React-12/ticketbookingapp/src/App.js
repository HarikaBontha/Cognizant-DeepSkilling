// src/App.js
import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>✈️ Ticket Booking App</h1>
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout}>Logout</button>
            <UserPage />
          </>
        ) : (
          <>
            <button onClick={handleLogin}>Login</button>
            <GuestPage />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
