export const stitchClientId: string = 'c05f0a6c-4d56-4306-830b-1a0a35fd5075';
const stitchScopes: string[] = ['accountholders', 'balances', 'transactions', 'accounts', 'offline_access', 'openid'];
export const redirectUri: string = 'http://localhost:3000/return';

function base64UrlEncode(byteArray: Uint8Array): string {
    const charCodes = String.fromCharCode(...byteArray);
    return window.btoa(charCodes)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}

async function sha256(verifier: string): Promise<Uint8Array> {
    const msgBuffer = new TextEncoder().encode(verifier);
    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    return new Uint8Array(hashBuffer);
}

async function generateVerifierChallengePair() {
    const randomBytes = crypto.getRandomValues(new Uint8Array(32));
    const verifier = base64UrlEncode(randomBytes);
    const challenge = await sha256(verifier).then(base64UrlEncode);

    return [verifier, challenge];
}

function generateRandomStateOrNonce(): string {
    const randomBytes = crypto.getRandomValues(new Uint8Array(32));
    return base64UrlEncode(randomBytes);
}

export async function buildAuthorizationUrl(): Promise<string[]> {
    const state = generateRandomStateOrNonce();
    const nonce = generateRandomStateOrNonce();
    const [verifier, challenge] = await generateVerifierChallengePair();

    const search = {
        client_id: stitchClientId,
        code_challenge: challenge,
        code_challenge_method: 'S256',
        redirect_uri: redirectUri,
        scope: stitchScopes.join(' '),
        response_type: 'code',
        nonce: nonce,
        state: state
    };

    const searchString = Object.entries(search).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
    return [`https://secure.stitch.money/connect/authorize?${searchString}`, verifier, nonce];
}
