import { useQuery } from '@apollo/client';
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
    const transactions = transactionsResponse.data?.node.transactions.edges.map(x => x.node);
    const total = transactionsResponse.data?.node.transactions.edges.reduce((acc, t) => acc + Number.parseFloat(t.node.amount.quantity), 0);
    console.log('transaction total', total?.toString());

    if (bankAccountResponse.loading) {
        return <progress className="progress is-large is-info" max="100">60%</progress>;
    }

    return (
        <>
            <div className="columns is-12 mb-6">
                <div className="column is-full">
                    <div className="level-item is-center">
                        <img src="./images/approved-tick.svg" height="50px" width="100px" alt=""/>
                    </div>
                    <div className="level-item is-center">
                        <p className="approved is-size-2">APPROVED</p>
                    </div>
                    <div className="level-item is-center mb-4">
                        <p className="domeLoan has-text-grey-dark">DOME LOAN</p>
                    </div>
                    <div className="level-item is-center">
                        <div className="column is-6">
                            <p className="is-size-5 has-text-black has-text-centered">James, your application for a dome-loan on Mars has been successful, congrats!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='columns is-centered'>
                <div className='column is-four-fifths-desktop'>
                    <div className='columns is-centered is-desktop'>
                        <div className='column'>
                            <ChartCard title='EARTH ID'>
                                <Identity />
                            </ChartCard>
                        </div>
                        <div className='column'>
                            <ChartCard title='INCOME VS EXPENSES'>
                                <IncomeExpenseChart transactions={transactions}/>
                            </ChartCard>
                        </div>
                        <div className='column'>
                            <ChartCard title='SPEND BREAKDOWN'>
                                <TransactionCategoryChart/>
                            </ChartCard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
