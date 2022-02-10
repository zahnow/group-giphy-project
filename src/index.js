import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

// REDUX IMPORTS
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// REDUX SAGA IMPORTS
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

// Redux Reducers

const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_FAVORITES":
            return action.payload;

        default:
            return state;
    }
}

const categoriesReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_CATEGORIES":
            return action.payload;
    
        default:
            return state;
    }
}

// Create the store

const storeInstance = createStore(
  combineReducers({
    favorites: favoritesReducer,
    categories: categoriesReducer
  }), applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
