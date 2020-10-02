import { useQuery } from '@apollo/client';
import {
    BankAccountResponse,
    DebitOrderResponse, Edge,
    TransactionsResponse
} from '../../integrations/stitch/query/query-response-types';
import {
    BankAccountsQuery,
    DebitOrdersByBankAccountQuery,
    TransactionsByBankAccountQuery
} from '../../integrations/stitch/query/queries';
import { IncomeExpenseChart } from './incomeExpenseChart';
import { TransactionCategoryChart } from './transactionCategoryChart';
import React from 'react';
import { Identity } from './identity';
import ChartCard from 'components/report/chart-card';
import {BankAccount, DebitOrder} from "integrations/stitch/types";

export function ReportContents(): JSX.Element {
    const bankAccountResponse = useQuery<BankAccountResponse>(BankAccountsQuery);
    const chequeAccount: BankAccount | undefined = bankAccountResponse.data?.user.bankAccounts.find( (ba: BankAccount) => ba.accountType === "current");
    console.log('Errors', bankAccountResponse.error);
    console.log('bankAccountResponse', bankAccountResponse);

    const transactionsResponse = useQuery<TransactionsResponse>(TransactionsByBankAccountQuery, {
        variables: { accountId: bankAccountResponse.data?.user.bankAccounts[0].id }
    });
    const debitOrderResponse = useQuery<DebitOrderResponse>(DebitOrdersByBankAccountQuery, {
        variables: { accountId: chequeAccount?.id }
    });
    
    console.log('Errors', transactionsResponse.error, debitOrderResponse.error);
    const transactions = transactionsResponse.data?.node.transactions.edges.map(x => x.node);
    const total = transactionsResponse.data?.node.transactions.edges.reduce((acc, t) => acc + Number.parseFloat(t.node.amount.quantity), 0);
    console.log('transaction total', total?.toString());
    
    const debitOrders: DebitOrder[] | undefined = debitOrderResponse.data?.node.debitOrderPayments.edges.map( (dop: Edge<DebitOrder>) => dop.node);
    
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
