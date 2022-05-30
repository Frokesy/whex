import Head from "next/head";

const Meta = ({ title, keywords, desc }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      />
      <meta name="theme-color" content="#FFF" />
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" type="image/x-icon" href="/logo.jpg"/>

      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content="/logo.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={desc} />
      <meta property="twitter:image" content="/logo.jpg" />

      <meta property="og:site_name" content="WHEXcosystem" />
      <meta property="og:site" content="" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content="" />
      <meta property="og:url" content="/logo.jpg" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "WHEXcosystem",
  keywords: "WHEX, whexcosystem, token",
  desc: "The official WHEXcosystem website || 5% sent to a whale charity wallet, 42% burned, 58% sold, donated biweekly(capped at 4.2% LP)",
};

export default Meta;
