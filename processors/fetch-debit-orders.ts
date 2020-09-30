import Decimal from "decimal.js";
import { BankAccountId, DebitOrder, DebitOrderId } from "../domain/types"

export async function fetchDebitOrders(accountId: BankAccountId): Promise<DebitOrder[]> {

  console.log(`Fetching debit orders for account ${accountId}`);

  return [{
    id: 'asdfasdf23' as DebitOrderId,
    amount: { quantity: new Decimal(1234.98), currency: 'ZAR' },
    date: new Date(),
    reference: 'Gym'
  }];
}