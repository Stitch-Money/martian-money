import Head from 'next/head';
import Layout, { siteName } from '../../components/layout';
import React from 'react';
import { IncomeExpenseChart } from '../../components/report/incomeExpenseChart';
import { TransactionCategoryChart } from '../../components/report/transactionCategoryChart';

export default function Report() {
    return (
        <Layout>
            <Head>
                <title>Report | {siteName}</title>
            </Head>
            <section className="section">
                <div className="container">
                    <h1 className="title">Congrats! You're on your way!</h1>
                    <div className="tile is-ancestor" style={{ height: '500px' }}>
                        <IncomeExpenseChart/>
                        <TransactionCategoryChart />
                    </div>
                </div>
            </section>
        </Layout>
    );
}
