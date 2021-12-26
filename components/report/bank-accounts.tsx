import React from 'react';
import { BankAccount } from '../../integrations/stitch/types';

export function AccountsLine(account: BankAccount) {
    return <div className="columns is-mobile">
        <div className="column is-9">
            <div className="content">
                { account.name }<br/>
                <span className="has-text-grey has-text-weight-light is-size-7">{ (account.accountNumber) }</span>
                <br></br>
                <span className="has-text-grey has-text-weight-light is-size-7">{ (account.accountType) }</span>
            </div>
        </div>
        <div className="column"><strong>{ account.currentBalance.quantity }</strong></div>
    </div>;
}

export default function AccountsCard({ bankAccounts }: { bankAccounts: BankAccount[] }) {
    return (
        <div className='card mb-4'>
            <div className='card-content'>
                <div>
                    <h3 className='report-card-title is-size-6 has-text-black'>ACCOUNTS</h3>
                </div>
                <div className='content mt-6 mb-4 mx-2'>
                    {
                        bankAccounts.length > 0
                            ? bankAccounts.map(AccountsLine)
                            : 'No Accounts.'
                    }
                </div>
            </div>
        </div>
    );
}
