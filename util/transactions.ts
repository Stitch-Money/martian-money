import { Transaction } from '../integrations/stitch/types';

export function topFiveExpenses(transactions: Transaction[]): Transaction[] {
    const sorted = transactions
        .sort((a, b) => Number.parseFloat(a.amount.quantity) - Number.parseFloat(b.amount.quantity));

    console.log('Sorted:', sorted.map(x => x.amount.quantity));

    return sorted.slice(0, 5);
}