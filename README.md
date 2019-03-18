This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### [React App Powered by GoodRead API](https://goodread-book-search.herokuapp.com/)
### URL: https://goodread-book-search.herokuapp.com/
### Packages USED :
- [Reactstrap](https://reactstrap.github.io/)
- [Bootstrap](https://getbootstrap.com/)
- [axios](https://github.com/axios/axios) => FOR API requests.
- [USing XMLToJSON function from](https://gist.github.com/chinchang/8106a82c56ad007e27b1). With Slight modiffication to handle ```<![CDATA DESC_TEXT]>```
- [API](www.goodreads.com)
    - End Points Used :
        - `search/index.xml` => Search Books
        - `book/show/` => Get Book Details. Currently Only Using Description.
- [CORS ANYWHERE](https://cors-anywhere.herokuapp.com/) GoodRead API doesnot support CORS.                            

### Folder Structure & Details
```
───src
    │   config.js => Config JS Contails API URL with CORS anywhere.
    │   setupTests.js => Test cases Setup
    │
    ├───api
    │       books.api.js => API to get books data
    │
    ├───components
    │   │   BookRating.js => Book Rating component uses React-stars.
    │   │   SearchBook.js => Search Book. Main page component
    │   │
    │   ├───book-info
    │   │       BookDescription.js => Fetch Book Desciption
    │   │       BookInfo.js => Book Detailed Info
    │   │
    │   ├───book-listing
    │   │       BookListCard.js => Book Listing Card
    │   │       bookListing.css => CSS for Book Listing card
    │   │       BookListing.js => Holds All Book Listings
    │   │
    │   └───common 
    │           Error.js => Error Component
    │
    ├───helper
    │       XMLTOJSON.js => helper function to convert XML TO JSON
    │
    ├───__mocks__
    │       books.data.js => Mocks for unit test
    │
    └───__tests__ => unit test cases.
        └───components
            │   SearchBook.spec.js
            │
            └───book-listing
                │   BookListCard.spec.js
                │   BookListing.spec.js
                │
                └───__snapshots__
                        BookListCard.spec.js.snap
```

# Features In Current Version:

1. Search for books by title, author, or ISBN.
2. Displays upto 20 search results in bootstrap cards.
3. Displays only title, author, rating.
4. See the description and rating, and other details by clicking on individual book result.

# Future/TODO Implementation:

Some of the things that I want to implement in the future version are:

1. Detailed Reviews.
2. Detailed Ratings with each stars & count
2. User Related Activities Like :
    - Add a book to a shelf.
    - show a widget of a member's favorite books
    - Get a user's read status
    - Add/update/delete review
3. Add own css in place of bootstrap.



### Configuration 
- Create `.env` file & add `REACT_APP_API_KEY=<YOUR API KEY>`
- Run `npm run test` to run unit test cases. ( It uses CRA so all options will work.)
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
