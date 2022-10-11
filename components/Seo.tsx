import Head from "next/head";

interface SeoProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

function Seo({ title, description, url, image }: SeoProps) {
  return (
    <Head>
      <title>{title || "Bearus"}</title>
      <meta
        name="description"
        content={
          description || "빠른 행동과 실험을 통해 세상을 바꾸는 스타트업"
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "Bearus"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || "https://bearus.co/"} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content="bearus" />
    </Head>
  );
}

export default Seo;
