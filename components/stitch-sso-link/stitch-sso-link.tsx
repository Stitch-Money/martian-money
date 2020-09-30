import { getStitchAuthorizationCodeUrl } from 'integrations/stitch/authorize-user';
import useSWR from 'swr';
import React from 'react';
import Link from 'next/link';
import styles from './stitch-sso-link.module.css';

export default function StitchSSOLink() {
    const { data } = useSWR('stitchUrl', getStitchAuthorizationCodeUrl);

    if (data != null) {
        return (
            <Link href={ data }>
                <a className={styles.round.concat(' button is-large is-primary')}>Apply now</a>
            </Link>
        );
    }
    return (
        <Link href="/">
            <a className="button is-large is-primary is-disabled round">Apply now</a>
        </Link>
    );
}
