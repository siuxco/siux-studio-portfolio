<p align="center">
  <a href="https://siux.studio">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/edZxJHi.png">
      <img src="https://i.imgur.com/4jqshKx.png#gh-light-mode-only" width="320">
    </picture>
  </a>
</p>

# SIUX Studio + Next.js integration
This is a boilerplate integration of [SIUX Studio](https://siux.studio) and [Next.js](https://nextjs.org/)

[Live preview on Vercel](https://siux-studio-next.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsiuxco%2Fsiux-studio-next)

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

## Development

Edit the page by modifying `pages/index.js`. The page auto-updates as you edit the file. The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/) from the creators of [Next.js](https://nextjs.org/).

## API Routes

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages. This endpoint can be edited in `pages/api/hello.js`.

```bash
http://localhost:3000/api/hello
```

## Deploy to Vercel

##### Preview application in browser
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsiuxco%2Fsiux-studio-next)
