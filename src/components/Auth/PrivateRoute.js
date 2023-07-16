import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Auth = () => {
    return true;
}

const PrivateRoute = () => {
    const IsAuthnication = Auth();
    return IsAuthnication ? <Outlet /> : <Navigate to='/' />

}

export default PrivateRoute
