import { API_URL } from '../config';
import axios from 'axios';
import XMLToJson from '../helper/XMLTOJSON';

const SEARCH_BOOKS = `${API_URL}search/books/?`;
const BOOK_DETAILS = `${API_URL}bookDetails?`;

//https://www.goodreads.com/search/index.xml?key=Zdzfd8gLfAybmDaaC2F1mA&q=fifty
export function searchBooks(params = {}) {
    params['path'] = 'search/index.xml';
    return axios.get(SEARCH_BOOKS, {
            'params': params,
        },
    ).then(function(response) {

        const parser = new DOMParser();
        const XMLResponse = parser.parseFromString(response.data,
            'application/xml');

        const parseError = XMLResponse.getElementsByTagName('parsererror');

        if (parseError.length) {

            return Promise.reject('XML Parsing Error');
            //throw new Error("XML Parsing Error");
        } else {
            return XMLToJson(XMLResponse).GoodreadsResponse;
        }

    }).catch(function(error) {
        return Promise.reject(error);
    });
}

export function getBookDetails(params = {}) {

    params['path'] = 'book/show/';
    params['format'] = 'xml';
    return axios.get(BOOK_DETAILS, {
            'params': params,
        },
    ).then(function(response) {

        const parser = new DOMParser();
        const XMLResponse = parser.parseFromString(response.data, 'text/xml');

        const parseError = XMLResponse.getElementsByTagName('parsererror');

        if (parseError.length) {

            return Promise.reject('XML Parsing Error');
            //throw new Error("XML Parsing Error");
        } else {
            return XMLToJson(XMLResponse).GoodreadsResponse;
        }

    }).catch(function(error) {
        return Promise.reject(error);
    });
}
