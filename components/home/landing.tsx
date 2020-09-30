import React from 'react';
import { siteName } from '../layout';
import StitchSSOLink from '../stitch-sso-link/stitch-sso-link';

export default function Landing() {
    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-2">
                        {siteName}
                    </h1>
                    <h2 className="subtitle">
                        Providing the financial services you&apos;ll need for your new Martian life!
                    </h2>

                    <StitchSSOLink/>
                </div>
            </div>
        </section>
    );
}
