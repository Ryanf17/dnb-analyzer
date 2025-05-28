import React, { useState } from 'react';
import Header from '../components/Header';
import GameRow from '../components/GameRow';

export default function Home() {
  const [gameSets, setGameSets] = useState([createGameSet()]);

  function createGameSet() {
    return [
      { name: '', totalPlays: '', wins: '', tickets: '' },
      { name: '', totalPlays: '', wins: '', tickets: '' },
    ];
  }

  function handleInputChange(setIndex, gameIndex, field, value) {
    const newSets = [...gameSets];
    newSets[setIndex][gameIndex][field] = value;
    setGameSets(newSets);
  }

  function addGameSet() {
    setGameSets([...gameSets, createGameSet()]);
  }

  function resetAll() {
    setGameSets([createGameSet()]);
  }

  function calculateStats(game) {
    const plays = parseInt(game.totalPlays);
    const wins = parseInt(game.wins);
    const tickets = parseInt(game.tickets);
    const winRatio = plays ? ((wins / plays) * 100).toFixed(2) : '0.00';
    const avgTickets = plays ? (tickets / plays).toFixed(2) : '0.00';
    return { winRatio, avgTickets };
  }

  return (
    <div className="p-4 bg-black text-white min-h-screen">
      <Header />
      {gameSets.map((set, setIndex) => (
        <div key={setIndex} className="mb-6 border border-gray-700 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Game Set {setIndex + 1}</h2>
          <div className="grid grid-cols-2 gap-6">
            {set.map((game, gameIndex) => (
              <GameRow
                key={gameIndex}
                game={game}
                stats={calculateStats(game)}
                onChange={(field, value) => handleInputChange(setIndex, gameIndex, field, value)}
                gameNumber={gameIndex + 1}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="flex gap-4">
        <button onClick={addGameSet} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Add Game Set</button>
        <button onClick={resetAll} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">Reset All</button>
      </div>
    </div>
  );
}
