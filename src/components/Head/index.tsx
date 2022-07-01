import React from 'react';
import NextHead from 'next/head';

import useSeo, { Metadata } from 'helpers/SEO';

const Head: React.FC<Partial<Metadata>> = (props) => {
  const { title, description, image, ogType, url } = {
    ...(useSeo(props) || {}),
    ...props,
  };

  return (
    <NextHead>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      {/* <meta
        name="google-site-verification"
        content="9RawdUVdGusym5qu16Z0oG6QkObYyIRJIc4z0FC8tJU"
      /> */}
      <meta itemProp="name" content={title} />
      <meta name="description" content={description} />
      <meta itemProp="description" content={description} />
      <meta name="image" content={image} />
      <meta itemProp="image" content={image} />

      <meta property="og:site_name" content="Isaac" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* <meta property="fb:app_id" content="<640681249819329>" /> */}

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:site" content="@isaac" />
      <meta property="twitter:creator" content="@isaac" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image:src" content={image} />

      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
    </NextHead>
  );
};

export default Head;
