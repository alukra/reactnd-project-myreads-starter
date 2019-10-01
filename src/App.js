import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import {
  SearchPage,
  BookshelfPage
} from './Containers';
import * as BooksAPI from './Api/BooksAPI';

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  componentWillUnmount() {
    this.setState({ books: [] })
  }

  handleUpdateBook = (book, status) => {
    BooksAPI.update(book, status).then(result => {
      BooksAPI.getAll().then(books => this.setState({ books }))
    })
  }

  render() {
    const { books } = this.state
    return <Router>
      <div className="app">
        <Route path={"/"} exact render={(props) => <BookshelfPage {...props} books={books} handleUpdateBook={this.handleUpdateBook} />} />
        <Route path={"/search"} render={(props) => <SearchPage {...props} books={books} handleUpdateBook={this.handleUpdateBook} />} />
      </div>
    </Router>
  }
}

export default BooksApp;
