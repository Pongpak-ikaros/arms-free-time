import React from 'react';
import ReactDOM  from 'react-dom';
import classes from './index.css';
function tick() {
    const element = (
      <div className="container">
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <input type="text"  placeholder="Enter Fast Code"/>
        <button class="btn"></button>
      </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  }
  
setInterval(tick, 10);
  