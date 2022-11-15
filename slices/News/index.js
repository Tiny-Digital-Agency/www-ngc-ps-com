import React from 'react'
import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.NewsSlice} NewsSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<NewsSlice>} NewsProps
 * @param { NewsProps }
 */

 import {
  Box,
  Stack,
  Flex,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
const News = ({ slice }) => (
  <section>
    <Flex
      w='100%'
      h='400px'
      bg='blue'
      bgImage="https://www.ngc-ps.com/wp-content/uploads/2019/02/ngc-home-banner-green.png"
      bgSize='cover'
      bgAttachment='fixed'
      bgPos='50% 100%'
      pos='relative'
      bgRepeat='no-repeat' >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Box
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
            textAlign={"center"}>
            <PrismicRichText field={slice.primary.news_content} />
          </Box>
        </Stack>
      </VStack>
    </Flex>
  </section>
)

export default News