import { NextApiRequest, NextApiResponse } from 'next';

import { getUrlEncodedFormData } from '../../../integrations/stitch/authorize/utils';
import { StitchConfiguration } from '../../../integrations/stitch/client';
import { StitchAccessTokenRequest, StitchAccessTokenResponse } from '../../../integrations/stitch/types';
import { fetchClientConfig } from './utils';

export default async function handler(req: NextApiRequest, res: NextApiResponse<StitchAccessTokenResponse>) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const [identityServerUri, clientId, clientSecret] = fetchClientConfig(req.body.session_experience);

    const body: StitchAccessTokenRequest = {
        grant_type: 'authorization_code',
        client_id: clientId,
        code: req.body.authorization_code,
        redirect_uri: StitchConfiguration.redirectUri,
        code_verifier: req.body.code_verifier,
        client_secret: clientSecret
    };

    const bodyString = getUrlEncodedFormData(body);

    const result = await fetch(`${identityServerUri}/connect/token`, {
        method: req.method,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: bodyString
    });

    const data = await result.json();

    if ('error' in data) {
        return res.status(500).json(data);
    }

    return res.status(200).json(data);
}
