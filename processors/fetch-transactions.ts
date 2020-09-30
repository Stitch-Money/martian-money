import Decimal from "decimal.js";
import { BankAccountId, Transaction, TransactionId } from "../domain/types"

export async function fetchTransactions(accountId: BankAccountId): Promise<Transaction[]> {

  console.log(`Fetching transactions for account ${accountId}`);

  return [{
    id: 'ksdfhgklajshg3242' as TransactionId,
    description: 'Woolworths',
    amount: { quantity: new Decimal(123.09), currency: 'ZAR' },
    date: new Date(),
    reference: 'Woolworths'
  }];
}