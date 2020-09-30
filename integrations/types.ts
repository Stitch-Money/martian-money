export type StitchScope = 'openid' | 'transactions' | 'accounts' | 'offline_access';
export type StitchTokenType = 'Bearer';

export type StitchAccessToken = {
    id_token: string
    access_token: string
    expires_in: number
    token_type: StitchTokenType
    refresh_token: string
    scope: StitchScope[]
};
