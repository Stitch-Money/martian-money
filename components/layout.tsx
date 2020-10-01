import React from 'react';
import Head from 'next/head';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

export const siteName = 'Mars Financial';

export default function Layout({ children }: { children: any }) {
    return (
        <>
            <Head>
                <title>{siteName}</title>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
                <link rel="alternate icon" href="/favicon.ico"/>
                <meta name="description"
                    content="Providing the financial services you'll need for your new Martian life!"/>
                <meta name="og:title" content={siteName}/>
            </Head>

            <Navbar/>

            {children}

            <Footer/>

        </>
    );
}
