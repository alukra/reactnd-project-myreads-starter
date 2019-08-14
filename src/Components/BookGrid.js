import React from 'react'
import Book from './Book'

const BookGrid = (props) => {
    const { books } = props
    return (
        <ol className="books-grid">
            {books.map(book =>
                <Book book={book} key={book.id} />
            )}
        </ol>
    )
}

export default BookGrid