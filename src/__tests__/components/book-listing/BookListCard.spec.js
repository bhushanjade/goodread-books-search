/**
 * Created by bhushan on 18/3/19.
 */
import React from 'react';
import { shallow } from 'enzyme';
import  BookListCard from '../../../components/book-listing/BookListCard';
import { book } from '../../../__mocks__/books.data';

describe('BookListCard', () => {
    it('should render book card with book info', () => {
        const component = shallow(<BookListCard book={book} />);

        expect(component).toMatchSnapshot();
    });
});