import React, { useEffect } from "react";
import { useAuth } from "react-use-auth";
import Spinner from "react-spinkit";

const Auth0CallbackPage = () => {

    const { handleAuthentication } = useAuth();
    useEffect(() => {
        handleAuthentication();
    }, []);

    return (
            <Spinner name="ball-grid-pulse" color="white" className="sophieSpinner" />
    );
};

export default Auth0CallbackPage;
