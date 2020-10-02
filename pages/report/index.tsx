import React from 'react';
import { StitchProvider } from 'components/stitch/stitch-provider';
import Layout, { siteName } from '../../components/layout';
import Head from 'next/head';
import Dome from 'components/dome';
import Reports from '../../components/report/reports';

export default function Report(): JSX.Element {
    return (
        <Layout>
            <Head>
                <title>Report | {siteName}</title>
            </Head>
            <Dome />
            <section className="section">
                <div className="container">
                    <StitchProvider>
                        <Reports />
                    </StitchProvider>
                </div>
            </section>
        </Layout>
    );
}
