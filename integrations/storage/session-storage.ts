export function setSessionNonce(nonce: string) {
    if (typeof window !== 'undefined') {
        sessionStorage.setItem('stitchNonce', nonce);
    }
}
export function getSessionNonce(): string | null{
    if (typeof window !== 'undefined') {
        return sessionStorage.getItem('stitchNonce');
    }
    return null;
}

export function setSessionVerifier(verifier: string) {
    if (typeof window !== 'undefined') {
        sessionStorage.setItem('stitchVerifier', verifier);
    }
}

export function getSessionVerifier(): string | null{
    if (typeof window !== 'undefined') {
        return sessionStorage.getItem('stitchVerifier');
    }
    return null;
}

export function setStitchAccessToken(token: string) {
    setItem('stitchToken', token);
}

export function getStitchAccessToken(): string | null {
    return getItem('stitchToken');
}

export function setClientIdForSession(clientId: string) {
    setItem('clientId', clientId);
}

export function setAuthSessionVariables(clientId: string, nonce?: string, verifier?: string) {
    setSessionNonce(nonce ?? '');
    setSessionVerifier(verifier ?? '');
    setClientIdForSession(clientId);
}

export function getClientIdForSession() {
    return getItem('clientId');
}

function setItem(key: string, value: any) {
    if (typeof window !== 'undefined') {
        sessionStorage.setItem(key, value);
    }
}

function getItem(key: string): string | null {
    if (typeof window !== 'undefined') {
        return sessionStorage.getItem(key);
    }

    return null;
}
