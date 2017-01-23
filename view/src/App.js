import React, {Component} from 'react';
import axios from 'axios';

export default class App extends React.Component {

    handleClick(e) {
    }

    render() {
        return (
          <div>
            <div>
              <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
            </div>
             <div id="myModal" className="modal fade" role="dialog">
             <div className="modal-dialog">
                 <div className="modal-content">
                    <div className="container">
                      <form className="form-signin">
                        <h2 className="form-signin-heading">Please sign in</h2>
                        <label htmlFor="inputID" className="sr-only">ID</label>
                        <input type="text" id="inputID" className="form-control" placeholder="User ID" required />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                          </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleClick}>Sign in</button>
                      </form>
                    </div>
                  </div>
               </div>
             </div>
          </div>
        );
    }
}
