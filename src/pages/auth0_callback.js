import React, { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useAuth } from "react-use-auth";
import Spinner from "react-spinkit";

const Auth0CallbackPage = () => {

    const { handleAuthentication } = useAuth();
    useEffect(() => {
        handleAuthentication();
    }, []);

    return (
      <Layout>
        <SEO title="Blog" />
        <span className="pageTitle">Please Wait</span>
        <div id="spinnerContainer">
          <Spinner name="ball-grid-pulse" color="#007d00" className="sophieSpinner" />
        </div>

      </Layout>

    );
};

export default Auth0CallbackPage;
