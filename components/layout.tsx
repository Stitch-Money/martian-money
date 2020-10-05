import React from 'react';
import Navbar from './navbar/navbar';
import { SiteHead } from './siteHead';

export const siteName = 'Mars Financial';

export default function Layout({ children }: { children: any }) {
    return (
        <div className="is-flex is-flex-direction-column full-viewport-height">
            <SiteHead />
            <Navbar/>
            {children}
        </div>
    );
}
