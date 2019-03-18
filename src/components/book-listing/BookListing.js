import React, {Component} from 'react';

import './bookListing.css';
import BookListCard from './BookListCard';
import PropTypes from 'prop-types';

export default class BookListing extends Component {
    render() {
        let {books} = this.props;

        return <>
            {
                books.map((book) => <BookListCard key={book.id} book={book}/>)
            }
        </>;

    }
}

BookListing.propTypes  = {
    books: PropTypes.array.isRequired
};

