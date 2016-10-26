import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
}                         from 'redux';
import createLogger       from 'redux-logger';
import { persistState }   from 'redux-devtools';
import thunkMiddleware    from 'redux-thunk';
import default_reducer    from './test_reducer';
import { routerReducer }  from 'react-router-redux';
import DevTools           from './redux/devTools/devTools';

const loggerMiddleware = createLogger({
  level     : 'info',
  collapsed : true
});

// createStore : enhancer
const enhancer = compose(
  applyMiddleware(loggerMiddleware, thunkMiddleware),
  persistState(getDebugSessionKey()),
  DevTools.instrument()
);

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

// combine reducers
const reducer = combineReducers(Object.assign(default_reducer,{
  routing: routerReducer,
}));

export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
