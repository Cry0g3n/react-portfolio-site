import React, {PureComponent} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Welcome from "../../pages/Welcome";

export class AppRouter extends PureComponent {

    render() {

        return (
            <Switch>
                <Route path="/" exact component={Welcome}/>
                <Redirect to="/"/>
            </Switch>
        );
    }
}

const mapStateToProps = state => ({

});


export default withRouter(connect(mapStateToProps, null)(AppRouter));
