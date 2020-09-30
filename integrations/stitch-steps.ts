import { buildAuthorizationUrl, redirectUri, stitchClientId } from './stitch-utils';
import { StitchAccessToken } from './types';
const tokenEndpoint = 'https://secure.stitch.money/connect/token';

async function retrieveTokenUsingAuthorizationCode(
    authorizationCode: string, codeVerifier: string): Promise<StitchAccessToken> {
    const body = {
        grant_type: 'authorization_code',
        client_id: stitchClientId,
        code: authorizationCode,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier
    };

    const bodyString = Object.entries(body).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
    const response = await fetch(tokenEndpoint, {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: bodyString
    });

    const responseBody = await response.json();
    console.log('Tokens: ', responseBody);

    return {
        id_token: responseBody.id_token,
        access_token: responseBody.access_token,
        expires_in: responseBody.expires_in,
        token_type: responseBody.token_type,
        refresh_token: responseBody.refresh_token,
        scope: responseBody.scope
    };
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

    return stitchUrl;
}

export async function getStitchAccessToken(authorizationCode: string, codeVerifier: string) {
    return await retrieveTokenUsingAuthorizationCode(authorizationCode, codeVerifier);
}

export async function refreshStitchAccessToken(refreshToken: string) {
    return await refreshAuthorizationCode(refreshToken);
}