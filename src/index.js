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
import axios from 'axios';

///////////////////
// SAGAS
///////////////////

const sagaMiddleware = createSagaMiddleware();

function* watcherSaga() {
	yield takeEvery('FETCH_SEARCH_RESULTS', fetchSearchResults);
}

function* fetchSearchResults(action) {
    try {
        const results = yield axios.get(`/api/gifs/`);     // REPLACE WITH WHEN SEARCH IS READY `/api/gifs/${action.payload}`
        yield put({type: '', payload: ''})

    } catch (error) {
        console.warn('fetchSearch error: ', error);
    }
}


///////////////////
// REDUCERS
///////////////////

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

const searchResultsReducer = (state = [], action) => {
    switch (action.type) {
        case "SET_RESULTS":
            return action.payload;
    
        default:
            return state;
    }
}

///////////////////
// Create the store and run the watcher saga
///////////////////

const storeInstance = createStore(
  combineReducers({
    favorites: favoritesReducer,
    categories: categoriesReducer,
    searchResults: searchResultsReducer
  }), applyMiddleware(logger, sagaMiddleware)
)

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root'));
