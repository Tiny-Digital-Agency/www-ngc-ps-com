import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import {
  Box,
  Flex,
  Stack,
  Container,
  Heading,
} from '@chakra-ui/react';
/**
 * @typedef {import("@prismicio/client").Content.TextEditorSlice} TextEditorSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextEditorSlice>} TextEditorProps
 * @param { TextEditorProps }
 */
const TextEditor = ({ slice }) => (
  <section>
    <Box paddingTop={"10px"} paddingBottom={"10px"} textAlign="center">
      <Stack spacing={6} as={Container} maxW={{ base: '100vw', sm: '80vw', xl: '70vw' }}>
        <Heading fontSize={'4xl'} paddingTop='10px' fontWeight="500" textAlign={'center'}>
          <span style={{ color: slice.primary.color }}><PrismicRichText field={slice.primary.heading} /></span>
        </Heading>
        {
          slice?.items?.map((item, i) =>

            <Box color={'gray.600'} fontSize={'2xl'} key={i}>
              <Box>
                <PrismicRichText field={item.sub_heading} />
              </Box>
              <PrismicRichText field={item.description} />
            </Box>
          )
        }
      </Stack>
      <Flex justifyContent="center">
        <PrismicLink field={slice.primary.link}>
          <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
        </PrismicLink>
      </Flex>
    </Box>
  </section >
)

export default TextEditor