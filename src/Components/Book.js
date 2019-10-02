import React from 'react';
import ButtonSelect from './ButtonSelect';

const Book = (props) => {
    const { book, handleUpdateBook } = props;

    /**
     * handle the target that handleUpdateBook would update
     * @param {*} event the book that would apply the update
     */
    const handleChange = (event) => handleUpdateBook(book, event.target.value);

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.thumbnail : undefined})`
                        }} />
                    <ButtonSelect status={book.shelf} onChange={handleChange} />
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors !== undefined ?
                    <div className="book-authors">{book.authors.map((author, index) => {
                        if (index !== 0)
                            return <React.Fragment key={index}><br /> {author}</React.Fragment>
                        else return author
                    })}
                    </div>
                    : undefined
                }
            </div>
        </li>
    );
};

export default Book;