import React, { useState } from 'react';

export function PrimaryButton(props: any & { href: string | undefined, children?: JSX.Element | JSX.Element[] | string }) {
    const [clicked, setClicked] = useState(false);

    return <a { ...props } href={props.href} className={`button has-text-weight-bold is-medium is-primary ${clicked ? 'is-loading' : ''}`} onClick={_ => { setClicked(true); props.onClick(); }}>{props.children}</a>;
}
