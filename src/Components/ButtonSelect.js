import React from 'react';

const ButtonSelect = (props) => {
    const { status, onChange } = props;
    return (
        <div className="book-shelf-changer">
            <select value={status} onChange={onChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
};

ButtonSelect.defaultProps = {
    status: 'none'
};

export default ButtonSelect;