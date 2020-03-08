/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

/**
 * AuthenticationCodeParameters are passed by user to retrieve a Code from the server.
 * - clientId: Application ID registered in the Azure portal
 * - scopes: requested token scopes
 * - authority: authorization endpoint that grants the code to the application
 * - redirectUri: redirectUri the server redirects the "code" to; should be registered in the portal during app registration
 * - codeChallenge?: codeChallenge generated by the user
 * - codeChallengeMethod?: method used to generate the code (eg: SHA256)
 * - state?: user set unique string to identify a code request (preferably a GUID) to help prevent CSRF attacks
 * - correlationId: custom correlationId given by user
 *
 * This "Request" parameter is called when `msal-node` makes the authorization code request to the service on behalf of the app
 */
export type AuthorizationCodeUrlParameters = {
    scopes?: Array<string>;
    authority?: string;
    redirectUri?: string;
    state?: string;
    prompt?: string;
    loginHint?: string;
    domainHint?: string;
    codeChallenge?: boolean;
    codeChallengeMethod?: boolean;
    claimsRequest?: string;
    nonce?: string;
    correlationId?: string;
};
