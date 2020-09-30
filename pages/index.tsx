import React from 'react';
import Layout from 'components/layout';
import Landing from 'components/home/landing';
import About from 'components/about/about';
import Testimonials from 'components/testimonials/testimonials';

export default function Index() {
    return (
        <Layout>
            <Landing/>
            <About/>
            <Testimonials/>
        </Layout>
    );
}
