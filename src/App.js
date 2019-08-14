import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import {
  SearchPage,
  BookshelfPage
} from './Containers';

const BooksApp = () =>
  <Router>
    <div className="app">
      <Route path={"/"} exact component={BookshelfPage} />
      <Route path={"/search"} component={SearchPage} />
    </div>
  </Router>

export default BooksApp
