import React from "react";
import Head from "next/head";

function MissingSeo() {
  return (
    <Head>
      <title>404 - Motion Laboratory</title>
      <meta name="og:title" content="404 - Motion Laboratory" key="title" />
      <meta
        name="description"
        content="Sorry, there is nothing here."
        key="description"
      />
      <meta name="twitter:title" content="404 - Motion Laboratory" />
      <meta
        name="og:description"
        content="Sorry, there is nothing here."
        key="og:description"
      />
      <meta
        name="og:image"
        content="https://res.cloudinary.com/deajg4y52/image/upload/v1634909880/404_Seo_nwvr9d.png"
      />
      <meta name="og:image:width" content="1200" />
      <meta name="og:image:height" content="600" />
      <meta name="og:type" content="website" />
      <meta
        name="twitter:description"
        content="Sorry, there is nothing here."
      />
      <meta
        name="twitter:card"
        content="https://res.cloudinary.com/deajg4y52/image/upload/v1634909880/404_Seo_nwvr9d.png"
      />
    </Head>
  );
}

export default MissingSeo;
