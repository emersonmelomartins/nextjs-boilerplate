import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Next Boilerplate</title>
        <link rel="icon" href="/img/icon-512.png" type="image/png" />
        <link
          rel="apple-touch-icon"
          href="/img/icon-512.png"
          type="image/png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover"
        />
        <meta
          name="description"
          content="A starter project with TypeScript, React, NextJS, Jest, ESLint, Prettier, Styled-Components, Storybook, PWA"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
