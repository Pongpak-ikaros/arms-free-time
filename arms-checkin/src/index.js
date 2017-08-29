import React from 'react';
import ReactDOM  from 'react-dom';
import classes from './index.css';
function tick() {

    const element = (
     <div>
        {/* <div className="fix-top">
            <img class="" src="https://facebook.github.io/react/img/logo.svg" height="50"/>
        </div> */}
        <div className="container border">
            <div className="text-center"><h2>Time Now  <br/>{new Date().toLocaleTimeString()}.</h2></div>
            <input type="text"  className="form-control" placeholder="Enter Fast Code"/> 
            <button type="button" className="btn btn-primary btn-block">Fast Checkin</button>
        
        </div>
    </div>
    );
    ReactDOM.render(
      element,
      document.getElementById('root')
    );
  }
  function alertX(){
    //   var x = require('moment');
  }
setInterval(tick, 10);
  