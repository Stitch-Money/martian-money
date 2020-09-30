import { BankAccount, BankAccountId } from "../domain/types"
import Decimal from "decimal.js"

export async function fetchBankAccounts(): Promise<BankAccount[]> {

  console.log('Fetching bank accounts');

  return [{
    id: 'dskfjhw945oulsdkfj' as BankAccountId,
    name: 'Cheque Account',
    accountType: 'cheque',
    accountNumber: '1234567890',
    bankId: 'fnb',
    branchCode: '12054',
    availableBalance: { quantity: new Decimal(10345.85), currency: 'ZAR' },
    currentBalance: { quantity: new Decimal(10345.85), currency: 'ZAR' }
  }];
}