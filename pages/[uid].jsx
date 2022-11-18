import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../prismicio'
import { components } from '../slices'
import Navigation from '../components/Navigation'
import Layout from '../components/Layout'
const Page = ({ page, navigation }) => {
  return (
    <div>
      <Layout navigation={navigation}>
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

  return {
    props: {
      page,
      navigation,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('page')

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  }
}