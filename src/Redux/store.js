// import { applyMiddleware, createStore } from 'redux'
// import rootReducer from './rootReduer'
// import Thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension';

// const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(Thunk)))

// export default store

import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReduer.js'; 
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;



  