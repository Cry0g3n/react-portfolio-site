import React from 'react';
import {shallow} from 'enzyme';

import {Parallax} from '../Parallax';

describe('Компонент Parallax', () => {
    describe('Содержит метод', () => {
        const wrapper = shallow(<Parallax/>);

        it('componentDidMount', () => {
            expect(wrapper.instance().componentDidMount).toBeDefined();
        });

        it('selectPeriodHandler', () => {
            expect(wrapper.instance().mouseMoveHandler).toBeDefined();
        });
    });
});

