import React from 'react';
import BookGrid from '../Components/BookGrid';
import SearchBar from '../Components/SearchBar';
import { search } from '../Api/BooksAPI';


class SearchPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: '',
            filteredBooks: []
        }
    }

    componentWillUnmount() {
        this.setState({ filteredBooks: [], query: '' })
    }

    handleChange = (event) => {
        this.setState({ query: event.target.value }, () => {
            if (this.state.query === "") {
                this.setState({ filteredBooks: [] });
            } else {
                search(this.state.query).then(books => {
                    if (books.error !== undefined) {
                        this.setState({ filteredBooks: [] });
                    } else {
                        this.setState({ filteredBooks: books });
                    }
                })
            }
        })
    }

    mergeBooks = () => {
        const { books } = this.props;
        const { filteredBooks } = this.state;

        return filteredBooks.reduce((allBooks, filteredBook) => {
            const sameBook = books.filter(book => {
                return book.id === filteredBook.id
            });

            if (sameBook.length > 0)
                return [...allBooks, ...sameBook];
            else
                return [...allBooks, filteredBook];
        }, []);
    }

    render() {
        const { query } = this.state;
        const { handleUpdateBook } = this.props;
        return (
            <div className="search-books">
                <SearchBar onChange={this.handleChange} value={query} />
                <div className="search-books-results">
                    <BookGrid books={this.mergeBooks()} handleUpdateBook={handleUpdateBook} />
                </div>
            </div>
        );
    }
}

export default SearchPage;