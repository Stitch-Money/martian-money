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

export async function generateVerifierChallengePair() {
    const randomBytes = crypto.getRandomValues(new Uint8Array(32));
    const verifier = base64UrlEncode(randomBytes);
    const challenge = await sha256(verifier).then(base64UrlEncode);

    return [verifier, challenge];
}

export function generateRandomStateOrNonce(): string {
    const randomBytes = crypto.getRandomValues(new Uint8Array(32));
    return base64UrlEncode(randomBytes);
}

export function getUrlEncodedFormData(body: { [key: string]: any }) {
    return Object.entries(body).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&');
}
