import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from '../Components/Bookshelf';
import ActionButton from '../Components/ActionButton';

const BookshelfPage = (props) => {
    const { books, handleUpdateBook } = props;
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Bookshelf title={"Currently Reading"} books={books} type={"currentlyReading"} handleUpdateBook={handleUpdateBook} />
                    <Bookshelf title={"Want to Read"} books={books} type={"wantToRead"} handleUpdateBook={handleUpdateBook} />
                    <Bookshelf title={"Read"} books={books} type={"read"} handleUpdateBook={handleUpdateBook} />
                </div>
            </div>
            <Link to={"/search"} >
                <ActionButton label={"Add a book"} />
            </Link>
        </div>
    );
};

export default BookshelfPage;