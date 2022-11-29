import React from 'react'
import { PrismicRichText } from '@prismicio/react'
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
    <Box bg={'#e5e1dd'} paddingTop={"30px"} paddingBottom={"20px"}>
      <Stack spacing={6} as={Container} maxW={{ base: '100vw', sm: '80vw', xl: '70vw' }}>
        <Heading fontSize={'4xl'} paddingTop='20px' fontWeight="500" textAlign={'center'}>
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
    </Box>
  </section >
)

export default TextEditor