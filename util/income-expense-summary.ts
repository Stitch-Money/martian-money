import { Transaction } from '../integrations/stitch/types';

export type MonthSummary = {
    month: string
    income: number
    expenses: number
};

export type IncomeExpenseSummary = MonthSummary[];

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function getMonthWithYearLabel(date: Date): string {
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

export function getIncomeAndExpenses(transactions: Transaction[] | undefined): IncomeExpenseSummary {
    const emptySummary: IncomeExpenseSummary = [];
    if (!transactions || transactions.length === 0) {
        return emptySummary;
    }
    return transactions
        .sort((a, b) => (a.date > b.date) ? 1 : -1)
        .reduce((summary, transaction) => {
            const transactionMonth = getMonthWithYearLabel(new Date(transaction.date));
            let monthSummary = emptySummary.find(x => x.month === transactionMonth);
            if (!monthSummary) {
                monthSummary = {
                    month: transactionMonth,
                    expenses: 0,
                    income: 0
                };
                summary.push(monthSummary);
            }

            const quantity = Number.parseFloat(transaction.amount.quantity);
            console.log('Quantity', typeof quantity);
            console.log('Expenses', typeof monthSummary.expenses);
            console.log('Income', typeof monthSummary.income);
            if (quantity < 0) {
                monthSummary.expenses -= quantity;
            } else {
                monthSummary.income += quantity;
            }
            return summary;
        }, emptySummary)
        .map(value => {
            // Apply 2 decimal rounding
            value.income = Math.round(value.income * 100) / 100;
            value.expenses = Math.round(value.expenses * 100) / 100;
            return value;
        });
}

export function topFiveExpenses(transactions: Transaction[]): Transaction[] {
    const sorted = transactions
        .sort((a, b) => Number.parseFloat(a.amount.quantity) - Number.parseFloat(b.amount.quantity));

    console.log('Sorted:', sorted.map(x => x.amount.quantity));

    return sorted.slice(0, 5);
}
