import React from "react";
import Router from 'next/router'
import Head from 'next/head'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`);
    NProgress.start()
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                {/* Import CSS for nprogress */}
                <link rel="stylesheet" type="text/css" href="/nprogress.css"/>
                <title>NextJS - Dynamic Routing & NProgress</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
