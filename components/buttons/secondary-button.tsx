import React from 'react';

export function SecondaryButton(props: { href: string | undefined, children?: JSX.Element | JSX.Element[] | string }) {
    return <a href={props.href} className="button is-large is-info">{props.children}</a>;
}
