import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Replace with your brand configuration */}
        <link
          href="https://cdn.siux.studio/static/brand/632213d5a467b1178b31dde0/latest/siux.main.css"
          type="text/css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.siux.studio/static/brand/632213d5a467b1178b31dde0/latest/siux.main.responsive.css"
          type="text/css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900|Overpass+Mono:400"
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
