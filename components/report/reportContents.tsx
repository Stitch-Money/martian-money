import { useQuery } from '@apollo/client';
import { Decimal } from 'decimal.js';
import { BankAccountResponse, TransactionsResponse } from '../../integrations/stitch/query/query-response-types';
import { BankAccountsQuery, TransactionsByBankAccountQuery } from '../../integrations/stitch/query/queries';
import { IncomeExpenseChart } from './incomeExpenseChart';
import { TransactionCategoryChart } from './transactionCategoryChart';
import React from 'react';
import { Identity } from './identity';
import ChartCard from "components/report/chart-card";

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

    return (
        <>
            <div className='columns is-centered'>
                <div className='column is-half-desktop is-center'>
                    
                    <ChartCard title = 'Earth ID'>
                        <Identity />
                    </ChartCard>
                    <ChartCard title = 'Income Vs Expenses'>
                        <IncomeExpenseChart/>
                    </ChartCard>
                    <ChartCard title = 'Spend Breakdown'>
                        <TransactionCategoryChart/>
                    </ChartCard>
                </div>
            </div>
        </>
    );
}
