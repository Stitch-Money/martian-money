import { TransactionCategory } from '../integrations/stitch/types';

export type TransactionCategorySummary = {
    name: string
    value: number
};

export type TransactionCategoriesSummary = TransactionCategorySummary[];

function summarize(summary: TransactionCategoriesSummary, transaction: TransactionCategory): TransactionCategoriesSummary {
    const quantity = (transaction.amount.quantity);
    const category = transaction.category;
    if (!category || quantity > 0) {
        // Only including expenses with categories.
        return summary;
    }
    let categorySummary = summary.find(x => x.name === category.description);
    if (!categorySummary) {
        categorySummary = {
            name: category.description,
            value: -quantity
        };
        summary.push(categorySummary);
    } else {
        categorySummary.value -= quantity;
    }
    return summary;
}

export function getTransactionCategorySummary(transactions: TransactionCategory[] | undefined): TransactionCategoriesSummary {
    const emptySummary: TransactionCategoriesSummary = [];
    if (!transactions || transactions.length === 0) {
        console.warn('Returning empty summary.');
        return emptySummary;
    }
    return transactions
        .sort((a, b) => (a.date > b.date) ? 1 : -1)
        .reduce(summarize, emptySummary)
        .map(category => {
            // Apply 2 decimal rounding
            category.value = Math.round(category.value * 100) / 100;
            return category;
        });
}
