import { SliceZone } from '@prismicio/react'
import * as prismicH from "@prismicio/helpers";
import Head from "next/head";
import { createClient, linkResolver } from '../../../prismicio'
import { components } from '../../../slices'
import Layout from '../../../components/Layout'
const leak_detection_and_protection = ({ leak_detection_and_protection, navigation, settings, footer }) => {
  return (
    <div>
      <Layout
        navigation={navigation}
        settings={settings}
        footer={footer}
      >
       <Head>
          <title>
            {prismicH.asText(leak_detection_and_protection.data.title)}
            {prismicH.asText(settings.data.name)}
          </title>
        </Head>
        <SliceZone slices={leak_detection_and_protection.data.slices} components={components} />
      </Layout>
    </div>
  );
};

export default leak_detection_and_protection

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const leak_detection_and_protection = await client.getByUID("leak_detection_and_protection", params.leak_detection_and_protection);
  const navigation = await client.getByUID("navigation", "navigation");
  const settings = await client.getSingle("settings");
  const footer = await client.getByUID("footer", "footer");
  return {
    props: {
      leak_detection_and_protection,
      navigation,
      settings,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient()

  const leak_detection_and_protection = await client.getAllByType('leak_detection_and_protection')

  return {
    paths: leak_detection_and_protection.map((leak_detection_and_protection) => prismicH.asLink(leak_detection_and_protection, linkResolver)),
    fallback: false,
  }
}