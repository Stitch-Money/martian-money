import React from 'react';
import useSWR from 'swr';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteName } from 'components/layout';
import { IncomeExpenseChart } from 'components/report/incomeExpenseChart';
import { TransactionCategoryChart } from 'components/report/transactionCategoryChart';
import { retrieveTokenUsingAuthorizationCode } from 'integrations/stitch/fetch-token';
import { getSessionVerifier } from "integrations/storage/session-storage";

function getAccessToken() {
    const router = useRouter();
    const { code } = router.query;
    const verifier = getSessionVerifier();

    return useSWR([code, verifier], retrieveTokenUsingAuthorizationCode);
}

export default function Report(): JSX.Element {
    const { data, error } = getAccessToken();
    if (data) {
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
    } else {
        console.log(error);
        return (
            <Layout>
                <Head>
                    <title>Report | {siteName}</title>
                </Head>
                <section className="section">
                    <div className="container">
                        <h1 className="title">Catastrophy has struck!</h1>
                    </div>
                </section>
            </Layout>
        );
    }
}

export async function getStaticProps() {
    return {
        props: {} // will be passed to the page component as props
    };
}
