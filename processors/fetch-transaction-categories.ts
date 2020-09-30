import { BankAccountId, TransactionCategories, TransactionId } from "../domain/types"

export async function fetchTransactionCategories(accountId: BankAccountId): Promise<TransactionCategories[]> {

  console.log(`Fetching transaction categories for account ${accountId}`);

  return [{
    transactionId: 'ksdfhgklajshg3242' as TransactionId,
    category: 'Rent'
  }];
}