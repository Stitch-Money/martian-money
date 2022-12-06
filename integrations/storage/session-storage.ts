import { SessionExperience } from '../../util/enums';

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

export function setSessionExperience(sessionExperience: SessionExperience) {
    setItem('sessionExperience', sessionExperience);
}

export function getSessionExperience(): string | null {
    return getItem('sessionExperience');
}

export function setAuthSessionVariables(sessionExperience: SessionExperience, nonce?: string, verifier?: string) {
    setSessionNonce(nonce ?? '');
    setSessionVerifier(verifier ?? '');
    setSessionExperience(sessionExperience);
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
