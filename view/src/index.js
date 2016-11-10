import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { Provider }             from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './configureStore';
import App from './App';
import {Home, About, Articles} from './main';

import DevTools from './redux/devTools/devTools';

const store         = configureStore();
const syncedHistory = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history = {syncedHistory}>
          <Route path = "/" component = {App}>
             <IndexRoute component = {Home} />
             <Route path = "home" component = {Home} />
             <Route path = "about" component = {About} />
             <Route path = "articles" component = {Articles} />
          </Route>
       </Router>
       <DevTools />
    </div>
  </Provider>,
   document.getElementById('root'));

// ReactDOM.render(
//   <App />,
//   document.getElementById('root'));
