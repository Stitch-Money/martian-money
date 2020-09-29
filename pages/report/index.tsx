import Head from 'next/head';
import Layout, { siteName } from '../../components/layout';
import React from 'react';
import { IncomeExpenseChart } from '../../components/report/incomeExpenseChart';
import { TransactionCategoryChart } from '../../components/report/transactionCategoryChart';

export default function Report(): JSX.Element {
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
                        <TransactionCategoryChart />
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export async function getStaticProps() {
    return {
        props: {} // will be passed to the page component as props
    };
}
