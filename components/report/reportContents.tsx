import { useQuery } from '@apollo/client';
import { BankAccountResponse, TransactionsResponse } from '../../integrations/stitch/query/query-response-types';
import { BankAccountsQuery, TransactionsByBankAccountQuery } from '../../integrations/stitch/query/queries';
import { IncomeExpenseChart } from './incomeExpenseChart';
import { TransactionCategoryChart } from './transactionCategoryChart';
import React from 'react';
import { Identity } from './identity';

export function ReportContents(): JSX.Element {
    const bankAccountResponse = useQuery<BankAccountResponse>(BankAccountsQuery);
    console.log('Errors', bankAccountResponse.error);
    console.log('bankAccountResponse', bankAccountResponse);

    const transactionsResponse = useQuery<TransactionsResponse>(TransactionsByBankAccountQuery, {
        variables: { accountId: bankAccountResponse.data?.user.bankAccounts[0].id }
    });
    console.log('Errors', transactionsResponse.error);
    console.log('transaction total', transactionsResponse.data?.node.transactions.edges.reduce((acc, t) => acc + t.node.amount, 0));

    return (
        <>
            <h1 className="title">Congrats! You&apos;re on your way!</h1>
            <Identity />
            <div className="tile is-ancestor">
                <IncomeExpenseChart/>
                <TransactionCategoryChart/>
            </div>
        </>
    );
}
