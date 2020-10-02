import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import React, { MouseEventHandler } from 'react';

export function ExplainerHeader(props: { onClose: MouseEventHandler }) {
    return <nav className="level is-mobile">
        <div className="level-left"/>
        <div className="level-right">
            <button className="lavel-item button is-text has-text-primary is-small" onClick={props.onClose}>
                <span className="icon is-small">
                    <FontAwesomeIcon icon={faTimes}/>
                </span></button>
        </div>
    </nav>;
}
