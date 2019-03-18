import React, {Component, Suspense, lazy} from 'react';
import {Spinner} from 'reactstrap';
import {searchBooks} from '../api/books.api';
import Error from './common/Error';

const BookListing = lazy(() => import('./book-listing/BookListing'));

export default class SearchBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'books': [],
            'error': "",
            'search_keyword': "",
            "total": 0,
            "page": 0
        }

        this.handleSearch = this.handleSearch.bind(this);
        this.searchBooks = this.searchBooks.bind(this);
    }

    handleSearch(e) {

        this.setState({
            "search_keyword": e.target.value
        });

    }

    searchBooks(e) {
        e.preventDefault();
        this.setState({
            isFetching: true
        });
        let {search_keyword} = this.state;
        if (search_keyword.trim().length > 0) {
            searchBooks({'q': this.state.search_keyword}).then(booksJSON => {
                if (booksJSON.search["total-results"] == 0) {

                    this.setState({
                        isFetching: false,
                        error: "No Books Found",
                        books: []
                    })
                } else {
                    this.setState({
                        isFetching: false,
                        error: "",
                        total: booksJSON.search["total-results"],
                        books: booksJSON.search.results.work
                    })
                }
            }).catch(error => this.setState({
                isFetching: false,
                error: error.toString(),
                books: []
            }));
        }
    }


    render() {
        let {isFetching, error, books} = this.state;
        return (
            <>
                <div className="form-group row">
                    <input className="mr-1 col-sm-9 form-control" type="text"
                           placeholder="Search Books By title, author, or ISBN..."
                           name="searchText" onChange={this.handleSearch}
                           value={this.state.search_keyword}/>
                    <button className="col-sm-2 btn btn-primary" onClick={this.searchBooks}>Search</button>
                    <br/>
                </div>
                <div className="row book-listing">
                    {isFetching && error === "" ? <div><Spinner/></div> :
                        books.length > 0 ? <Suspense fallback={<Spinner/>}> <BookListing books={books}/>
                        </Suspense> : !isFetching && error !== "" ?
                            <div><Error msg={error}/></div> : null}
                </div>
            </>
        )
    }
}