import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import {Jumbotron} from 'reactstrap';
import BookDescription from './BookDescription';
import BookRating from '../BookRating';
import Error from '../common/Error';

const MAX_STARS = 5;

export default class BookInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error, info) {
        // Display fallback UI
        this.setState({hasError: true});
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    render() {
        let bookInfo = this.props.location.state.bookDetails;
        let bookDetails = bookInfo['best_book'];
        return <Jumbotron className="body-panel">
            <div className="row btn-go-back">
                <Link to="../">&lArr;Go Back</Link>
            </div>

            {this.state.hasError ? <Error msg="Error In XML to JSON. Please Select Another Book."/> : <div className="container text-center">
                <div className="row">
                    <div className="col-sm-3">
                        <img
                            src={bookDetails['image_url']}
                            className="img-fluid img-thumbnail"
                            alt="Avatar"/>
                    </div>
                    <div className="col-sm-8">
                        <div className="row">
                            <h2 className="card-title"> {bookDetails['title']}</h2>
                        </div>
                        <div className="row">
                            <p className="font-weight-bold float-left">
                                By&nbsp;{bookDetails['author'].name}</p>
                            <span>&nbsp;<i
                                className=""></i>Published {bookInfo['original_publication_year']}
                                — {bookInfo['books_count']} editions</span>

                        </div>
                        <div className="row">
                              <span className="float-right"> <BookRating
                                  count={MAX_STARS}
                                  value={bookInfo['average_rating']}
                                  edit={false}
                                  color2={'#ff0007'}
                                  color1={'#b7b7b7'}
                                  size={24}
                              /></span>
                        </div>
                        <div className="row">
                            <BookDescription bookId={bookDetails.id}/>
                        </div>
                    </div>
                </div>
            </div>}
        </Jumbotron>;

    }
}