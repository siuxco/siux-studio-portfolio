import { Html, Head, Main, NextScript } from "next/document";
import { useEffect, useState } from "react";

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
        <link
          href="https://cdn.siux.studio/static/brand/635c578d5fb65c4d24c98836/latest/siux.main.css"
          type="text/css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.siux.studio/static/brand/635c578d5fb65c4d24c98836/latest/siux.main.responsive.css"
          type="text/css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
