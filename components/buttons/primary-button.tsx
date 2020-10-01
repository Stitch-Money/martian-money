import React from 'react';

export function PrimaryButton(props: any & { href: string | undefined, children?: JSX.Element | JSX.Element[] | string }) {
    return <a href={props.href} className="button has-text-weight-bold is-large is-primary" { ...props }>{props.children}</a>;
}
