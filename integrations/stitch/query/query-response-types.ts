import { Money } from '../../../domain/types';

export type IdentityResponse = {
    user: {
        identity: Identity
    }
};

export type Identity = {
    nickname?: string
    middleName?: string
    dateOfBirth?: string
    email?: string
    familyName?: string
    fullName?: string
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

export type BankAccountResponse = {
    user: {
        bankAccounts: BankAccount[]
    }
};

type BankAccount = {
    id: string
    name: string
    accountNumber: string
    accountType: string
    availableBalance: Money
    bankId: string
    branchCode: string
    currentBalance?: Money
};

export type Edge<T> = {
    node: T
};

export type TransactionsResponse = Edge<{
    transactions: {
        edges: Array<Edge<Transaction>>
    }
}>;

export type Transaction = {
    id: string
    amount: number
    reference: string
    description: string
    date: string
    runningBalance: number
};
