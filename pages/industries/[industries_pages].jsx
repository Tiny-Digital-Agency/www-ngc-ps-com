import { SliceZone } from '@prismicio/react'
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver  } from '../../prismicio'
import { components } from '../../slices'
import Layout from '../../components/Layout'
const industries_pages = ({ industries_pages, navigation, settings, footer }) => {
  return (
    <div>
      <Layout
        navigation={navigation}
        settings={settings}
        footer={footer}
      >
        <SliceZone slices={industries_pages.data.slices} components={components} />
      </Layout>
    </div>
  );
};

export default industries_pages

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const industries_pages = await client.getByUID("industries_pages", params.industries_pages);
  const navigation = await client.getByUID("navigation", "navigation");
  const settings = await client.getSingle("settings");
  const footer = await client.getByUID("footer", "footer");
  return {
    props: {
      industries_pages,
      navigation,
      settings,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient()

  const industries_pages = await client.getAllByType('industries_pages')

  return {
    paths: industries_pages.map((industries_pages) => prismicH.asLink(industries_pages, linkResolver )),
    fallback: false,
  }
}