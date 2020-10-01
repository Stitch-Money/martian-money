import {
    generateRandomStateOrNonce,
    generateVerifierChallengePair,
    getUrlEncodedFormData
} from './utils';
import { StitchAuthorizationUrlParameters } from './types';

import { setSessionNonce, setSessionVerifier } from 'integrations/storage/session-storage';
import { StitchTestEnvironmentConfiguration } from './client.test';

const stitchScopes: string[] = ['accountholders', 'balances', 'transactions', 'accounts', 'offline_access', 'openid'];

export async function getStitchAuthorizationCodeUrl(): Promise<string> {
    const [stitchUrl, verifier, nonce] = await buildAuthorizationUrl();

    setSessionNonce(nonce);
    setSessionVerifier(verifier);

    return stitchUrl;
}

async function buildAuthorizationUrl(): Promise<string[]> {
    const state = generateRandomStateOrNonce();
    const nonce = generateRandomStateOrNonce();
    const [verifier, challenge] = await generateVerifierChallengePair();

    const { clientId, redirectUri, identityServerUri } = StitchTestEnvironmentConfiguration;

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
    return [`${identityServerUri}/connect/authorize?${searchString}`, verifier, nonce];
}