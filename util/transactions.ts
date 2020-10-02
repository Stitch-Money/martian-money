import { DebitOrder, Transaction } from '../integrations/stitch/types';
type SortableByAmount = Transaction | DebitOrder;

export function topFiveExpensesThisMonth<Sortable extends SortableByAmount>(sortables: Sortable[]): Sortable[] {
    const topFiveExpenses: Sortable[] = [];

    const earliestMonth = Math.min(...sortables.map(x => new Date(x.date).getMonth())) + 1;

    for (let i = new Date().getMonth(); i > earliestMonth; i--) {
        if (topFiveExpenses.length === 5) {
            break;
        }

        const sorted = sortables
            .filter(transaction => new Date(transaction.date).getMonth() === i)
            .sort((a, b) => (Number.parseFloat(a.amount.quantity) - Number.parseFloat(b.amount.quantity)));

        topFiveExpenses.push(...sorted);
    }

    return topFiveExpenses.slice(0, 5);
}

export function getMostRecentTopFiveExpenses() {

}