import React from "react";
import { Route } from "react-router-dom";
import {  SecureRoute, Security, LoginCallback } from '@okta/okta-react';
import About from '../Component/About';
import Home from '../Component/Home';
import Topic from '../Component/Topic';

function Production() {
    const config ={
        issuer: process.env.REACT_APP_ISSUER,
        clientId: process.env.REACT_APP_CLIENT_ID,
        redirectUri: process.env.REACT_APP_URL+ 'implicit/callback',
        pkce: true,
        scopes: ['openid', 'profile', 'email'],
        disableHttpsCheck: false
    };

    return (
        <Security {...config}>
        
            <Route path="/implicit/callback" component={LoginCallback} />
            <SecureRoute exact path="/" component={Home} />
            <SecureRoute exact path="/about" component={About} />
            <SecureRoute exact path="/topic" component={Topic} />
        </Security>
    )
}

export default Production;