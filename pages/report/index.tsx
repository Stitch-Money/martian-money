import React, { useEffect } from 'react';
import { StitchProvider } from 'components/stitch/stitch-provider';
import Layout, { siteName } from '../../components/layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Dome from 'components/dome';
import Reports from '../../components/report/reports';
import { getStitchAccessToken } from '../../integrations/storage/session-storage';

export default function Report(): JSX.Element {
    const router = useRouter();

    useEffect(() => {
        const token = getStitchAccessToken();

        if (!token) {
            router.push('/select-experience').then(_ => {}, _ => {});
        }
    }, [router]);

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
