import { useQuery } from '@apollo/client';
import { BankAccountResponse } from '../../integrations/stitch/query/query-response-types';
import { BankAccounts, TransactionsByBankAccount } from '../../integrations/stitch/query/queries';
import Layout, { siteName } from '../layout';
import Head from 'next/head';
import { IncomeExpenseChart } from './incomeExpenseChart';
import { TransactionCategoryChart } from './transactionCategoryChart';
import React from 'react';

export function ReportContents(): JSX.Element {
    const bankAccountResponse = useQuery<BankAccountResponse>(BankAccounts);
    console.log('Errors', bankAccountResponse.error);
    console.log('bankAccountResponse', bankAccountResponse.data);

    let transactionsResponse = useQuery<BankAccountResponse>(TransactionsByBankAccount, );
    console.log('Errors', transactionsResponse.error);
    console.log('transactionsResponse', transactionsResponse.data);

    return (
        <Layout>
            <Head>
                <title>Report | {siteName}</title>
            </Head>
            <section className="section">
                <div className="container">
                    <h1 className="title">Congrats! You&apos;re on your way!</h1>
                    <div className="tile is-ancestor">
                        <IncomeExpenseChart/>
                        <TransactionCategoryChart/>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
