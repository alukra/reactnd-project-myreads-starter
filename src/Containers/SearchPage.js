import React from 'react';
import BookGrid from '../Components/BookGrid';
import SearchBar from '../Components/SearchBar';


const SearchPage = (props) => {
    return (
        <div className="search-books">
            <SearchBar />
            <div className="search-books-results">
                <BookGrid books={[]} />
            </div>
        </div>
    );
};

export default SearchPage