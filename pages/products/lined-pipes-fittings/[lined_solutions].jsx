import { SliceZone } from '@prismicio/react'
import * as prismicH from "@prismicio/helpers";
import { createClient, linkResolver  } from '../../../prismicio'
import { components } from '../../../slices'
import Layout from '../../../components/Layout'
const lined_solutions = ({ lined_solutions, navigation, settings, footer }) => {
  return (
    <div>
      <Layout
        navigation={navigation}
        settings={settings}
        footer={footer}
      >
        <SliceZone slices={lined_solutions.data.slices} components={components} />
      </Layout>
    </div>
  );
};

export default lined_solutions

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const lined_solutions = await client.getByUID("lined_solutions", params.lined_solutions);
  const navigation = await client.getByUID("navigation", "navigation");
  const settings = await client.getSingle("settings");
  const footer = await client.getByUID("footer", "footer");
  return {
    props: {
    lined_solutions,
      navigation,
      settings,
      footer,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient()

  const lined_solutions = await client.getAllByType('lined_solutions')

  return {
    paths: lined_solutions.map((lined_solutions) => prismicH.asLink(lined_solutions, linkResolver )),
    fallback: false,
  }
}