import { BankAccount, DebitOrder, Identity, Transaction } from '../types';

export type IdentityResponse = {
    user: {
        identity: Identity
    }
};

export type BankAccountResponse = {
    user: {
        bankAccounts: BankAccount[]
    }
};

export type Edge<T> = {
    node: T
};

export type TransactionsResponse = Edge<{
    transactions: {
        edges: Array<Edge<Transaction>>
    }
}>;

export type DebitOrderResponse = Edge<{
    debitOrderPayments: {
        edges: Array<Edge<DebitOrder>>
    }
}>
