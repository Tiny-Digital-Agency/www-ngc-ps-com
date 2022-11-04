import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import '../styles/globals.css'
import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
export default function App({ Component, pageProps }) {
  return (
    <Layout>

    <ChakraProvider>
    <PrismicProvider
      internalLinkComponent={({ href, ...props }) => (
        <Link href={href}>
          <a {...props} />
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
    </ChakraProvider>
    
    </Layout>
  )
}