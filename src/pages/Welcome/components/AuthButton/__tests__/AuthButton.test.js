import React from 'react';
import {AuthButton} from '../AuthButton';
import {shallow} from 'enzyme';

describe('AuthButton component', () => {
    const setAuthMode = jest.fn();
    const wrapper = shallow(
        <AuthButton setAuthMode={setAuthMode}/>
    );

    describe('check presence of instance methods', () => {
        it('have handleClick method', () => {
            expect(wrapper.instance().handleClick).toBeDefined();
        });
    });
});
