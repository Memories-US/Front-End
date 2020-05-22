import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateAdminRoute = ({ component: Component, ...rest }) => {
    const travelerID = window.localStorage.getItem('traveler_id');
    return (
        <Route 
            {...rest} 
            render={props => {
                if (parseInt(travelerID) === 66) {
                    return <Component {...props} />
                } else {
                    return <Redirect to='/dashboard' />
                }
            }} 
        />
    );
}
