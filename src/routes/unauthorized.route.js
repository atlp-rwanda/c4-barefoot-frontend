
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'


const unauthorizedRoute = props => {
    const { layout: Layout, component: Component, ...rest } = props;
    const token = localStorage.getItem('barefootUserToken');
    const role = localStorage.getItem('userRole');
    if (!token) {
        return (
            <Route
                {...rest}
                render={matchProps => (
                    <Layout>
                        <Component {...matchProps} />
                    </Layout>
                )}
            />
        )
    } else {
        return <Redirect to="/home" />
    }

};

unauthorizedRoute.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string
};

export default unauthorizedRoute;