import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { number } from 'prop-types';

export function IncomeExpenseChart(): JSX.Element {
    const data = useMemo(
        () => [
            { month: 'January 2020', income: 50000, expenses: 30000 },
            { month: 'February 2020', income: 52000, expenses: 58000 },
            { month: 'March 2020', income: 51000, expenses: 26000 }
        ],
        []
    );

    function getLabelFormatter(label: any) {
        if (label instanceof number) { return label; }
        return label.charAt(0).toUpperCase() + label.slice(1);
    }

    const valueFormatter = (value: any) => `R ${value}`;

    return (
        <ResponsiveContainer className="tile" minHeight="300px">
            <BarChart data={data}>
                <Tooltip cursor={false} formatter={valueFormatter} labelFormatter={getLabelFormatter}/>
                <XAxis dataKey="month" tick={{fontSize: 10}} axisLine={false} tickLine={false}/>
                <YAxis tickFormatter={value => `R${value}`} tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                <Bar dataKey="income" fill="#D63908" barSize={12} />
                <Bar dataKey="expenses" fill="#F87C55" barSize={12}/>
                <Legend formatter={getLabelFormatter} height={15}/>
            </BarChart>
        </ResponsiveContainer>
    );
}
