# SIUX Studio portfolio

This template is built with a modern and responsive design, allowing developers and designers to create a professional website to showcase their work quickly.

<p align="center">
  <a href="https://siux-studio-portfolio.vercel.app/">
    <picture>
      <img src="https://i.imgur.com/IzXhTjW.png" width="100%" style="border-radius:18px">
    </picture>
  </a>
</p>

[Live preview on Vercel](https://siux-studio-portfolio.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/siuxco/siux-studio-portfolio)

## Getting started

##### Run the development server
```bash
npm run dev
```

##### Preview your application in browser

```bash
http://localhost:3000
```


## Installation

Integrate your brand styles by replacing the following lines of code on `pages/_document.js` with your brand settings.

```html
<link href="https://cdn.siux.studio/static/brand/632213d5a467b1178b31dde0/latest/siux.main.css" type="text/css" rel="stylesheet">
<link href="https://cdn.siux.studio/static/brand/632213d5a467b1178b31dde0/latest/siux.main.responsive.css" type="text/css" rel="stylesheet">
```

## Including Google fonts

A. Create an `.env` file in the root directory and define the environment `SIUX_STUDIO_BRAND_ID` and `SIUX_STUDIO_API_KEY` variables with your brand data to display the Google fonts properly.

B. Alternatively you can manually include the fonts you want to use by adding this node in the `_document.jsx`:

```html
<link href="https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900|Overpass+Mono:400" type="text/css" rel="stylesheet"/>
```

## Development

Edit the page by modifying `pages/index.js`. The page auto-updates as you edit the file. The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/) from the creators of [Next.js](https://nextjs.org/).

## API Routes

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages. This endpoint can be edited in `pages/api/hello.js`.

```bash
http://localhost:3000/api/hello
```

## Deploy to Vercel

##### Preview application in browser
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/siuxco/siux-studio-portfolio)