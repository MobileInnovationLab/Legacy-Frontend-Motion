import React from "react";
import Head from "next/head";

function GeneralSeo(props) {
  const defaultTitle = "Motion Laboratory";
  const templateTitle = props.title
    ? `${props.title} - ${defaultTitle}`
    : defaultTitle;

  const defaultDescription =
    "The Mobile Innovation Laboratory, or commonly called Motion Lab, is one of the latest laboratories at the Faculty of Informatics, Telkom University under the auspices of K-Side.";
  const templateDescription = props.description
    ? props.description
    : defaultDescription;

  return (
    <Head>
      <title>{templateTitle}</title>
      <meta name="og:title" content={templateTitle} key="title" />
      <meta
        name="description"
        content={templateDescription}
        key="description"
      />
      <meta name="twitter:title" content={templateTitle} />
      <meta
        name="og:description"
        content={templateDescription}
        key="og:description"
      />
      <meta
        name="og:image"
        content="https://res.cloudinary.com/deajg4y52/image/upload/v1634909808/Main_Seo_quhy41.png"
      />
      <meta name="og:image:width" content="1200" />
      <meta name="og:image:height" content="600" />
      <meta name="og:type" content="website" />
      <meta name="twitter:description" content={templateDescription} />
      <meta
        name="twitter:card"
        content="https://res.cloudinary.com/deajg4y52/image/upload/v1634909808/Main_Seo_quhy41.png"
      />
    </Head>
  );
}

export default GeneralSeo;
