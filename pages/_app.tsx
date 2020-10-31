import '../styles/global.css';
import React from 'react';
import 'components/layout.scss';
import './marsthreeD.scss';

export default function App({ Component, pageProps }: { Component: React.FC, pageProps: any }) {
    return <Component {...pageProps} />;
}
