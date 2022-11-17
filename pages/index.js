

import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

/*Components*/
import { Navigation } from '../components/Navigation'
import  Layout  from '../components/Layout'
// import { NavigationItems } from '../slices/NavigationItems/index'

const Index = ({ page, navigation }) => {
  return (
    <Layout navigation={navigation}>
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

  return {
    props: {
      navigation,
      page
    },
  }
}
