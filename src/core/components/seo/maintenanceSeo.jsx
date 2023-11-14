import React from "react";
import Head from "next/head";

function MaintenanceSeo() {
  return (
    <Head>
      <title>Maintenance</title>
      <meta name="og:title" content="Maintenance" key="title" />
      <meta
        name="description"
        content="Sorry, this web is still under maintenance"
        key="description"
      />
      <meta name="twitter:title" content="Maintenance" />
      <meta
        name="og:description"
        content="Sorry, this web is still under maintenance"
        key="og:description"
      />
      <meta
        name="og:image"
        content="https://res.cloudinary.com/deajg4y52/image/upload/v1634909808/Main_Seo_quhy41.png"
      />
      <meta name="og:image:width" content="1200" />
      <meta name="og:image:height" content="600" />
      <meta name="og:type" content="website" />
      <meta
        name="twitter:description"
        content="Sorry, this web is still under maintenance"
      />
      <meta
        name="twitter:card"
        content="https://res.cloudinary.com/deajg4y52/image/upload/v1634909808/Main_Seo_quhy41.png"
      />
    </Head>
  );
}

export default MaintenanceSeo;
