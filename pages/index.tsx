import React, { useState } from 'react';
import Layout from 'components/layout';
import Landing from 'components/home/landing';
import Footer from 'components/footer/footer';
import { LearnMore } from '../components/about/learnMore';

export default function Index() {
    const [isReadMoreOpen, setReadMoreOpen] = useState(false);

    if (isReadMoreOpen) {
        return <LearnMore onClose={() => setReadMoreOpen(false)} />;
    }
    return (
        <Layout>
            <Landing />
            <Footer onReadMoreClick={() => setReadMoreOpen(true)} />
        </Layout>
    );
}
