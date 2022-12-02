import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'
import Layout from '../components/Layout'
// import { NavigationItems } from '../slices/NavigationItems/index'

const Index = ({ page, navigation, settings, footer }) => {
  return (
    <Layout
      navigation={navigation}
      settings={settings}
      footer={footer}
    >
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Index;


export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const [navigation] = await Promise.all([
    client.getByUID('navigation', 'navigation'),
  ])
  const page = await client.getSingle('homepage')
  const settings = await client.getSingle('settings')
  const footer = await client.getSingle('footer')
  return {
    props: {
      navigation,
      page,
      settings,
      footer,
    },
  }
}