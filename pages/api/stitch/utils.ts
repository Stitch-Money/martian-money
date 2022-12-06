import { StitchConfiguration } from '../../../integrations/stitch/client';
import { SessionExperience } from '../../../util/enums';

export function fetchClientConfig(sessionExperience: string | null): [string, any, any] {
    const {
        identityServerUri, testClientId, clientId, testClientSecret, clientSecret
    } = StitchConfiguration;

    const isDemo = sessionExperience === SessionExperience.demo;

    const reqClientId = isDemo ? testClientId : clientId;
    const reqClientSecret = isDemo ? testClientSecret : clientSecret;

    return [identityServerUri, reqClientId, reqClientSecret];
}
