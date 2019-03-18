import {API_URL} from '../config';
import axios from 'axios';
import XMLToJson from '../helper/XMLTOJSON';

const qs = require('qs');
const API_KEY = process.env.REACT_APP_API_KEY;
const SEARCH_BOOKS = `${API_URL}search/index.xml?`
const BOOK_DETAILS = `${API_URL}book/show/?`

//https://www.goodreads.com/search/index.xml?key=Zdzfd8gLfAybmDaaC2F1mA&q=fifty
export function searchBooks(params = {}) {
    params['key'] = API_KEY;
    // params['q'] = 'fifty';
    // console.log(qs.stringify(params));
    return axios.get(SEARCH_BOOKS + qs.stringify(params), {
            headers: {"X-Requested-With": "XMLHttpRequest", "Access-Control-Allow-Origin": '*'},
            // crossDomain: true
        }
    ).then(function (response) {

        const parser = new DOMParser();
        const XMLResponse = parser.parseFromString(response.data, "application/xml");

        const parseError = XMLResponse.getElementsByTagName("parsererror");

        if (parseError.length) {

            // this.setState({
            //     error: "There was an error fetching results.",
            //     fetchingData: false
            // });
            return Promise.reject("XML Parsing Error");
            //throw new Error("XML Parsing Error");
        } else {
            return XMLToJson(XMLResponse).GoodreadsResponse;
        }

    })
        .catch(function (error) {
            return Promise.reject(error);
        })
}

export function getBookDetails(params = {}) {
    params['key'] = API_KEY;
    params['format'] = 'xml';
    return axios.get(BOOK_DETAILS + qs.stringify(params), {
            headers: {"X-Requested-With": "XMLHttpRequest", "Access-Control-Allow-Origin": '*'},
        }
    ).then(function (response) {

        const parser = new DOMParser();
        const XMLResponse = parser.parseFromString(response.data, "text/xml");

        const parseError = XMLResponse.getElementsByTagName("parsererror");

        if (parseError.length) {

            // this.setState({
            //     error: "There was an error fetching results.",
            //     fetchingData: false
            // });
            return Promise.reject("XML Parsing Error");
            //throw new Error("XML Parsing Error");
        } else {
            return XMLToJson(XMLResponse).GoodreadsResponse;
        }

    })
        .catch(function (error) {
            return Promise.reject(error);
        })
}
