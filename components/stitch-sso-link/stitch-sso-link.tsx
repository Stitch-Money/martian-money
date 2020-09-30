import { getStitchAuthorizationCodeUrl } from 'integrations/stitch/authorize-user';
import useSWR from 'swr';
import React from 'react';
import Link from 'next/link';

export default function StitchSSOLink() {
    const { data } = useSWR('stitchUrl', getStitchAuthorizationCodeUrl);

    if (data != null) {
        return (
            <Link href={ data }>
                <a className="button is-large is-primary">Apply now</a>
            </Link>
        );
    }
    return (
        <Link href="/">
            <a className="button is-large is-primary is-disabled">Apply now</a>
        </Link>
    );
}
