import React from 'react';
import { StitchProvider } from 'components/stitch/stitch-provider';
import Layout, { siteName } from '../../components/layout';
import Head from 'next/head';
import { StatementContents } from 'components/statement/send-statement';

export default function Statement(): JSX.Element {
    return <Layout>
        <Head>
            <title>Send Statement | {siteName}</title>
        </Head>
        <section className="section">
            <div className="container">
                <StitchProvider>
                    <StatementContents/>
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
