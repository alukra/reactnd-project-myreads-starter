import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {
    const { value, onChange } = props
    return (
        <div className="search-books-bar">
            <Link to={"/"}>
                <button className="close-search" >Close</button>
            </Link>
            <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default SearchBar