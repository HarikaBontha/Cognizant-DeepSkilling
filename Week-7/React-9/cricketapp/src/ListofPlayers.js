// src/ListofPlayers.js
import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 88 },
    { name: 'Dhoni', score: 60 },
    { name: 'Kohli', score: 75 },
    { name: 'Ashwin', score: 50 },
    { name: 'Rahul', score: 82 },
    { name: 'Shami', score: 65 },
    { name: 'Bumrah', score: 45 },
    { name: 'Hardik', score: 90 },
    { name: 'Jadeja', score: 70 },
    { name: 'Gill', score: 85 },
  ];

  // Filter scores below 70 using arrow function
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score below 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
