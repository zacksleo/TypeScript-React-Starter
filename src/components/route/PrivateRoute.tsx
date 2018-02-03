import { Component } from 'react';
import { Redirect, Route } from 'react-router';
import PrivateRouteProps from './PrivateRouteProps';

class PrivateRoute extends Route<PrivateRouteProps> {

    @observable todo = [];

    public render() {
        if (this.status.isLoggedIn) {
            return <Component {...props} />;
        } else {
            return <Redirect to={ { pathname: '/login', state: { from: props.location } } } />;
        }
    }
}

export default PrivateRoute;