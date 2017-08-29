import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import ModalBox from './modal.js';
// import $ from 'jquery'; 

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    //   this.ModalBox = this.ModalBox.bind(this);
    //   this.textBox = this.textBox.bind(this);
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

    CompanyLogo(){
        
    }

    render() {
      return (
        <div className="container mb-5">
            <div className="mb-5">
                <img src="img/arms-logo.png"/>
            </div>
            <div className="text-center mb-5">
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
  