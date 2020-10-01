import React from 'react';
import Layout from 'components/layout';
import Landing from 'components/home/landing';
import Footer from "components/footer/footer";

export default function Index() {
    return (
        <Layout>
            <Landing/>
            <Footer/>
        </Layout>
    );
}
