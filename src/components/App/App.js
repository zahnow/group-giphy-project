import React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import SearchPage from '../SearchPage/SearchPage';
import FavortiesPage from '../FavoritesPage/FavoritesPage';
import HomePage from '../HomePage/HomePage';

function App(props) {
  return (
    <div>
      <Router>
      <header>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/searchPage">Search </Link></li>
        <li><Link to="/favoritesPage">Favorites </Link></li>
      </header>
      <h1>Giphy Search Results</h1>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/searchPage">
          <SearchPage />
        </Route>
        <Route path="/favoritesPage">
          <FavortiesPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
