import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import {
  Stack,
  Flex,
  Grid,
  Box
} from "@chakra-ui/react";
/**
 * @typedef {import("@prismicio/client").Content.UptimeSlice} UptimeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<UptimeSlice>} UptimeProps
 * @param { UptimeProps }
 */
const Uptime = ({ slice }) => (
  <section>
    <Flex justifyContent="center" alignItems="center" textAlign="center" w="100%" h="100px" bg="#0072b8">
      <Box fontSize={{base:"20px", sm:"36px"}} fontWeight={600} color="#fff">
        <PrismicRichText field={slice.primary.title} />
      </Box>
      <Box fontSize="20px" fontWeight={600} color="#fff">
        <PrismicRichText field={slice.primary.sub_heading} />
      </Box>
    </Flex>
  </section>
)

export default Uptime