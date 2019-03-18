import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import BookInfo from "./components/book-info/BookInfo";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
const NoMatch = ({location}) => (
    <div>
        <h3>
            No match for <code>{location.pathName}</code>
        </h3>
    </div>
);

ReactDOM.render(<div className="container"><Router>
    <div>
        {/*<NavBar />*/}


        <Switch>


            <Route exact path="/" component={App}/>
            <Route path="/book/:bookid" component={BookInfo}/>

            <Route component={NoMatch}/>
        </Switch>
    </div>

</Router></div>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
