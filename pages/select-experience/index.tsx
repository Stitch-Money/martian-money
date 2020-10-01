import React from 'react';
import {
    getStitchAuthorizationCodeUrl,
    getStitchTestClientAuthorizationCodeUrl
} from '../../integrations/stitch/authorize/authorize-user';
import useSWR from 'swr';
import { PrimaryButton } from '../../components/buttons/primary-button';
import { SecondaryButton } from '../../components/buttons/secondary-button';
import { setClientIdForSession } from '../../integrations/storage/session-storage';
import { StitchConfiguration } from '../../integrations/stitch/client';
import { ModalHeader } from '../../components/modal-header';
import { useRouter } from 'next/router';

export default function SelectExperiencePage(): JSX.Element {
    const authorizeUrl = useSWR('stitchUrl', getStitchAuthorizationCodeUrl);
    const testAuthorizeUrl = useSWR('stitchTestClientUrl', getStitchTestClientAuthorizationCodeUrl);
    const router = useRouter();

    return (
        <section className="section">
            <div className="container">
                <ModalHeader onClose={() => router.push('/')}/>
                <div className="column is-offset-one-quarter-tablet is-half-tablet">
                    <div className="content has-text-weight-bold is-medium">
                        <p>Select your preferred method to apply for your fake dome-loan.</p>
                    </div>

                    <div className="buttons is-centered">
                        <PrimaryButton href={testAuthorizeUrl.data}
                            onClick={() => setClientIdForSession(StitchConfiguration.testClientId)}>Apply
                            with
                            demo info</PrimaryButton>
                        <SecondaryButton href={authorizeUrl.data}
                            onClick={() => setClientIdForSession(StitchConfiguration.clientId)}>Apply with
                            my
                            info</SecondaryButton>
                    </div>
                    <div className="content has-text-weight-light is-medium">
                        <p>100% safe and you will not debit any real money when you apply for your fake dome-loan on
                            Mars.</p>
                    </div>
                    <div className="content is-small">
                        <p>Once you select your preferred experience you will go through a demo experience to apply for
                            a
                            FAKE “Dome-Loan” for a Dome Home on Mars.
                            Once complete you will see a results page of whether you were FAKE successful/unsuccessful
                            and
                            how Stitch was able to determine this.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
