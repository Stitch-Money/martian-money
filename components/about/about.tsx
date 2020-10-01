import React from 'react';
import { SiteHead } from '../siteHead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { PrimaryButton } from '../buttons/primary-button';

function AboutHeader(props: { onClose: () => void }) {
    return <nav id="navbar" className={'navbar is-spaced'}>
        <div className="navbar-menu">
            <div className="navbar-end">
                <button className="button is-link is-inverted" onClick={props.onClose}>
                    <span className="icon is-small">
                        <FontAwesomeIcon icon={faTimes}/>
                    </span></button>
            </div>
        </div>
    </nav>;
}

export function About(props: { onClose: () => void }) {
    return (
        <>
            <SiteHead/>
            <AboutHeader onClose={props.onClose}/>
            <div className="section">
                <div className="container">
                    <div className="column is-offset-one-quarter-tablet is-half-tablet">
                        <div className="content has-text-weight-bold is-medium">Mars.Financial is a fictitious <a
                            href="#">demo website</a> showing how a
                            fintech company can use Stitch to link a user&apos;s African bank account to their service
                        </div>
                        <div className="content has-text-weight-light is-medium">
                            <p>It is 100% safe and you will not be debited any real money when you apply for a fake
                                dome-loan on Mars :)</p>
                            <p>You can either use the demo with example credentials we provide or with you own
                                information.</p>
                        </div>

                        <div className="content has-text-weight-bold has-text-grey is-medium is-light">
                            <p>Try the demo now</p>
                        </div>
                        <PrimaryButton href="/select-experience">Apply for a dome-loan</PrimaryButton>
                        <p><a href="https://stitch.money">Learn more about Stitch</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}
