import { SliceZone } from '@prismicio/react'
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from '../../../prismicio'
import { components } from '../../../slices'
import Layout from '../../../components/Layout'
const structural_support_products = ({ structural_support_products, navigation, settings, footer }) => {
  return (
    <div>
      <Layout
        navigation={navigation}
        settings={settings}
        footer={footer}
      >
        <Head>
          <title>
            {prismicH.asText(structural_support_products.data.title)}
            {prismicH.asText(settings.data.name)}
          </title>
        </Head>
        <SliceZone slices={structural_support_products.data.slices} components={components} />
      </Layout>
    </div>
  );
};

export default structural_support_products

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const structural_support_products = await client.getByUID("structural_support_products", params.structural_support_products);
  const navigation = await client.getByUID("navigation", "navigation");
  const settings = await client.getSingle("settings");
  const footer = await client.getByUID("footer", "footer");
  return {
    props: {
      structural_support_products,
      navigation,
      settings,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient()

  const structural_support_products = await client.getAllByType('structural_support_products')

  return {
    paths: structural_support_products.map((structural_support_products) => prismicH.asLink(structural_support_products, linkResolver)),
    fallback: false,
  }
}