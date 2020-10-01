import React from 'react';

export function SecondaryButton(props: any & { href: string | undefined, children?: JSX.Element | JSX.Element[] | string }) {
    return <a href={props.href} className="button has-text-weight-bold is-medium is-info" { ...props }>{props.children}</a>;
}
