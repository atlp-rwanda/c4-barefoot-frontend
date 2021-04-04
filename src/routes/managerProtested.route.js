
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'


const managerRoute = props => {
    const { layout: Layout, component: Component, ...rest } = props;
    const token = localStorage.getItem('barefootUserToken');
    const role = localStorage.getItem('userRole');
    if (token && (role==='manager'|| role==='administrator')) {
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

managerRoute.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string
};

export default managerRoute;