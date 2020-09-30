import {
    generateRandomStateOrNonce,
    generateVerifierChallengePair,
    getUrlEncodedFormData
} from './utils';
import { StitchAuthorizationUrlParameters } from './types';
import { redirectUri, stitchClientId } from './client';

const stitchScopes: string[] = ['accountholders', 'balances', 'transactions', 'accounts', 'offline_access', 'openid'];

export async function getStitchAuthorizationCodeUrl(): Promise<string> {
    const [stitchUrl, verifier, nonce] = await buildAuthorizationUrl();

    if (typeof window !== 'undefined') {
        localStorage.setItem('stitchVerifier', verifier);
        localStorage.setItem('stitchNonce', nonce);
    }

    return stitchUrl;
}

async function buildAuthorizationUrl(): Promise<string[]> {
    const state = generateRandomStateOrNonce();
    const nonce = generateRandomStateOrNonce();
    const [verifier, challenge] = await generateVerifierChallengePair();

    const search: StitchAuthorizationUrlParameters = {
        client_id: stitchClientId,
        code_challenge: challenge,
        code_challenge_method: 'S256',
        redirect_uri: redirectUri,
        scope: stitchScopes.join(' '),
        response_type: 'code',
        nonce: nonce,
        state: state
    };

    const searchString = getUrlEncodedFormData(search);
    return [`https://secure.stitch.money/connect/authorize?${searchString}`, verifier, nonce];
}
