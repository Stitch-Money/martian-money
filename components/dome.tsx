import React from 'react';

export default function Dome({ children }: { children: any }) {
    return (
        <>
            <div>
                <img  className='big-dome' src='images/big-dome.svg' alt=''/>
            </div>
            {children}
        </>
    );
}
