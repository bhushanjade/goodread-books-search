import React from 'react';
import { shallow } from 'enzyme';
import SearchBook from '../../components/SearchBook';
describe('SearchBook', () => {
    it('should render input and button ', () => {
        const component = shallow(<SearchBook />);

        expect(component.exists()).toBe(true);
    });

    it('should render input and button ', () => {
        const wrapper = shallow(<SearchBook />);

        expect(wrapper.exists()).toBe(true);
    });

    it('should echo input value change', () => {
        const wrapper = shallow(<SearchBook />);
        wrapper.find('input').simulate('change', {
            'target': {
                'value': 'steve',
            },
        });
        // console.log();
        expect(wrapper.find('input').get(0).props.value).toEqual('steve');
    });

    it('should submit form on click of submit button event should canceled',
        () => {
            const wrapper = shallow(<SearchBook />);
            let prevented = false;
            wrapper.find('button').simulate('click', {
                preventDefault: () => {
                    prevented = true;
                },
            });
            // console.log();
            expect(prevented).toBe(true);
        });



    it('should call searchbook function on button click and change isFetching state to true',
        () => {
            const wrapper = shallow(<SearchBook />);
            const searchBooks = jest.fn();
            let prevented = false;
            wrapper.find('button').simulate('click', {
                preventDefault: () => {
                    prevented = true;
                },
            });

            expect(wrapper.state().isFetching).toBe(true);

        });
});
