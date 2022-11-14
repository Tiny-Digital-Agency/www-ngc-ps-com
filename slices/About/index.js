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
    <Stack spacing={6} as={Container} maxW={{base: '100vw', sm:'80vw' , md:'80vw' , xl: '50vw'}} textAlign={'center'}
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
      <Heading fontSize={'2xl'} paddingTop='20px'>
        <PrismicRichText field={slice.primary.heading} /></Heading>
      <Box color={'gray.600'} fontSize={'xl'}>
        <PrismicRichText field={slice.primary.paragraph_1} />
      </Box>
    </Stack>
    <Container maxW={{base: '100vw', sm:'80vw' , md:'80vw' , xl: '50vw'}} mt={10}>
      <Heading fontSize={'3xl'}><PrismicRichText field={slice.primary.list_title} /></Heading>
      <UnorderedList mt={5} ml={10}>
        <PrismicRichText field={slice.primary.list} />
      </UnorderedList>
      <Box>
        <Flex 
        justifyContent={'space-between'}  
        alignItems="center" 
        textAlign={"center"} 
        spacing={6} 
        paddingTop={"10"} 
        flexDirection={{ base: 'column', md: 'row', sm: 'column' }} >
          {
            slice.items.map((item, i) =>
              <Box key={i} alignSelf={"center"} 
              maxH={"150px"} 
              maxW={"150px"} 
              h="150px" w="150px" 
              mt={"40px"} mb={"40px"} 
              mr={"20px"} ml={"20px"}
              >
                <img src={item.image.url} alt={item.image.alt} />
                { item.image_title }
              </Box>
            )
          }
        </Flex>
      </Box>
    </Container>
  </Box>


)

export default About

