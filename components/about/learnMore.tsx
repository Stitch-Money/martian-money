import React from 'react';
import { PrimaryButton } from '../buttons/primary-button';
import { ExplainerLayout } from '../explainer/explainer-layout';

export function LearnMore(props: { onClose: () => void }) {
    return (
        <ExplainerLayout onCloseClick={props.onClose}>
            <div className="content has-text-weight-bold is-medium">Mars Financial uses technology provided by Stitch to
                access your financial information in order to approve your dome loan.
            </div>
            <div className="content has-text-weight-light is-medium">
                <p>Stitch gives you the agency to use your information to launch yourself into your future. This process is safe and secure, much like the airtight domes on Mars!</p>
            </div>

            <div className="content has-text-weight-bold has-text-grey is-medium">
                <p>Get approved using your information: </p>
                <PrimaryButton href="/select-experience">Apply for a dome-loan</PrimaryButton>
            </div>
            <div className="content has-text-weight-bold">
                <p><a href="https://stitch.money">Learn more about Stitch</a></p>
            </div>
        </ExplainerLayout>
    );
}
