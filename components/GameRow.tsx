import React from 'react';

export default function GameRow({ game, stats, onChange, gameNumber }) {
  return (
    <div className="bg-gray-900 p-4 rounded">
      <h3 className="font-semibold mb-2">Game {gameNumber}</h3>
      <input type="text" placeholder="Game Name" value={game.name}
        onChange={(e) => onChange('name', e.target.value)}
        className="w-full mb-2 p-2 rounded bg-gray-800" />
      <input type="number" placeholder="Total Plays" value={game.totalPlays}
        onChange={(e) => onChange('totalPlays', e.target.value)}
        className="w-full mb-2 p-2 rounded bg-gray-800" />
      <input type="number" placeholder="Wins" value={game.wins}
        onChange={(e) => onChange('wins', e.target.value)}
        className="w-full mb-2 p-2 rounded bg-gray-800" />
      <input type="number" placeholder="Tickets Earned" value={game.tickets}
        onChange={(e) => onChange('tickets', e.target.value)}
        className="w-full mb-2 p-2 rounded bg-gray-800" />
      <p className="mt-2">🎯 Win Ratio: <span className="text-green-400">{stats.winRatio}%</span></p>
      <p>🎟 Avg Tickets/Play: <span className="text-yellow-400">{stats.avgTickets}</span></p>
    </div>
  );
}
