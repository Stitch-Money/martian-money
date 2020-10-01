import React from 'react';

export default function Navbar() {
    return (
        <nav id="navbar" className={'navbar is-spaced is-center'}>
            <div className="column">
                <div className="level-item is-center">
                    <div className="col">
                        <img className="is-center" src={'images/mars-logo.svg'} width={'250px'} alt=""/>
                    </div>
                </div>
            </div>
        </nav>
    );
}
