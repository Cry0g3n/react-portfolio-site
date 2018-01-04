import React from 'react';
import {shallow} from 'enzyme';
import Welcome from "../Welcome";
import Parallax from "../components/Parallax";
import AuthButton from "../components/AuthButton";
import Flipper from "../components/Flipper";
import Footer from "../components/Footer";

describe('Компонент Welcome', () => {
    describe('Содержит компонент', () => {
        const wrapper = shallow(<Welcome/>);

        it('Parallax', () => {
            expect(wrapper.find(Parallax)).toHaveLength(1);
        });
        it('AuthButton', () => {
            expect(wrapper.find(AuthButton)).toHaveLength(1);
        });
        it('Flipper', () => {
            expect(wrapper.find(Flipper)).toHaveLength(1);
        });
        it('Footer', () => {
            expect(wrapper.find(Footer)).toHaveLength(1);
        });
    });
});