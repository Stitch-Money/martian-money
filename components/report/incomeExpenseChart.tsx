import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { number } from 'prop-types';
import { Transaction } from '../../integrations/stitch/types';
import { getIncomeAndExpenses } from '../../util/income-expense-summary';

export function IncomeExpenseChart(props: { transactions: Transaction[] | undefined }): JSX.Element {
    const data = useMemo(
        () => getIncomeAndExpenses(props.transactions).slice(-3),
        [props.transactions]
    );

    function getLabelFormatter(label: any) {
        if (label instanceof number) {
            return label;
        }
        return label.charAt(0).toUpperCase() + label.slice(1);
    }

    const valueFormatter = (value: any) => `R ${value}`;

    return (
        <ResponsiveContainer className="tile" minHeight="300px">
            <BarChart data={data}>
                <Tooltip cursor={false} formatter={valueFormatter} labelFormatter={getLabelFormatter}/>
                <XAxis dataKey="month" tick={{ fontSize: 10 }} axisLine={false} tickLine={false}/>
                <YAxis tickFormatter={value => `R ${value}`} tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
                <Bar dataKey="income" fill="#D63908" barSize={12} />
                <Bar dataKey="expenses" fill="#FF9559" barSize={12}/>
                <Legend formatter={getLabelFormatter} height={15}/>
            </BarChart>
        </ResponsiveContainer>
    );
}
