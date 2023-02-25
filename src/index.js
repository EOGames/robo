import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Robo from './Robo.js';

var limit = 11;
var elements = [];
var btn;
var btn2;

btn = document.getElementById('btn');
btn2 = document.getElementById('btn2');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {CreateButtonListner()};
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function CreateRobots()
{
  for(let i=0;i<limit;i++)
  {
    elements.push(<Robo id ={i} />);    
  }
  root.render(elements);
}

function CreateButtonListner()
{
  btn2.addEventListener('click',ChangeLimit);
}

function ChangeLimit()
{
  if (elements.length >0)
  {
    elements = [];
  }
  limit = Math.trunc(btn.value);
  console.log("value "+ limit); 
  
  btn.value = '';
  CreateRobots();
}
