import { DebitOrder, Transaction } from '../integrations/stitch/types';
type SortableByAmount = Transaction | DebitOrder

export function topFiveExpenses<Sortable extends SortableByAmount>(transactions: Sortable[]): Sortable[] {
    const sorted = transactions
        .sort((a, b) => Number.parseFloat(a.amount.quantity) - Number.parseFloat(b.amount.quantity));

    console.log('Sorted:', sorted.map(x => x.amount.quantity));

    return sorted.slice(0, 5);
}