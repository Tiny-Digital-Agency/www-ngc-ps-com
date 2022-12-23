import * as prismic from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import * as prismicNext from '@prismicio/next'
import sm from './sm.json'

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/'
    case 'page':
      return `/${doc.uid}`
    case 'product_pages':
      return `/products/${doc.uid}`
    case 'industries_pages':
      return `/industries/${doc.uid}`
    case 'lined_solutions':
      return `/products/lined-pipes-fittings/${doc.uid}`
    case 'leak_detection_and_protection':
      return `/products/leak-detection-protection/${doc.uid}`
    case 'structural_support_products':
      return `/products/structural-support/${doc.uid}`
    case 'valves':
      return `/products/valves/${doc.uid}`
    case 'crane_valves':
      return `/products/valves/crane/${doc.uid}`
    case 'aloyco_valves':
      return `/products/valves/aloyco/${doc.uid}`
    case 'xomox':
      return `/products/valves/xomox/${doc.uid}`
    case 'pacific_valves':
      return `/products/valves/pacific/${doc.uid}`
    default:
      return null
  }
}

export const createClient = (config = {}) => {
  const client = prismic.createClient(sm.apiEndpoint, config)

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}