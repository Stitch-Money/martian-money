import React, { useState } from 'react';
import Layout from 'components/layout';
import Landing from 'components/home/landing';
import Footer from 'components/footer/footer';
import { About } from '../components/about/about';

export default function Index() {
    const [isReadMoreOpen, setReadMoreOpen] = useState(false);

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
