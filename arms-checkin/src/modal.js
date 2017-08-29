import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
import profile from './img/profile.png'
// import $ from 'jquery'; 

export default class ModalBox extends React.Component {
    render() {
        return (
            <div className="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Verify your identify.</h5>
                    {/*<button type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
                    {/*<span aria-hidden="true">&times;</span>*/}
                    {/*</button>*/}
                </div>
                <div className="modal-body">
                    <div>
                        <img src={ profile } className="profile rounded-circle img-thumbnail" alt="profile" />
                        <div>Mr. Mungming Nunrakk</div>
                        <small>[ developer ]</small>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Check In</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

