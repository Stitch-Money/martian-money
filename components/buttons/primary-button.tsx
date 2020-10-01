import React from 'react';

export function PrimaryButton(props: { href: string | undefined, children?: JSX.Element | JSX.Element[] | string }) {
    return <a href={props.href} className="button is-large is-primary">{props.children}</a>;
}
