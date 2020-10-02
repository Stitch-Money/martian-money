import React from 'react';
import { Transaction } from '../../integrations/stitch/types';
import { topFiveExpensesThisMonth } from '../../util/transactions';
import { getDateWithShortMonthLabel } from '../../util/income-expense-summary';

export function TransactionLine(transaction: Transaction) {
    return <div className="columns is-mobile">
        <div className="column is-9">
            <div className="content">
                { transaction.description }<br/>
                <span className="has-text-grey has-text-weight-light is-size-7">{ getDateWithShortMonthLabel(new Date(transaction.date)) }</span>
            </div>
        </div>
        <div className="column"><strong>{ transaction.amount.quantity }</strong></div>
    </div>;
}

export default function TopExpensesCard({ transactions, loading }: { transactions: Transaction[], loading: boolean }) {
    const topExpenses = topFiveExpensesThisMonth(transactions);

    return (
        <div className='card mb-4'>
            <div className='card-content'>
                <div>
                    <h3 className='report-card-title is-size-6 is-uppercase has-text-black'>TOP 5 EXPENSES</h3>
                </div>
                <div className='content my-6 mx-2'>
                    {
                        loading
                            ? <progress className="progress is-small is-info" max="100">60%</progress>
                            : topExpenses.length > 0
                                ? topExpenses.map(TransactionLine)
                                : 'No transactions.'
                    }
                </div>
            </div>
        </div>
    );
}
