import { SliceZone } from '@prismicio/react'
import { createClient } from '../../prismicio'
import { components } from '../../slices'
import Layout from '../../components/Layout'

const product = ({ product_pages, navigation, settings, footer }) => {
  return (
    <Layout
      navigation={navigation}
      settings={settings}
      footer={footer}
    >
      <SliceZone slices={product_pages?.data?.slices} components={components} />
    </Layout>
  );
};

export default product;


export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData })

  const [navigation] = await Promise.all([
    client.getByUID('navigation', 'navigation'),
  ])
  const product_pages = await client.getAllByType('product_pages')
  const settings = await client.getSingle('settings')
  const footer = await client.getSingle('footer')
  return {
    props: {
      navigation,
      product_pages,
      settings,
      footer,
    },
  }
}