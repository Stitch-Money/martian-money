import React from 'react';

export default function Navbar() {
    return (
        <nav id="navbar" className={'navbar is-spaced is-center'}>
            <div className="column">
                <div className="level-item is-center">
                    <img className="is-center" src={'/favicon.svg'} width={'60px'} alt=""/>
                </div>
            </div>
        </nav>
    );
}
