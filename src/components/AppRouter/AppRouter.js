import React, {PureComponent} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Welcome from "../../pages/Welcome";
import Portfolio from "../../pages/Portfolio";

export class AppRouter extends PureComponent {

    render() {

        return (
            <Switch>
                <Route path="/" exact component={Welcome}/>
                <Route path="/portfolio" exact component={Portfolio}/>
                <Redirect to="/"/>
            </Switch>
        );
    }
}

const mapStateToProps = state => ({

});


export default withRouter(connect(mapStateToProps, null)(AppRouter));
