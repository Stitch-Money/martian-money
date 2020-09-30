import { getUrlEncodedFormData } from './utils';
import { StitchAccessToken, StitchAccessTokenRequest } from './types';
import { redirectUri, stitchClientId } from './client';

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
    const response = await fetch('https://secure.stitch.money/connect/token', {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: bodyString
    });

    const stitchAccessToken = await response.json() as StitchAccessToken;
    console.log('Tokens: ', stitchAccessToken);

    return stitchAccessToken;
}
