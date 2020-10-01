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

export type StitchAccessTokenResponse = {
    id_token: string
    access_token: string
    expires_in: number
    token_type: StitchTokenType
    refresh_token: string
    scope: StitchScope[]
} | { error: string };

export type StitchAccessTokenRequest = {
    grant_type: 'authorization_code'
    client_id: string
    code: string
    redirect_uri: string
    code_verifier: string
};

export type StitchRefreshTokenRequest = {
    grant_type: 'refresh_token'
    client_id: string
    refresh_token: string
};

import { Decimal } from 'decimal.js';

export type BankAccountId = string & { __bankId__: null };
export type TransactionId = string & { __transactionId__: null };

export type Money = {
    quantity: Decimal
    currency: string
};

export type Identity = {
    nickname?: string
    middleName?: string
    dateOfBirth: string
    email: string
    familyName?: string
    fullName: string
    gender?: string
    givenName?: string
    contact?: Contact
    identifyingDocument?: IdentifyingDocument
};

export type Contact = {
    name?: string
    phoneNumber?: string
};

export type IdentifyingDocument = {
    country?: string
    number?: string
};

export type Transaction = {
    id: TransactionId
    amount: Money
    date: Date
    description: string
    reference?: string
    runningBalance: Money
};

export type BankAccount = {
    id: BankAccountId
    name: string
    accountNumber: string
    accountType: string
    availableBalance: Money
    bankId: string
    branchCode: string
    currentBalance: Money
};
