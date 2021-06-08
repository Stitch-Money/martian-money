import { SecondaryButton } from 'components/buttons/secondary-button';
import React from 'react';
import { Statement } from '../../integrations/stitch/types';
import { getDateWithShortMonthLabel } from '../../util/income-expense-summary';

export function StatementLine(statement: Statement) {
    return <div className="columns is-mobile">
        <div className="column is-9">
            <div className="content">
                { statement.filename }<br/>
                <span className="has-text-grey has-text-weight-light is-size-7">{ getDateWithShortMonthLabel(new Date(statement.endDate)) }</span>
            </div>
        </div>
        <SecondaryButton style={{ maxWidth: '60px' }} href={statement.downloadUrl}>⇩</SecondaryButton>
    </div>;
}

export default function TopStatementsCard({ statements }: { statements: Statement[] }) {

    return (
        <div className='card mb-4'>
            <div className='card-content'>
                <div>
                    <h3 className='report-card-title is-size-6 has-text-black'>TOP STATEMENTS</h3>
                </div>
                <div className='content mt-6 mb-4 mx-2'>
                    {
                        statements.length > 0
                            ? statements.map(StatementLine)
                            : 'No transactions.'
                    }
                </div>
            </div>
        </div>
    );
}
