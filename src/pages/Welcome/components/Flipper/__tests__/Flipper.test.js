import React from 'react';
import {Flipper} from '../Flipper';
import {shallow} from 'enzyme';

describe('Flipper component', () => {
    const wrapper = shallow(<Flipper/>);

    describe('test render', () => { //TODO: переделать тест
        /*it('contain span with class "flip-container__active"', () => {
            wrapper.setProps({authMode: true});
            expect(wrapper.find('div.flip-container__active')).toHaveLength(1);
        });

        it('not contain span with class "flip-container__active"', () => {
            wrapper.setProps({authMode: false});
            expect(wrapper.find('div.flip-container__active')).toHaveLength(0);
        });*/
    });
});
