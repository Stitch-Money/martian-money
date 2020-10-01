import { useQuery } from '@apollo/client';
import { Decimal } from 'decimal.js';
import { BankAccountResponse, TransactionsResponse } from '../../integrations/stitch/query/query-response-types';
import { BankAccountsQuery, TransactionsByBankAccountQuery } from '../../integrations/stitch/query/queries';
import { IncomeExpenseChart } from './incomeExpenseChart';
import { TransactionCategoryChart } from './transactionCategoryChart';
import React from 'react';
import { Identity } from './identity';
import ChartCard from 'components/report/chart-card';

export function ReportContents(): JSX.Element {
    const bankAccountResponse = useQuery<BankAccountResponse>(BankAccountsQuery);
    console.log('Errors', bankAccountResponse.error);
    console.log('bankAccountResponse', bankAccountResponse);

    const transactionsResponse = useQuery<TransactionsResponse>(TransactionsByBankAccountQuery, {
        variables: { accountId: bankAccountResponse.data?.user.bankAccounts[0].id }
    });

    console.log('Errors', transactionsResponse.error);
    const total = transactionsResponse.data?.node.transactions.edges.reduce((acc, t) => acc.add(new Decimal(t.node.amount.quantity)), new Decimal(0));
    console.log('transaction total', total?.toString());

    if (bankAccountResponse.loading) {
        return <progress className="progress is-large is-info" max="100">60%</progress>;
    }

    return (
        <>
            <div className='columns is-centered'>
                <div className='column is-four-fifths-desktop'>
                    <div className='columns is-centered is-desktop'>
                        <div className='column'>
                            <ChartCard title='Earth ID'>
                                <Identity />
                            </ChartCard>
                        </div>
                        <div className='column'>
                            <ChartCard title='Income Vs Expenses'>
                                <IncomeExpenseChart/>
                            </ChartCard>
                        </div>
                        <div className='column'>
                            <ChartCard title='Spend Breakdown'>
                                <TransactionCategoryChart/>
                            </ChartCard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
