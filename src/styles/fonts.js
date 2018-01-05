import {css} from 'styled-components';

export const roboto = (style) => {
    let fontFamily = `'Roboto', sans-serif`;
    let fontWeigth;
    switch (style) {
        case 'light':
            fontWeigth = 300;
            break;
        case 'regular':
            fontWeigth = 400;
            break;
        case 'medium':
            fontWeigth = 500;
            break;
        case 'bold':
            fontWeigth = 700;
            break;
        default:
            break;
    }
    return css`
        font-family: ${fontFamily};
        font-weight: ${fontWeigth};
    `;
};

export const bernier = () => {
    let fontFamily = `'BERNIERRegular-Regular', sans-serif`;
    return css`
        font-family: ${fontFamily};    
    `;
};