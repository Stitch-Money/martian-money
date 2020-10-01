import React from 'react';
import { SiteHead } from '../siteHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

function AboutHeader() {
    return <nav id="navbar" className={'navbar is-spaced'}>
        <div className="navbar-menu">
            <div className="navbar-end">
                <button className="button is-link is-inverted">
                    <span className="icon is-small">
                        <FontAwesomeIcon icon={faTimes}/>
                    </span></button>
            </div>
        </div>
    </nav>;
}

export function About() {
    return (
        <>
            <SiteHead/>
            <AboutHeader/>
            <div className="section">
                <div className="container is-max-desktop">
                    <div className="content has-text-weight-bold is-large">Mars.Financial is a fictitious <a href="#">demo website</a> showing how a
                            fintech company can use Stitch to link a user&apos;s African bank account to their service
                    </div>
                    <div className="content has-text-weight-light is-large">
                        <p>It is 100% safe and you will not be debited any real money when you apply for a fake dome-loan on Mars :)</p>
                        <p>You can either use the demo with example credentials we provide or with you own information.</p>
                    </div>

                    <div className="content has-text-weight-bold is-large is-light">
                        <p>Try the demo now</p>
                    </div>
                    <a href="/select-experience" className="button is-primary">Apply for a dome-loan</a>
                    <a href="https://stitch.money">Learn more about Stitch</a>
                </div>
            </div>
        </>
    );
}
