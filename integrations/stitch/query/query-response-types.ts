import { Money } from '../../../domain/types';

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
