import React, {Component} from 'react';
import axios from 'axios';

export default class App extends React.Component {

    handleClick(e) {
      e.preventDefault();

      axios.get('/test?msg=axios')
      .then(function (response) {
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      })
      .catch(function (error) {
        console.error('[Error] ' + error);
      });
    }

    render() {
        return (
          <div className="container">
            <form className="form-signin">
              <h2 className="form-signin-heading">Please sign in</h2>
              <label htmlFor="inputEmail" className="sr-only">ID</label>
              <input type="text" id="inputEmail" className="form-control" placeholder="User ID" required />
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
        );
    }
}




// export default className App extends React.Component {
//     render() {
//         return (
//                 <div>
//                     <ul>
//                         <li><Link to="home">Home</Link></li>
//                         <li><Link to="about">About</Link></li>
//                         <li><Link to="articles">Articles</Link></li>
//                     </ul>
//                     {this.props.children}
//                 </div>
//         );
//     }
// }
