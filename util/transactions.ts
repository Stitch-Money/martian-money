import { Transaction } from '../integrations/stitch/types';

export function topFiveExpensesThisMonth(transactions: Transaction[]): Transaction[] {
    const sorted = transactions
        .filter(transaction => new Date(transaction.date).getMonth() === new Date().getMonth() - 1)
        .sort((a, b) => Number.parseFloat(a.amount.quantity) - Number.parseFloat(b.amount.quantity));

    console.log('Sorted:', sorted.map(x => x.amount.quantity));

    return sorted.slice(0, 5);
}
