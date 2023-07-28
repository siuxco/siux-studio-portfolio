import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        {/* Replace with your brand configuration */}
        <link href="https://cdn.siux.studio/static/brand/64394f6e1a3d72c0b2b6a4c5/latest/siux.main.css" type="text/css" rel="stylesheet" />
        <link href="https://cdn.siux.studio/static/brand/64394f6e1a3d72c0b2b6a4c5/latest/siux.main.responsive.css" type="text/css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
