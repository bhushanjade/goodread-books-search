import React, { Component } from 'react';
import Error from '../common/Error';
import { getBookDetails } from '../../api/books.api';
import { Spinner } from 'reactstrap';

export default class BookDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'id': this.props.bookId,
            'desc': null,
            'isFetching': false,
            'error': false,

        };
    }

    componentDidMount() {
        this.setState({
            isFetching: true,
        });
        if (this.props.bookId) {
            getBookDetails({
                'id': this.state.id,
            }).then(booksJSON => {
                this.setState({
                    isFetching: false,
                    error: false,
                    desc: booksJSON.book['description']['#cdata-section'],
                });
            }).catch(error => this.setState({
                isFetching: false,
                error: error.toString(),
                desc: null,
            }));
        } else {
            this.setState({
                'isFetching': false,
                error: 'No Book ID Passed',
            });
        }
    }

    render() {
        let {isFetching, error, desc} = this.state;
        return <>{isFetching && !error
            ? <div><Spinner /></div>
            : !isFetching && desc != null
                ? <div style={{'textAlign': 'left'}}
                       dangerouslySetInnerHTML={{__html: desc}} />
                : !isFetching && error
                    ? <div><Error msg={error} /></div>
                    : null}
        </>;
    }
}