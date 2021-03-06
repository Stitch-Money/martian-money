import React, { useState } from 'react';
import { buttonClickHandler } from './button-click-handler';

export function SecondaryButton(props: any & { href: string | undefined, children?: JSX.Element | JSX.Element[] | string }) {
    const [clicked, setClicked] = useState(false);

    return <a { ...props } href={props.href} className={`cta-button is-info ${clicked ? 'is-loading' : ''}`} onClick={_ => buttonClickHandler(setClicked, props.onClick)}>{props.children}</a>;
}
