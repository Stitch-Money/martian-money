import Head from 'next/head';
import { useRouter } from 'next/router'
import Layout, { siteName } from 'components/layout';
import React from 'react';
import { IncomeExpenseChart } from 'components/report/incomeExpenseChart';
import { TransactionCategoryChart } from 'components/report/transactionCategoryChart';
import useSWR from "swr";
import { getStitchAccessToken } from "../../integrations/stitch-steps";

function getAccessToken() {
  const router = useRouter()
  const { code } = router.query;
  let verifier;
  if (typeof window !== 'undefined') {
    verifier = localStorage.getItem('stitchVerifier');
  }

  return useSWR([code, verifier], getStitchAccessToken);
}

export default function Report(): JSX.Element {
    const { data, error } = getAccessToken();
    if(data) {
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
