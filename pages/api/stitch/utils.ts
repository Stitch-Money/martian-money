import { getSessionExperience } from '../../../integrations/storage/session-storage';
import { StitchConfiguration } from '../../../integrations/stitch/client';

export function fetchClientConfig() {
    const {
        identityServerUri, testClientId, clientId, testClientSecret, clientSecret
    } = StitchConfiguration;
    const sessionExperience = getSessionExperience();
    const reqClientId = sessionExperience === 'demo' ? testClientId : clientId;
    const reqClientSecret = sessionExperience === 'demo' ? testClientSecret : clientSecret;

    return [identityServerUri, reqClientId, reqClientSecret];
}
