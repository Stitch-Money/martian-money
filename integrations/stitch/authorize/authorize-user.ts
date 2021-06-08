import {
    generateRandomStateOrNonce,
    generateVerifierChallengePair,
    getUrlEncodedFormData
} from './utils';
import { StitchAuthorizationUrlParameters } from '../types';
import { StitchConfiguration } from '../client';

const stitchScopes: string[] = ['accountholders', 'balances', 'transactions', 'accounts', 'offline_access', 'openid', 'bankstatements'];

export async function getStitchAuthorizationCodeUrl() {
    const clientId = StitchConfiguration.clientId;
    return await buildStitchAuthorizationCodeUrl(clientId);
}

export async function getStitchTestClientAuthorizationCodeUrl() {
    const clientId = StitchConfiguration.testClientId;
    return await buildStitchAuthorizationCodeUrl(clientId);
}

export async function buildStitchAuthorizationCodeUrl(clientId: string) {
    return await buildAuthorizationUrl(clientId);
}

async function buildAuthorizationUrl(clientId: string): Promise<{ url: string, nonce: string, verifier: string }> {
    const state = generateRandomStateOrNonce();
    const nonce = generateRandomStateOrNonce();
    const [verifier, challenge] = await generateVerifierChallengePair();

    const { redirectUri, identityServerUri } = StitchConfiguration;

    const search: StitchAuthorizationUrlParameters = {
        client_id: clientId,
        code_challenge: challenge,
        code_challenge_method: 'S256',
        redirect_uri: redirectUri,
        scope: stitchScopes.join(' '),
        response_type: 'code',
        nonce: nonce,
        state: state
    };

    const searchString = getUrlEncodedFormData(search);
    return {
        url: `${identityServerUri}/connect/authorize?${searchString}`,
        verifier,
        nonce
    };
}
