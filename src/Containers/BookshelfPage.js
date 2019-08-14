import React from 'react';
import * as BooksAPI from '../Api/BooksAPI';
import { Link } from 'react-router-dom';
import Bookshelf from '../Components/Bookshelf'
import ActionButton from '../Components/ActionButton'

class BookshelfPage extends React.Component {

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title={"Currently Reading"} books={[]} type={"test"} />
                        <Bookshelf title={"Want to Read"} books={[]} type={"test"} />
                        <Bookshelf title={"Read"} books={[]} type={"test"} />
                    </div>
                </div>
                <Link to={"/search"} >
                    <ActionButton label={"Add a book"} />
                </Link>
            </div>
        )
    }
}

export default BookshelfPage