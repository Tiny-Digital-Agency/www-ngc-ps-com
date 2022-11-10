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

const Page = ({ page, navigation, settings }) => {
  return <SliceZone slices={page.data.slices} components={components} />
}

export default Page

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })

  const page = await client.getSingle('homepage')

  return {
    props: {
      page,
    },
  }
}