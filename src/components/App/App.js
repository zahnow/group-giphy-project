import React from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import SearchPage from '../SearchPage/SearchPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import Header from '../Header/Header';
import FavoritesCategory from '../FavoritesPage/FavoritesCategory'
import HomePage from '../HomePage/HomePage';

function App(props) {
  return (
    <div>
      <Router>
      <header>
        <Header />
      </header>
      <h1>Giphy Search Results</h1>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/searchPage">
          <SearchPage />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesPage />
        </Route>
        <Route path="/favorites/:id">
          <FavoritesCategory />
        </Route>
      </Router>
    </div>
  );
}

export default App;
