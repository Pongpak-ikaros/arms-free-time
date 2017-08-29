import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.setTimeEnter = this.setTimeEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            date: new Date() , 
            time_enter: 0,
            value: ''
        };
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

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    setTimeEnter(){
       if(this.state.value.length > 0){
            this.setState({
                time_enter:this.state.date.toLocaleTimeString()
            });
            // ReactDOM.render(
                // <ModalBox onShow/>
            // );    
       } else {
        //    document.getElementById('modal').innerHTML = '';
       }
    }
    CompanyLogo(){
        
    }

    render() {
      const timeEnter = this.state.date.toLocaleDateString();  
      return (
        <div className="container mb-5">
            <div className="mb-5">
                <img src="img/arms-logo.png"/>
            </div>
            <div className="text-center mb-5">
                <h3>          
                    { this.state.date.toDateString() }
                </h3>
                <h3>
                { this.state.date.toLocaleTimeString() }    
                </h3></div>
            <input type="text"  value={this.state.value} onChange={this.handleChange} className="form-control mb-2" placeholder="Enter Fast Code"/> 
            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Launch demo modal
            </button> */}
            <button type="button" className="btn btn-primary btn-block" 
            onClick={this.setTimeEnter}>Fast Check-in</button>
        
        </div>
      );
    }
  }
  
  
ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
  );
// setInterval(tick, 10);
  