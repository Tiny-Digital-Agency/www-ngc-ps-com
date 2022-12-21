import { SliceZone } from '@prismicio/react'
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver  } from '../../prismicio'
import { components } from '../../slices'
import Layout from '../../components/Layout'
const valves = ({ valves, navigation, settings, footer }) => {
  return (
    <div>
      <Layout
        navigation={navigation}
        settings={settings}
        footer={footer}
      >
        <SliceZone slices={valves.data.slices} components={components} />
      </Layout>
    </div>
  );
};

export default valves

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const valves = await client.getByUID("valves", params.uid);
  const navigation = await client.getByUID("navigation", "navigation");
  const settings = await client.getSingle("settings");
  const footer = await client.getByUID("footer", "footer");
  return {
    props: {
      valves,
      navigation,
      settings,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient()

  const valves = await client.getAllByType('valves')

  return {
    paths: valves.map((valves) => prismicH.asLink(valves, linkResolver )),
    fallback: false,
  }
}