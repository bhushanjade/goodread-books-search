//https://www.goodreads.com/search/index.xml?key=Zdzfd8gLfAybmDaaC2F1mA&q=fifty
const config = {
    'cors_url': window.location.protocol + '//cors-anywhere.herokuapp.com',
    // 'cors_url': 'https://crossorigin.me',
    'base_url': window.location.protocol + '//www.goodreads.com',
    // 'api_version': 'v6',
    // 'api_context': 'app/retailer'
}
export const API_URL = `${config.cors_url}/${config.base_url}/`;
