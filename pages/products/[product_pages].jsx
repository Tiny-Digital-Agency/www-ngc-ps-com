import { SliceZone } from '@prismicio/react'
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from '../../prismicio'
import { components } from '../../slices'
import Layout from '../../components/Layout'
const product_pages = ({ product_pages, navigation, settings, footer }) => {
  return (
    <div>
      <Layout
        navigation={navigation}
        settings={settings}
        footer={footer}
      >
        <Head>
          <title>
            {prismicH.asText(product_pages.data.title)}
            {prismicH.asText(settings.data.name)}
          </title>
        </Head>
        <SliceZone slices={product_pages.data.slices} components={components} />
      </Layout>
    </div>
  );
};

export default product_pages

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const product_pages = await client.getByUID("product_pages", params.product_pages);
  const navigation = await client.getByUID("navigation", "navigation");
  const settings = await client.getSingle("settings");
  const footer = await client.getByUID("footer", "footer");
  return {
    props: {
      product_pages,
      navigation,
      settings,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient()

  const product_pages = await client.getAllByType('product_pages')

  return {
    paths: product_pages.map((product_pages) => prismicH.asLink(product_pages, linkResolver)),
    fallback: false,
  }
}