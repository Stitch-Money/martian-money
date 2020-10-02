import React, { useState } from 'react';
import Layout from 'components/layout';
import Landing from 'components/home/landing';
import Footer from 'components/footer/footer';
import { About } from '../components/about/about';
import { StitchConfiguration } from '../integrations/stitch/client';

export default function Index() {
    const [isReadMoreOpen, setReadMoreOpen] = useState(false);

    console.log('ENVIRONMENT:', process.env.NODE_ENV);
    console.log('redirectUri:', StitchConfiguration.redirectUri);

    if (isReadMoreOpen) {
        return <About onClose={() => setReadMoreOpen(false)}/>;
    }
    return (
        <Layout>
            <Landing/>
            <Footer onReadMoreClick={() => setReadMoreOpen(true)}/>
        </Layout>
    );
}
