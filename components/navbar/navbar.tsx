import React from 'react';
import { siteName } from '../layout';

export default function Navbar() {
    return (
        <nav id="navbar" className={'navbar has-shadow is-spaced'}>
            <div className="container">
                <div className="navbar-brand">
                    <img className="navbar-item" src={'/favicon.svg'} width={'60px'} alt=""/>
                    <h2 className="navbar-item">{ siteName }</h2>
                </div>
                <a className="navbar-item navbar-end button is-primary is-hidden-mobile">Apply!</a>
            </div>
        </nav>
    );
}
