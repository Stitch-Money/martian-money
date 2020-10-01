import React from 'react';
import Link from 'next/link';

export default function ApplyButton() {
    return (
        <Link href='/select-experience'>
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
