import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import React, { MouseEventHandler } from 'react';

export function ExplainerHeader(props: { onClose: MouseEventHandler }) {
    return <nav id="navbar" className='navbar is-spaced is-transparent'>
        <div className="navbar-menu">
            <div className="navbar-end">
                <button className="button is-text has-text-primary is-small" onClick={props.onClose}>
                    <span className="icon is-small">
                        <FontAwesomeIcon icon={faTimes}/>
                    </span></button>
            </div>
        </div>
    </nav>;
}
