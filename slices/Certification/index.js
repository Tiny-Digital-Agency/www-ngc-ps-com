import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicLink } from '@prismicio/react'
import {
  Box,
  Stack,
  Flex,
  Image,
} from '@chakra-ui/react';
/**
 * @typedef {import("@prismicio/client").Content.CertificationSlice} CertificationSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CertificationSlice>} CertificationProps
 * @param { CertificationProps }
 */
const Certification = ({ slice }) => (
  <section>
    <Stack paddingTop={"2em"} paddingBottom={"2em"} _before={{
      content: `""`,
      backgroundColor: '#4d8b3f',
      width: '84px',
      height: '2px',
      margin: '0 auto',
      left: '0',
      right: '0',
      top: '-20px',

    }}>
      <Flex justifyContent={'center'} alignItems={"center"} flexDirection={{ base: 'column', md: 'row', sm: 'column' }}>
        {

          slice.items?.map((item, i) =>
            <PrismicLink field={item.image_link} key={i}>
              <Box maxW={"190px"} margin={"20px"}>
                <Image  src={item.image.url} alt={item.image.alt} />
              </Box>
            </PrismicLink>
          )
        }
      </Flex>
    </Stack>
  </section>
)

export default Certification