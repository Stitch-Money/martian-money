import React from 'react';
import { DebitOrder, Transaction } from '../../integrations/stitch/types';
import { topFiveExpensesThisMonth } from '../../util/transactions';
import { getDateWithShortMonthLabel } from '../../util/income-expense-summary';

export function TransactionLine(transaction: Transaction | DebitOrder) {
    return <div className="columns is-mobile">
        <div className="column is-9">
            <div className="content">
                { transaction.reference }<br/>
                <div className="is-small">{ getDateWithShortMonthLabel(new Date(transaction.date)) }</div>
            </div>
        </div>
        <div className="column"><strong>{ transaction.amount.quantity }</strong></div>
    </div>;
}

export default function TopDebitOrderCard({ debitOrders }: { debitOrders: DebitOrder[] }) {
    const topExpenses: DebitOrder[] = topFiveExpensesThisMonth<DebitOrder>(debitOrders).reverse();

    return (
        <div className='card mb-4'>
            <div className='card-content'>
                <div>
                    <h3 className='report-card-title is-size-6 has-text-black'>TOP 5 DEBIT ORDERS</h3>
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
