// src/IndianPlayers.js
import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Virat', 'Rohit', 'Rahul'];
  const RanjiTrophy = ['Sundar', 'Pujara', 'Iyer'];

  // Merge using spread operator
  const allPlayers = [...T20players, ...RanjiTrophy];

  // Destructuring Odd and Even players
  const oddPlayers = allPlayers.filter((_, idx) => idx % 2 !== 0);
  const evenPlayers = allPlayers.filter((_, idx) => idx % 2 === 0);

  return (
    <div>
      <h2>All Players (Merged):</h2>
      <ul>
        {allPlayers.map((name, index) => <li key={index}>{name}</li>)}
      </ul>

      <h3>Even Team Players:</h3>
      <ul>
        {evenPlayers.map((name, index) => <li key={index}>{name}</li>)}
      </ul>

      <h3>Odd Team Players:</h3>
      <ul>
        {oddPlayers.map((name, index) => <li key={index}>{name}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
