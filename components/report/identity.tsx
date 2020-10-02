import React from 'react';
import { useQuery } from '@apollo/client';
import { IdentityResponse } from '../../integrations/stitch/query/query-response-types';
import { IdentityQuery } from '../../integrations/stitch/query/queries';

export function Identity(): JSX.Element {
    const identityQuery = useQuery<IdentityResponse>(IdentityQuery);
    const identity = identityQuery.data?.user.identity;
    if (identity) {
        return (
            <>
                <article className="media is-align-items-center mb-0 mb-3">
                    <figure className="media-left ml-0">
                        <p className="image is-128x128">
                            <img className="is-rounded"
                                src={`https://api.adorable.io/avatars/160/${encodeURIComponent(identity.fullName)}`}
                                alt="Placeholder image"/>
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content has-text-weight-light is-large">
                            <p>
                                <span className="is-size-6">Earth Name</span><br/>
                                <strong className="">{identity.fullName}</strong>
                            </p>
                        </div>
                    </div>
                </article>
                <IdentityTableRow heading="Communicator" value={identity.contact?.phoneNumber}/>
                <IdentityTableRow heading="Email" value={identity.email}/>
                <IdentityTableRow heading="Identifier" value={identity.identifyingDocument?.number}/>
            </>
        );
    }
    return <progress className="progress is-small is-info" max="100">60%</progress>;
}

function IdentityTableRow(props: { heading: string, value: string | undefined }): JSX.Element {
    return <div className="field">
        <span className="is-block has-text-grey has-text-weight-light is-size-7">{props.heading}</span>
        <span className="is-size-5 has-text-black">{props.value}</span>
    </div>;
}
