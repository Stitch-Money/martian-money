import React from 'react';
import { DebitOrder, Transaction } from '../../integrations/stitch/types';
import { topFiveExpenses } from '../../util/transactions';
import { getDateWithShortMonthLabel } from '../../util/income-expense-summary';

export function TransactionLine(transaction: Transaction | DebitOrder) {
    return <div className="columns">
        <div className="column">
            <div className="content">
                <strong>{ transaction.reference }</strong><br/>
                <div className="is-small">{ getDateWithShortMonthLabel(new Date(transaction.date)) }</div>
            </div>
        </div>
        <div className="column is-one-fifth">{ transaction.amount.quantity }</div>
    </div>;
}

export default function TopExpensesCard({ transactions }: { transactions: Transaction[] }) {
    const topExpenses = topFiveExpenses(transactions);

    return (
        <div className='card mb-4'>
            <div className='card-content'>
                <div>
                    <h3 className='report-card-title is-size-6'>Top 5 Expenses</h3>
                </div>
                <div className='content my-6 mx-2'>
                    {
                        topExpenses.length > 0
                            ? topExpenses.map(TransactionLine)
                            : 'No transactions.'
                    }
                </div>
            </div>
        </div>
    );
}
