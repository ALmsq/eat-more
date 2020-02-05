import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import NavBar from './components/NavBar';
import 'semantic-ui-css/semantic.min.css'







//REDUCERS
import place from './redux/placeReducer'
import query from './redux/queryReducer'
import login from './redux/loginReducer'
import order from './redux/ordersReducer'

const rootReducer = combineReducers({
    place: place,
    query: query,
    login: login,
    order: order

  })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(
    
    <Provider store={store}>
    <Router>
        <NavBar/>
        <App>
            {/* <NavBar/> */}

        </App>
    </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
