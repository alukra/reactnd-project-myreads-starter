import React from 'react';
import Book from './Book';

const BookGrid = (props) => {
    const { books, handleUpdateBook } = props
    return (
        <ol className="books-grid">
            {books.map(book =>
                <Book book={book} key={book.id} handleUpdateBook={handleUpdateBook} />
            )}
        </ol>
    )
}

export default BookGrid;