import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import { Provider }             from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import configureStore from './configureStore';
import App from './App';
import {Home, About, Articles} from './main';

const store         = configureStore();
const syncedHistory = syncHistoryWithStore(browserHistory, store);

export default function Routes() {
  return (
    <Provider store={store}>
      <Router history = {browserHistory}>
          <Route path = "/" component = {App}>
             <IndexRoute component = {Home} />
             <Route path = "home" component = {Home} />
             <Route path = "about" component = {About} />
             <Route path = "articles" component = {Articles} />
          </Route>
       </Router>
    </Provider>
  );
}
