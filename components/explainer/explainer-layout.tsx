import { SiteHead } from '../siteHead';
import Dome from '../dome';
import React from 'react';
import { ExplainerHeader } from './explainer-header';

export function ExplainerLayout(props: { onCloseClick: () => void, children?: JSX.Element | JSX.Element[] }): JSX.Element {
    return <>
        <SiteHead/>
        <Dome/>
        <div className="full-viewport-height">
            <div className="container is-flex is-flex-direction-column is-justify-content-center">
                <ExplainerHeader onClose={props.onCloseClick}/>
                <div className="column is-offset-one-quarter-tablet is-half-tablet">
                    {props.children}
                </div>
            </div>
        </div>
    </>;
}
