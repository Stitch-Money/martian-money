import React from 'react';
import { useQuery } from '@apollo/client';
import { IdentityResponse } from '../../integrations/stitch/query/query-response-types';
import { IdentityQuery } from '../../integrations/stitch/query/queries';

export function Identity(): JSX.Element {
    const identityQuery = useQuery<IdentityResponse>(IdentityQuery);
    const identity = identityQuery.data?.user.identity;
    if (identity) {
        return <div className="section">
            <div className="card">
                <article className="media">
                    <figure className="media-left">
                        <p className="image">
                            <img src={` https://api.adorable.io/avatars/160/${encodeURIComponent(identity.fullName)}`}
                                alt="Placeholder image"/>
                        </p>
                    </figure>
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
                </article>
            </div>
        </div>;
    }
    return <p>Error</p>;
}

function IdentityTableRow(props: { heading: string, value: string }): JSX.Element {
    return <tr>
        <th>{props.heading}</th>
        <td>{props.value}</td>
    </tr>;
}
