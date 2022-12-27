import Head from 'next/head'

function Head_meta() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="My page title" key="title" />
        <meta name="robots" content="max-image-preview:large" />
        <meta name="description" content="NGC’s capabilities include engineering and design, as well as product solution supply, fabrication and on-site installation." />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="#" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home - NGC Product Solutions" />
        <meta property="og:description" content="NGC’s capabilities include engineering and design, as well as product solution supply, fabrication and on-site installation." />
        <meta property="og:url" content="#" />
        <meta property="og:site_name" content="NGC Product Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="NGC’s capabilities include engineering and design, as well as product solution supply, fabrication and on-site installation." />
        <meta name="twitter:title" content="Home - NGC Product Solutions" />
        <meta name="twitter:image" content="http://www.ngc-ps.com/wp-content/uploads/2019/01/responsive.png" />
      </Head>
    </div>
  )
}

export default Head_meta