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
    yield takeEvery('FETCH_CATEGORIES', fetchCategories);
    yield takeEvery('FETCH_ALL_FAVORITES', fetchAllFavorites);
    yield takeEvery('FETCH_FAVORITES_IN_CATEGORY', fetchFavoritesForCategory);
}

function* fetchSearchResults(action) {
    try {
        const results = yield axios.get(`/api/gifs/${action.payload}`);
        yield put({type: 'SET_RESULTS', payload: results});

    } catch (error) {
        console.warn('fetchSearch error: ', error);
    }
}

function* fetchFavoritesForCategory(action) {
    console.log('In fetch favorites for category', action.payload);
    try {
        const results = yield axios.get(`/api/favorite/${action.payload}`);
        console.log(results);
        yield put({type: 'SET_FAVORITES', payload: results.data});
    } catch (error) {
        console.warn('fetchFavorites error: ', error);
    }
}

function* fetchAllFavorites(action) {
    try {
        const results = yield axios.get(`/api/favorite`);
        console.log(results);
        yield put({type: 'SET_FAVORITES', payload: results.data});
    } catch (error) {
        console.warn('fetchAllFavorites error: ', error);
    }
}

function* fetchCategories(action) {
    try {
        const results = yield axios.get(`/api/category`);
        yield put({type: 'SET_CATEGORIES', payload: results.data});
    } catch (error) {
        console.warn('fetchAllCategories error: ', error);
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
