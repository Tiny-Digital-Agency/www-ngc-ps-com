// import Head from 'next/head'
// import styles from '../styles/Home.module.css'
// import Herosection from "../components/Herosection";
// import About from "../components/About";

import GridSection from "../components/GridSection";
import CardsSection from "../components/CardsSection";

export default function Home() {
  return (
    <>
      <Herosection />
      <About />
      <GridSection />
      <CardsSection />
    </>
  )
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