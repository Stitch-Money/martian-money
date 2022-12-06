import { NextApiRequest, NextApiResponse } from 'next';

import { getUrlEncodedFormData } from '../../../integrations/stitch/authorize/utils';
import {
    StitchAccessTokenResponse,
    StitchRefreshTokenRequest
} from '../../../integrations/stitch/types';
import { fetchClientConfig } from './utils';

/*
 *   Refresh tokens are not used in the demo, but we've added an example below
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse<StitchAccessTokenResponse>) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const [identityServerUri, clientId, clientSecret] = fetchClientConfig(req.body.session_experience);

    const body: StitchRefreshTokenRequest = {
        grant_type: 'refresh_token',
        client_id: clientId,
        refresh_token: req.body.refresh_token,
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
