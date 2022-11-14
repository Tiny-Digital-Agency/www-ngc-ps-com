// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import Herosection from "../components/Herosection";
// import About from "../components/About";

// import CardsSection from "../components/CardsSection";
// export default function Home() {
//   return (
//     <>
//       <CardsSection />
//       <Herosection />
//       <About />
//     </>
//   )
// }


import { SliceZone } from '@prismicio/react'

import { createClient } from '../prismicio'
import { components } from '../slices'

/*Components*/
import { Navigation } from '../components/Navigation'
// import { NavigationItems } from '../slices/NavigationItems/index'
const Page = ({ navigation, page }) => {

  return (
    <div>
      <Navigation navigation={navigation} />
      <SliceZone slices={page?.data.slices} components={components} />
      {/* The rest of your component... */}
    </div>
  )
}
export default Page

export async function getStaticProps({  previewData }) {
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

