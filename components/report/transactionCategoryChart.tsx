import { Cell, LabelList, Pie, PieChart, PieLabelRenderProps, ResponsiveContainer, Tooltip } from 'recharts';
import React from 'react';

type transactionCategory = {
    name: string
    value: number
};

export function TransactionCategoryChart(): JSX.Element {
    const data: transactionCategory[] = [
        {
            name: 'Groceries',
            value: 5000
        },
        {
            name: 'Rent',
            value: 15000
        },
        {
            name: 'Entertainment',
            value: 8000
        }
    ];

    const COLORS = ['#D63908', '#FF9559', '#FFC58F', '#a74808'];

    const renderLabel = (entry: PieLabelRenderProps) => entry.name;

    return (
        <ResponsiveContainer className="tile" minHeight="300px">
            <PieChart>
                <Tooltip formatter={value => `R ${value}`}/>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="50%"
                    outerRadius="60%"
                    label={renderLabel}>
                    <LabelList dataKey="name"/>
                    {
                        data.map((_entry: transactionCategory, index) =>
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>)
                    }
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}
