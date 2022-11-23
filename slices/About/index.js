import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.AboutSlice} AboutSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutSlice>} AboutProps
 * @param { AboutProps }
 */

import {
  Stack,
  Box,
  Flex,
  UnorderedList,
  Container,
  Heading,
} from '@chakra-ui/react';

const About = ({ slice }) => (
  <Box bg={'#e5e1dd'} paddingTop={"30px"} paddingBottom={"20px"}>
    <Stack spacing={6} as={Container} maxW={{ base: '90%', lg: '80%' }} textAlign={'center'}
      _before={{
        content: `""`,
        backgroundColor: '#4d8b3f',
        width: '84px',
        height: '2px',
        margin: '0 auto',
        left: '0',
        right: '0',
        top: '-20px',

      }}>
      <Heading fontSize={'2xl'} paddingTop='20px' color="#53575a" fontWeight="500">
        <PrismicRichText field={slice.primary.heading} /></Heading>
      <Box color={'gray.600'} fontSize={'xl'}>
        <PrismicRichText field={slice.primary.paragraph_1} />
      </Box>
    </Stack>

    <Container maxW={{ base: '90%', lg: "80%" }} mt={10}>
      <Heading color="#53575a" fontSize={'3xl'}><PrismicRichText field={slice.primary.list_title} /></Heading>
      <UnorderedList mt={5} ml={10} color="#53575a">
        <PrismicRichText field={slice.primary.list} />
      </UnorderedList>
      <Box>
        <Flex
          justifyContent={{ base: "center", lg: 'space-between' }}
          alignItems="space-evenly"
          flexWrap={"wrap"}
          textAlign={"center"}
          spacing={6}
          paddingTop={"10"}
          flexDirection={"row"}
          color="#53575a" fontWeight="600">
          {
            slice.items.map((item, i) =>
              <Box key={i}
                w={{ base: "45%", md: "28%", lg: "18%" }}
                h={{ base: "auto", lg: "220px" }}
                p="10px 5px"
                display={"flex"}
                flexDirection="column"
                alignItems={"center"}
              >
                <img src={item.image.url} alt={item.image.alt} />
                {item.image_title}
              </Box>
            )
          }
        </Flex>
      </Box>
    </Container>
  </Box>
)

export default About

