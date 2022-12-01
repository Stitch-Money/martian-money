import React from 'react';
import {
    getStitchAuthorizationCodeUrl,
    getStitchTestClientAuthorizationCodeUrl
} from '../../integrations/stitch/authorize/authorize-user';
import useSWR from 'swr';
import { PrimaryButton } from '../../components/buttons/primary-button';
import { SecondaryButton } from '../../components/buttons/secondary-button';
import { setAuthSessionVariables } from '../../integrations/storage/session-storage';
import { StitchConfiguration } from '../../integrations/stitch/client';
import { useRouter } from 'next/router';
import { ExplainerLayout } from '../../components/explainer/explainer-layout';

export default function SelectExperiencePage(): JSX.Element {
    const authorizeData = useSWR('stitchUrl', getStitchAuthorizationCodeUrl);
    const testAuthorizeData = useSWR('stitchTestClientUrl', getStitchTestClientAuthorizationCodeUrl);
    const router = useRouter();

    return <ExplainerLayout onCloseClick={() => router.push('/')}>
        <div className="content has-text-weight-bold is-medium">
            <p>Select your preferred method to apply for your dome-loan.</p>
        </div>

        <div className="buttons is-centered">
            <PrimaryButton href={testAuthorizeData.data?.url}
                onClick={() => setAuthSessionVariables(StitchConfiguration.testClientId, 'demo', testAuthorizeData.data?.nonce, testAuthorizeData.data?.verifier)}>Apply
                with
                demo info</PrimaryButton>
            <SecondaryButton href={authorizeData.data?.url}
                onClick={() => setAuthSessionVariables(StitchConfiguration.clientId, 'real', authorizeData.data?.nonce, authorizeData.data?.verifier)}>Apply with
                my
                info</SecondaryButton>
        </div>
        <div className="content has-text-weight-light is-medium">
            <p>Get approved for your dome loan today; your future starts now!</p>
        </div>
        <div className="content is-small">
            <p>Ever since High Commander Musk settled the first group of people on Mars, relocating planets has been at the top of everyone’s mind. To lessen the financial burden, Mars Financial decided to offer tailored dome loans that take into consideration your personal finances to empower you to buy the dome of your dreams.</p>
        </div>
    </ExplainerLayout>;
}