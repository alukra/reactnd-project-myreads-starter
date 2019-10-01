import React from 'react';
import BookGrid from './BookGrid';

const Bookshelf = (props) => {
    const { title, type, books, handleUpdateBook } = props
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <BookGrid books={books.filter(book => book.shelf === type)} handleUpdateBook={handleUpdateBook}/>
            </div>
        </div>
    )
}

export default Bookshelf;