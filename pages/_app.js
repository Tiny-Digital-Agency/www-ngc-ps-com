import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../prismicio'
import '../styles/globals.css'
import '../styles/navigation.css'
import '../styles/product-pages.css'
import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <PrismicProvider
          internalLinkComponent={({ href, ...props }) => (
            (<Link href={href} {...props}>

            </Link>)
          )}
        >
          <PrismicPreview repositoryName={repositoryName}>
            <Component {...pageProps} />
          </PrismicPreview>
        </PrismicProvider>
      </Layout>
    </ChakraProvider>
  );
}