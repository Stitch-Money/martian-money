import { getUrlEncodedFormData } from './utils';
import { StitchAccessToken, StitchAccessTokenRequest, StitchRefreshTokenRequest } from './types';
import { redirectUri, stitchClientId } from './client';

const tokenEndpoint = 'https://secure.stitch.money/connect/token';

export async function getStitchAccessToken(authorizationCode: string, codeVerifier: string) {
    return await retrieveTokenUsingAuthorizationCode(authorizationCode, codeVerifier);
}

async function retrieveTokenUsingAuthorizationCode(
    authorizationCode: string,
    codeVerifier: string
): Promise<StitchAccessToken> {
    const body: StitchAccessTokenRequest = {
        grant_type: 'authorization_code',
        client_id: stitchClientId,
        code: authorizationCode,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier
    };

    const bodyString = getUrlEncodedFormData(body);
    const response = await fetch(tokenEndpoint, {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: bodyString
    });

    const stitchAccessToken = await response.json() as StitchAccessToken;
    console.log('Tokens: ', stitchAccessToken);

    return stitchAccessToken;
}

async function refreshAuthorizationCode(refreshToken: string) {
    const body: StitchRefreshTokenRequest = {
        grant_type: 'refresh_token',
        client_id: stitchClientId,
        refresh_token: refreshToken
    };
    const bodyString = Object.entries(body).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');

    const response = await fetch(tokenEndpoint, {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: bodyString
    });

    const responseBody = await response.json();
    console.log('Tokens: ', responseBody);

    const stitchAccessToken = responseBody as StitchAccessToken;
    console.log('Tokens: ', stitchAccessToken);

    return stitchAccessToken;
}

export async function refreshStitchAccessToken(refreshToken: string) {
    return await refreshAuthorizationCode(refreshToken);
}
