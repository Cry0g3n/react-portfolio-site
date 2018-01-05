import {css} from 'styled-components';

const sizes = {
    phone: 320,
    tablet: 768,
    desktop: 1200,
    largeDesktop: 1800,
};

export const media = {
    phone: (...args) => css`
    @media (min-width: ${sizes.phone}px) and (max-width: ${sizes.tablet - 1}px) {
           ${css(...args)}
        }
    `,
    tablet: (...args) => css`
    @media (min-width: ${sizes.tablet}px) and (max-width: ${sizes.desktop - 1}px) {
           ${css(...args)}
        }
    `,
    desktop: (...args) => css`
    @media (min-width: ${sizes.desktop}px) and (max-width: ${sizes.largeDesktop}px) {
           ${css(...args)}
        }
    `,
};