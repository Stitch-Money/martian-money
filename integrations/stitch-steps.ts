import { buildAuthorizationUrl, redirectUri, stitchClientId } from './stitch-utils';
import { StitchAccessToken } from './types';

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
    const response = await fetch('https://secure.stitch.money/connect/token', {
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
