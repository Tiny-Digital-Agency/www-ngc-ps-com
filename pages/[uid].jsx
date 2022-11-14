import { SliceZone } from '@prismicio/react'
import * as prismicH from '@prismicio/helpers'

import { createClient } from '../prismicio'
import { components } from '../slices'

/*Components*/
import { Navigation } from '../components/Navigation'
// import { NavigationItems } from '../slices/NavigationItems/index'
export async function Page({ navigation, page }) {

  return (
    <div>
      <Navigation navigation={navigation} />
      <SliceZone slices={page.data.slices} components={components} />
      {/* The rest of your component... */}
    </div>
  )
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const [navigation, page] = await Promise.all([
    client.getByUID('navigation', 'header'),
    client.getByUID('page', params.uid),
  ])

  return {
    props: {
      navigation,
      page,
    },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const pages = await client.getAllByType('page')

  return {
    paths: pages.map((page) => prismicH.asLink(page)),
    fallback: false,
  }
}