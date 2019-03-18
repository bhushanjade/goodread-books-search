import React from 'react';

import {Link} from 'react-router-dom';
import BookRating from '../BookRating';
import PropTypes from "prop-types";


const MAX_STARS = 5;
export default function BookListCard(props) {
    let book = props.book;
    let bookDetails = book['best_book'];

    return <div className="col-sm-6 col-md-4 col-lg-3 mt-4"
                key={bookDetails.id}>
        <Link
            to={{
                pathname: '/book/' + bookDetails.id,
                state: {bookDetails: book},
            }}
            /*to={`./feed/${url.id}`}*/>

            <div className="card">
                <img className="card-img-top" src={bookDetails['image_url']}/>
                <div className="card-block">
                    <h4 className="card-title"> {bookDetails['title']}</h4>

                    <div className="card-text">
                        {bookDetails['author'].name}
                        {/*<span><i className=""></i>Published {book["original_publication_year"]} — {book["books_count"]} editions</span>*/}
                    </div>
                </div>
                <div className="card-footer">
                    <span
                        className="float-right"> ({book['average_rating']})</span>
                    <span className="float-right">
                        <BookRating count={MAX_STARS}
                                    value={book['average_rating']} size={24}/>
                    </span>
                </div>
            </div>
        </Link>
    </div>;

}

BookListCard.propTypes = {
    book: PropTypes.object.isRequired
};
