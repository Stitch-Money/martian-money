import React from 'react';
import { useQuery } from '@apollo/client';
import { AccountHolderResponse } from '../../integrations/stitch/query/query-response-types';
import { AccountHolderQuery } from '../../integrations/stitch/query/queries';

export function Identity(): JSX.Element {
    const accountHolderQuery = useQuery<AccountHolderResponse>(AccountHolderQuery);
    const identity = accountHolderQuery.data?.user.bankAccounts.find(b => b.accountHolder != null)?.accountHolder;
    console.log(JSON.stringify(identity));
    if (identity) {
        return (
            <>
                <article className="media is-align-items-center mb-0 mb-3">
                    <figure className="media-left ml-0">
                        <p className="image is-128x128">
                            <img className="is-rounded"
                                src={`https://robohash.org/${encodeURIComponent(identity.fullName ?? identity.name)}`}
                                alt="Placeholder image"/>
                        </p>
                    </figure>
                    <div className="media-content">
                        <div className="content has-text-weight-light is-large">
                            <p>
                                <span className="is-size-6">Earth Name</span><br/>
                                <strong className="">{identity.fullName ?? identity.name}</strong>
                            </p>
                        </div>
                    </div>
                </article>
                <IdentityTableRow heading="Communicator" value={identity.contact?.phoneNumber}/>
                <IdentityTableRow heading="Email" value={identity.email}/>
                <IdentityTableRow heading="Identifier" value={identity.identifyingDocument?.number ?? identity.registrationNumber}/>
            </>
        );
    }
    return <progress className="progress is-small is-info" max="100">60%</progress>;
}

function IdentityTableRow(props: { heading: string, value: string | undefined }): JSX.Element {
    const display = props.value ? "block" : "none";
    return <div style={{ display: `${display}` }} className="field">
        <span className="is-block has-text-grey has-text-weight-light is-size-7">{props.heading}</span>
        <span className="is-size-5 has-text-black">{props.value}</span>
    </div>;
}
