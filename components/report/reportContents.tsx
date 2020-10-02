import { useQuery } from '@apollo/client';
import { DebitOrderResponse, TransactionsResponse } from '../../integrations/stitch/query/query-response-types';
import { DebitOrdersByBankAccountQuery, TransactionsByBankAccountQuery } from '../../integrations/stitch/query/queries';
import { IncomeExpenseChart } from './incomeExpenseChart';
import { TransactionCategoryChart } from './transactionCategoryChart';
import React from 'react';
import { Identity } from './identity';
import ChartCard from 'components/report/chart-card';
import { BankAccount } from 'integrations/stitch/types';
import TopExpensesCard from './top-expenses-card';

export function ReportContents(props: { bankAccount: BankAccount }): JSX.Element {
    const transactionsResponse = useQuery<TransactionsResponse>(TransactionsByBankAccountQuery, {
        variables: { accountId: props.bankAccount.id }
    });

    const transactions = transactionsResponse.data?.node.transactions.edges.map(x => x.node) ?? [];

    const debitOrderResponse = useQuery<DebitOrderResponse>(DebitOrdersByBankAccountQuery, {
        variables: { accountId: props.bankAccount.id }
    });

    const debitOrders = debitOrderResponse.data?.node.debitOrderPayments.edges.map(x => x.node);
    console.log(debitOrders);

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

            <div className='columns is-centered is-multiline'>
                <div className='column is-one-third-desktop'>
                    <ChartCard title='EARTH ID'>
                        <Identity />
                    </ChartCard>
                </div>
                <div className='column is-one-third-desktop'>
                    <ChartCard title='INCOME VS EXPENSES'>
                        <IncomeExpenseChart transactions={transactions}/>
                    </ChartCard>
                </div>
                <div className='column is-one-third-desktop'>
                    <ChartCard title='SPEND BREAKDOWN'>
                        <TransactionCategoryChart accountId={props.bankAccount.id}/>
                    </ChartCard>
                </div>
            </div>
            <div className="columns is-centered is-multiline">
                <div className="column is-one-third-desktop">
                    <TopExpensesCard transactions={transactions} />
                </div>
            </div>
        </>
    );
}
