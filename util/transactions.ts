import { DebitOrder, Transaction } from '../integrations/stitch/types';
type SortableByAmount = Transaction | DebitOrder;

export function topFiveExpensesThisMonth<Sortable extends SortableByAmount>(transactions: Sortable[]): Sortable[] {
    const now = new Date();
    const oneMonthAgo = now.setMonth(now.getMonth() - 1);

    const sorted = transactions
        .filter(transaction => new Date(transaction.date).getTime() > oneMonthAgo)
        .sort((a, b) => ((a.amount.quantity) - (b.amount.quantity)));

    console.log('Sorted:', sorted.map(x => x.amount.quantity));

    return sorted.slice(0, 5);
}
