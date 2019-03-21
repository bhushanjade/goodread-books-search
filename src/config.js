//https://www.goodreads.com/search/index.xml?key=Zdzfd8gLfAybmDaaC2F1mA&q=fifty
console.log("env",process.env.NODE_ENV);
const config = {
    'cors_url': window.location.protocol + '//cors-anywhere.herokuapp.com',
//explicity set dev development protocol to http
    'protocol_scheme': process.env.NODE_ENV === 'development'
        ? 'http:'
        : window.location.protocol,
    'base_url': process.env.REACT_APP_BASE_URL,

};
export const API_URL = `${config.protocol_scheme}//${config.base_url}/`;
