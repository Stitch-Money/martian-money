import React from 'react';

export default function ChartCard(props: { title: string, children: any }) {
    return (
        <>
            <div className='card mb-4'>
                <div className='card-content'>
                    <div>
                        <h3 className='report-card-title is-size-6'>{ props.title }</h3>
                    </div>
                    <div className='content mt-5 mb-4 mx-2'>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}
