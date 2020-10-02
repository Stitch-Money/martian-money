import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { number } from 'prop-types';
import { Transaction } from '../../integrations/stitch/types';

// [
//     { month: 'January 2020', income: 50000, expenses: 30000 },
//     { month: 'February 2020', income: 52000, expenses: 58000 },
//     { month: 'March 2020', income: 51000, expenses: 26000 }
// ]
type MonthSummary = {
    month: string
    income: number
    expenses: number
};

type IncomeExpenseSummary = MonthSummary[];

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

function getMonthLabel(date: Date): string {
    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
}

function getIncomeAndExpenses(transactions: Transaction[] | undefined): IncomeExpenseSummary {
    const emptySummary: IncomeExpenseSummary = [];
    if (!transactions || transactions.length === 0) {
        return emptySummary;
    }
    return transactions
        .sort((a, b) => (a.date > b.date) ? 1 : -1)
        .reduce((summary, transaction) => {
            const transactionMonth = getMonthLabel(new Date(transaction.date));
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
        }, emptySummary);
}

export function IncomeExpenseChart(props: { transactions: Transaction[] | undefined }): JSX.Element {
    const data = useMemo(
        () => getIncomeAndExpenses(props.transactions),
        [props.transactions]
    );

    function getLabelFormatter(label: any) {
        if (label instanceof number) {
            return label;
        }
        return label.charAt(0).toUpperCase() + label.slice(1);
    }

    const valueFormatter = (value: any) => `R ${value}`;

    return (
        <ResponsiveContainer className="tile" minHeight="300px">
            <BarChart data={data}>
                <Tooltip cursor={false} formatter={valueFormatter} labelFormatter={getLabelFormatter}/>
                <XAxis dataKey="month"/>
                <YAxis tickFormatter={value => `R ${value}`}/>
                <Bar dataKey="income" fill="#cc7810"/>
                <Bar dataKey="expenses" fill="#870D0D"/>
                <Legend formatter={getLabelFormatter}/>
            </BarChart>
        </ResponsiveContainer>
    );
}
