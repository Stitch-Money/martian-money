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