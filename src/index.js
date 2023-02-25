import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';
import index from './index.css'
import reportWebVitals from './reportWebVitals';

let limit = 15;
let spawnedCards = [];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="card_holder">   
   {GenrateCards()}
    
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function GenrateCards()
{
  for(let i=0; i<limit; i++)
  {
    createElement()
    Card.id = i;
    spawnedCards.push(<Card id = {i} />);
  }
  return spawnedCards;
}
