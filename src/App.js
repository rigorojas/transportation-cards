import React from 'react';
import linkedList from './utils/linkedList.js';
import cards from './data/cards.js'
import './App.css';

const sortedCards = linkedList(cards);

const App = () => {
  return (
    <div className="App">
        <h1>Transportation Cards</h1>
        {sortedCards.map((card, i) => (
            <div className="card" key={i}>
                <div>{card.transport}</div>
                <div>{card.origin}</div>
                <div>{card.destination}</div>
                <div>{card.seat}</div>
                <hr />
            </div>
        ))}
    </div>
  );
}

export default App;
