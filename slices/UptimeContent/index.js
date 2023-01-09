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
  <Flex justifyContent="center" flexDirection={{ base: "column", xl: "row" }} alignItems="center" pt="90px" pb="60px" >
    <Box className='bold-text' textAlign={{ base: "center", xl: "unset" }} pl={{ base: "20px", xl: "6vw" }} pr="20px">
      <span style={{ color: slice.primary.color }}>
        <Box fontSize={{ base: "40px", md: "60px", lg: "80px" }} fontWeight="700">
          <PrismicRichText field={slice.primary.heading} />
        </Box>
      </span>
      <Box fontSize={{ base: "20px", md: "28px", xl: "33px" }} pt="21px">
        <PrismicRichText field={slice.primary.description} />
      </Box>
    </Box>

    <Flex justifyContent={"center"} direction="column" height="auto" width="350px" >
      <Box m="auto">
        <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
      </Box>

      <Flex justifyContent="center" fontSize="12px" p="0">
        <span >{slice.primary.copyright}</span>
      </Flex>
    </Flex>
  </Flex >

)

export default UptimeContent