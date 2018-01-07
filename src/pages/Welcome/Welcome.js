import React, {PureComponent, Fragment} from 'react';
import Parallax from "./components/Parallax";
import AuthButton from "./components/AuthButton";
import Flipper from "./components/Flipper";
import Footer from "./components/Footer";
import Preloader from "../../components/Preloader";

class Welcome extends PureComponent {
    render() {
        return (
            <Fragment>
                <Parallax/>
                <AuthButton/>
                <Flipper/>
                <Footer/>
                <Preloader/>
            </Fragment>
        );
    }
}

export default Welcome;
