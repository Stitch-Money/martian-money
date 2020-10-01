import React from 'react';
import StitchSSOLink from '../stitch-sso-link/stitch-sso-link';

export default function Landing() {
    return (
        <section className="hero">
            <div>
                <img  className='dome' src='images/dome.svg' alt=''/>
            </div>
            <div className="hero-body">
                <div className="column">
                    <div className="level-item is-center">
                        <StitchSSOLink/>
                    </div>
                </div>
            </div>
        </section>
    );
}
