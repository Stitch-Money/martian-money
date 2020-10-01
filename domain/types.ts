import { Decimal } from 'decimal.js';

export type BankAccountId = string & { __bankId__: null };
export type TransactionId = string & { __transactionId__: null };
export type DebitOrderId = string & { __debitOrderId__: null };

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

export type DebitOrder = {
    id: DebitOrderId
    date: Date
    amount: Money
    reference: string
};

export type TransactionCategories = {
    transactionId: TransactionId
    category: string
};

export type AccountStatement = {
    payload: string,
    statementType: string
}

export type BankAccount = {
    id: BankAccountId
    name: string
    accountNumber: string
    accountType: string
    availableBalance: Money
    bankId: string
    branchCode: string
    currentBalance: Money
    accountStatements : AccountStatement[]
};
