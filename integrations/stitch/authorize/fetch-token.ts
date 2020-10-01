import { getUrlEncodedFormData } from './utils';
import { StitchAccessTokenResponse, StitchAccessTokenRequest, StitchRefreshTokenRequest } from '../types';
import { getClientIdForSession, setStitchAccessToken } from '../../storage/session-storage'
import { StitchConfiguration } from '../client';

export async function retrieveTokenUsingAuthorizationCode(
    authorizationCode: string,
    codeVerifier: string
): Promise<StitchAccessTokenResponse> {
    const { redirectUri, identityServerUri } = StitchConfiguration;

    const clientId = getClientIdForSession();

    if (clientId === null) {
        throw new Error('ClientId was not found in storage. It needs to be set before the authorization redirect. This allows us to determine whether the real or test client was used.');
    }
    console.log('using client id:', clientId);

    const body: StitchAccessTokenRequest = {
        grant_type: 'authorization_code',
        client_id: clientId,
        code: authorizationCode,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier
    };

    const bodyString = getUrlEncodedFormData(body);

    const response = await fetch(`${identityServerUri}/connect/token`, {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: bodyString
    });

    const tokenResponse = await response.json() as StitchAccessTokenResponse;
    console.log('Token: ', tokenResponse);

    if ('error' in tokenResponse) {
        throw new Error('Oh no! Failed to fetch token!' + tokenResponse.error);
    }

    setStitchAccessToken(tokenResponse.access_token);

    return tokenResponse;
}

/*
 *   Refresh tokens are not used in the demo, but we've added an example below
 */
export async function refreshAuthorizationCode(refreshToken: string) {
    const { clientId, identityServerUri } = StitchConfiguration;

    const body: StitchRefreshTokenRequest = {
        grant_type: 'refresh_token',
        client_id: clientId,
        refresh_token: refreshToken
    };
    const bodyString = Object.entries(body).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');

    const response = await fetch(`${identityServerUri}/connect/token`, {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: bodyString
    });

    const responseBody = await response.json();
    console.log('Tokens: ', responseBody);

    const stitchAccessToken = responseBody as StitchAccessTokenResponse;
    console.log('Tokens: ', stitchAccessToken);

    return stitchAccessToken;
}
