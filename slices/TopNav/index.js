import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'
/**
 * @typedef {import("@prismicio/client").Content.TopNavSlice} TopNavSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TopNavSlice>} TopNavProps
 * @param { TopNavProps }
 */
const TopNav = ({ slice }) => (
  <section>

<PrismicLink  document={slice.primary.button}>My Link</PrismicLink>

{
  slice.items.map((item, i) =>
    <PrismicRichText field={item.contact_details} key={i} />
  )
}
  </section>
)

export default TopNav