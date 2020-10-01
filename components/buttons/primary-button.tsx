import React from 'react';

export function PrimaryButton(props: any & { href: string | undefined, children?: JSX.Element | JSX.Element[] | string }) {
    return <a href={props.href} className="button is-large is-primary" { ...props }>{props.children}</a>;
}
