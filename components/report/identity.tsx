import React from 'react';
import { useQuery } from '@apollo/client';
import { IdentityResponse } from '../../integrations/stitch/query/query-response-types';
import { IdentityQuery } from '../../integrations/stitch/query/queries';

export function Identity(): JSX.Element {
    const identityQuery = useQuery<IdentityResponse>(IdentityQuery);
    return <p>{ JSON.stringify(identityQuery.data) }</p>;
}
