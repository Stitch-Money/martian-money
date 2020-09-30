import React from 'react';
import { StitchProvider } from 'components/stitch/stitch-provider';
import { ReportContents } from '../../components/report/reportContents';

export default function Report(): JSX.Element {
    return <StitchProvider>
        <ReportContents/>
    </StitchProvider>;
}

export async function getStaticProps() {
    return {
        props: {} // will be passed to the page component as props
    };
}
