import React, {PureComponent, Fragment} from 'react';
import Header from "../../components/Header";
import Preloader from "../../components/Preloader";

class Portfolio extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header/>
                <Preloader/>
            </Fragment>
        );
    }
}

export default Portfolio;
