import React from 'react';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import { SiteHead } from './siteHead';

export const siteName = 'Mars Financial';

export default function Layout({ children }: { children: any }) {
    return (
        <>
            <SiteHead />
            <Navbar/>
            {children}
            <Footer/>
        </>
    );
}
