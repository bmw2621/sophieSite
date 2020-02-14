import React from "react";
import { navigate } from "gatsby";

import { AuthProvider } from "react-use-auth";

export const wrapRootElement = ({ element }) => (
    <AuthProvider
        navigate={navigate}
        auth0_domain="dev-bvvj405t.auth0.com"
        auth0_client_id="bAZiap8pwJKDFTRESl3mh0JaNf80Up5b"
    >
        {element}
    </AuthProvider>
);
