export default {
  github: 'https://github.com/Dax911/ping-t3-docs',
  docsRepositoryBase: 'https://github.com/Dax911/ping-t3-docs/tree/main',
  titleSuffix: ' – Ping',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Ping</span>
      <span className="text-gray-600 font-normal hidden md:inline">
          A better way to stream
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#757575" />
      <meta name="theme-color" content="#757575" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Ping - A better way to stream. " />
      <meta name="og:description" content="Ping - A better way to stream. " />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://pbs.twimg.com/profile_images/1486108108598362115/E4ActmB3_400x400.png" />
      <meta name="twitter:site:domain" content="ping.gg" />
      <meta name="twitter:url" content="https://twitter.com/pingvideo" />
      <meta name="og:title" content="Ping - A better way to stream. " />
      <meta name="og:image" content="https://pbs.twimg.com/profile_images/1486108108598362115/E4ActmB3_400x400.png" />
      <meta name="apple-mobile-web-app-title" content="Ping" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Nextra.</>,
  unstable_faviconGlyph: '👋',
}
