/**
 * Created by bhushan on 18/3/19.
 */
import React from 'react';
import { shallow } from 'enzyme';
import  BookListing from '../../../components/book-listing/BookListing';
import { bookSearchData } from '../../../__mocks__/books.data';
describe('BookListing', () => {
    it('should render Book Listing.', () => {
        const component = shallow(<BookListing books={bookSearchData} />);

        expect(component.exists()).toBe(true);
    });
    //
    it('should render Book Listing.', () => {
        const wrapper = shallow(<BookListing books={bookSearchData} />);

        expect(wrapper.find('BookListCard').length).toEqual(bookSearchData.length);
    });
});