import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import {
  Box,
  Flex,
} from '@chakra-ui/react';

/**
 * @typedef {import("@prismicio/client").Content.UptimeContentSlice} UptimeContentSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<UptimeContentSlice>} UptimeContentProps
 * @param { UptimeContentProps }
 */
const UptimeContent = ({ slice }) => (
  <Flex justifyContent="center" flexDirection={{base:"column", xl:"row"}} alignItems="center" pt="60px" pb="60px" >
    <Box className='bold-text' textAlign={{base:"center", xl:"unset"}} pl="20px" pr="20px">
      <span style={{ color: slice.primary.color }}>
        <Box fontSize="60px" fontWeight="600">
          <PrismicRichText field={slice.primary.heading} />
        </Box>
      </span>
      <Box fontSize="30px">
        <PrismicRichText field={slice.primary.description} />
      </Box>
    </Box>
    <Box>
      <img src={slice.primary.image.url} alt={slice.primary.image.alt} height="350px" width="350px" />
      <Flex justifyContent="center" fontSize="12px" pt="50px" pb="50px">
        <span >{slice.primary.copyright}</span>
      </Flex>
    </Box>
  </Flex>

)

export default UptimeContent