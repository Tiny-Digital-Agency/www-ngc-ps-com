import { SliceZone } from '@prismicio/react'
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver } from '../prismicio'
import { components } from '../slices'
import Layout from '../components/Layout'
const Page = ({ page, navigation, settings, footer }) => {
  return (
    <div>
      <Layout
        navigation={navigation}
        settings={settings}
        footer={footer}
      >
        <Head>
          <title>
            {prismicH.asText(page.data.title)}
            {prismicH.asText(settings.data.name)}
          </title>
        </Head>
        <SliceZone slices={page.data.slices} components={components} />
      </Layout>
    </div>
  );
};

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID("page", params.uid);
  const navigation = await client.getByUID("navigation", "navigation");
  const settings = await client.getSingle("settings");
  const footer = await client.getByUID("footer", "footer");
  return {
    props: {
      page,
      navigation,
      settings,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('page')

  return {
    paths: pages.map((page) => prismicH.asLink(page, linkResolver)),
    fallback: false,
  }
}