import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import UseAuth from '../../Context/UseAuth';

const AdminRoute= ({ children, ...rest }) => {
    const { user, loading ,admin} = UseAuth();
    if (loading) return 'loading';
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children : <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
            ></Redirect>}
        >

        </Route>
    );
};

export default AdminRoute;