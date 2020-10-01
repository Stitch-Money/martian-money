import React from 'react';
import { StitchProvider } from 'components/stitch/stitch-provider';
import { ReportContents } from '../../components/report/reportContents';
import Layout, { siteName } from '../../components/layout';
import Head from 'next/head';

export default function Report(): JSX.Element {
    return <Layout>
        <Head>
            <title>Report | {siteName}</title>
        </Head>
        <section className="section">
            <div className="container">
                <StitchProvider>
                    <ReportContents/>
                </StitchProvider>
            </div>
        </section>
    </Layout>;
}

export async function getStaticProps() {
    return {
        props: {} // will be passed to the page component as props
    };
}