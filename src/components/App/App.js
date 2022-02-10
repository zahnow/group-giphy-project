import React from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import SearchPage from '../SearchPage/SearchPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import HomePage from '../HomePage/HomePage';

function App(props) {
  return (
    <div>
      <Router>
      <header>
        <li><NavLink to="/">Home </NavLink></li>
        <li><NavLink to="/searchPage">Search </NavLink></li>
        <li><NavLink to="/favoritesPage">Favorites </NavLink></li>
      </header>
      <h1>Giphy Search Results</h1>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/searchPage">
          <SearchPage />
        </Route>
        <Route path="/favoritesPage">
          <FavoritesPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
