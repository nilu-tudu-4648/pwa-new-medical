import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossOrigin="anonymous"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />
          <link rel="apple-touch-icon" href="/icon-512x512.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="manifest" href="/sw.js" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/icon.png" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
            crossOrigin="anonymous"
          ></script>
          <script src="/sw.js" />
          <script src="/pwabuilder-sw.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
