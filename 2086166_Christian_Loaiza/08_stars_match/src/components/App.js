import React, { useState } from 'react';
import Game from './Game';

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  // Changing the key component, react will unmount the all component
  // reset the unmounted one and create a new component.
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export function App() {
  return <StarMatch />;
}
