import { getStitchAuthorizationCodeUrl } from 'integrations/stitch/authorize-user';
import useSWR from 'swr';
import React from 'react';
import Link from 'next/link';

export default function StitchSSOLink() {
    const { data } = useSWR('stitchUrl', getStitchAuthorizationCodeUrl);

    if (data != null) {
        return (
            <Link href={ data }>
                <div className='col'>
                    <a className='button is-large is-primary round'>
                        <div className='col'>
                            <p className='apply is-size-1'>APPLY</p>
                            <p className='domeLoan is-size-7'>FOR A DOME LOAN</p>
                        </div>
                    </a>
                </div>
            </Link>
        );
    }
    return (
        <Link href="/">
            <a className="button is-large is-primary is-disabled round">Apply now</a>
        </Link>
    );
}
