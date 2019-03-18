import React, {Component} from 'react';

import {Jumbotron, Badge} from 'reactstrap';
import SearchBook from './components/SearchBook';


class App extends Component {
    render() {
        return (
            <>
                <div>
                    <h1 className="display-3">Search Books </h1>
                    <h6 className="powered-by text-muted">Powered By : <a href="//www.goodreads.com/api">GoodRead API</a></h6>
                </div>
                <Jumbotron className="body-panel">
                    <SearchBook/>
                </Jumbotron>
            </>
        );
    }
}


export default App;
