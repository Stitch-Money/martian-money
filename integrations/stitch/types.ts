export type StitchScope = 'openid' | 'transactions' | 'accounts' | 'offline_access';
export type StitchTokenType = 'Bearer';

export type StitchAuthorizationUrlParameters = {
    scope: string
    response_type: 'code'
    code_challenge_method: 'S256'
    redirect_uri: string
    state: string
    nonce: string
    client_id: string
    code_challenge: string
};

export type StitchAccessToken = {
    id_token: string
    access_token: string
    expires_in: number
    token_type: StitchTokenType
    refresh_token: string
    scope: StitchScope[]
};

export type StitchAccessTokenRequest = {
    grant_type: 'authorization_code'
    client_id: string
    code: string
    redirect_uri: string
    code_verifier: string
};
