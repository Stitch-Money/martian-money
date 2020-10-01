import {
    generateRandomStateOrNonce,
    generateVerifierChallengePair,
    getUrlEncodedFormData
} from './utils';
import { StitchAuthorizationUrlParameters } from '../types';
import { setSessionNonce, setSessionVerifier } from 'integrations/storage/session-storage';
import { StitchConfiguration } from '../client.test';

const stitchScopes: string[] = ['accountholders', 'balances', 'transactions', 'accounts', 'offline_access', 'openid'];

export async function getStitchAuthorizationCodeUrl() {
    const clientId = StitchConfiguration.clientId;
    return await buildStitchAuthorizationCodeUrl(clientId);
}

export async function getStitchTestClientAuthorizationCodeUrl() {
    const clientId = StitchConfiguration.testClientId;
    return await buildStitchAuthorizationCodeUrl(clientId);
}

export async function buildStitchAuthorizationCodeUrl(clientId: string): Promise<string> {
    const [stitchUrl, verifier, nonce] = await buildAuthorizationUrl(clientId);

    setSessionNonce(nonce);
    setSessionVerifier(verifier);

    return stitchUrl;
}

async function buildAuthorizationUrl(clientId: string): Promise<string[]> {
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
    return [`${identityServerUri}/connect/authorize?${searchString}`, verifier, nonce];
}
