import React from 'react';

export default function ChartCard(props: { title: string, children: any } ) {
    return (
        <>
            <div className='card'>
                <div className='card-content'>
                    <div>
                        <h3 className='report-card-title'>{ props.title }</h3>
                    </div>
                    <div className='content'>
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
}
