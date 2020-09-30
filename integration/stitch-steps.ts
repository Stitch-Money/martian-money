import { buildAuthorizationUrl, getUrlEncodedFormData, redirectUri, stitchClientId } from './stitch-utils';
import { StitchAccessToken, StitchAccessTokenRequest } from './types';

export async function getStitchAuthorizationCodeUrl(): Promise<string> {
    const [stitchUrl, verifier, nonce] = await buildAuthorizationUrl();

    if (typeof window !== 'undefined') {
        localStorage.setItem('stitchVerifier', verifier);
        localStorage.setItem('stitchNonce', nonce);
    }

    return stitchUrl;
}

export async function getStitchAccessToken(authorizationCode: string, codeVerifier: string) {
    return await retrieveTokenUsingAuthorizationCode(authorizationCode, codeVerifier);
}
import { buildAuthorizationUrl, redirectUri, stitchClientId } from './stitch-utils';
import { StitchAccessToken } from './types';
const tokenEndpoint = 'https://secure.stitch.money/connect/token';

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
    const body = {
        grant_type: 'refresh_token',
        client_id: stitchClientId,
        refresh_token: refreshToken
    }
    const bodyString = Object.entries(body).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');

    const response = await fetch(tokenEndpoint, {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: bodyString,
    });

    const responseBody = await response.json();
    console.log('Tokens: ',  responseBody);

    return responseBody;
}

export async function getStitchAuthorizationCodeUrl() {
    const [stitchUrl, verifier, nonce] = await buildAuthorizationUrl();

    if (typeof window !== 'undefined') {
        localStorage.setItem('stitchVerifier', verifier);
        localStorage.setItem('stitchNonce', nonce);
    }


export async function refreshStitchAccessToken(refreshToken: string) {
    return await refreshAuthorizationCode(refreshToken);
}