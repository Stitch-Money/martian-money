import React from 'react';
import { useQuery } from '@apollo/client';
import { IdentityResponse } from '../../integrations/stitch/query/query-response-types';
import { IdentityQuery } from '../../integrations/stitch/query/queries';

export function Identity(): JSX.Element {
    const identityQuery = useQuery<IdentityResponse>(IdentityQuery);
    const identity = identityQuery.data?.user.identity;
    if (identity) {
        return (
            <article>
                <div className="columns">
                    <div className="column">
                        <div className="level-item is-center mb-6">
                            <img src={` https://api.adorable.io/avatars/160/${encodeURIComponent(identity.fullName)}`}
                                alt="Placeholder image"/>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <table className="table">
                                    <tbody>
                                        <IdentityTableRow heading="Full Name" value={identity.fullName} />
                                        <IdentityTableRow heading="Date of Birth" value={identity.dateOfBirth} />
                                        <IdentityTableRow heading="Email" value={identity.email} />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
    return <p>Error</p>;
}

function IdentityTableRow(props: { heading: string, value: string }): JSX.Element {
    return <tr>
        <th className="is-size-7">{props.heading}</th>
        <td className="is-size-7">{props.value}</td>
    </tr>;
}
