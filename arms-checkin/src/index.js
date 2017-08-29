import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import ModalBox from './modal.js';
// import $ from 'jquery'; 

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    //   this.loginAuthen = this.loginAuthen.bind(this);
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }


  
    render() {
      return (
        <div className="container">
            <div className="text-center">
                <h2>
                    <ModalBox/>
                    { this.state.date.toDateString() }
                    &nbsp;&nbsp;
                    { this.state.date.toLocaleTimeString() } 
                </h2></div>
            <input type="text"  className="form-control mb-2" placeholder="Enter Fast Code"/> 
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
            </button> */}
            <button type="button" className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModal">Fast Checkin</button>
        
        </div>
      );
    }

  }
  

  ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
  );
// setInterval(tick, 10);
  