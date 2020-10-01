import Head from 'next/head';
import React from 'react';
import { siteName } from './layout';

export function SiteHead(): JSX.Element {
    return <Head>
        <title>{siteName}</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="alternate icon" href="/favicon.ico"/>
        <meta name="description" content="Providing the financial services you'll need for your new Martian life!"/>
        <meta name="og:title" content={siteName}/>
    </Head>;
}
