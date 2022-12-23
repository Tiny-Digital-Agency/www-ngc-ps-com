import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'

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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
const News = ({ slice }) => (
  <section>
    <Flex flexDirection="column">
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
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
          _before={{
            content: `""`,
            backgroundColor: '#ef483e',
            width: '84px',
            height: '2px',
            left: '0',
            right: '0',
          }}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Box
              pt="20px"
              pb="20px"
              color={'white'}
              lineHeight={1.5}
              textAlign={"center"}>
              <Box fontSize={"30px"}>
                <PrismicRichText field={slice.primary.heading} />
              </Box>
              <Box fontSize={"24px"} fontWeight={"400"}>
                <PrismicRichText field={slice.primary.description} />
              </Box>
              <Box fontSize={"28px"} fontWeight={"600"}>
                <PrismicRichText field={slice.primary.heading_2} />
              </Box>
            </Box>
          </Stack>
        </VStack>
      </Flex>
      <Accordion allowToggle pos={"relative"}>
        <AccordionItem>
          <AccordionButton justifyContent={"center"} pos={"absolute"}
            zIndex={1}
            mt="-60px"
            fontSize="40px"
            color="#fff">
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <Flex justifyContent={"center"} alignItems={"center"} flexDirection={{ base: "column", md: "row" }}>
              {
                slice?.items?.map((item, i) =>
                  <Box key={i} padding={10}>
                    <PrismicLink field={item.video_link}>
                      <img src={item.video_image.url} alt={item.video_image.alt} />
                    </PrismicLink>
                    <Flex justifyContent="center" alignItems={"center"} flexDirection={{ base: "column", md: "row" }}>
                      <Box>
                        {item.title}
                        <PrismicRichText field={item.description} />
                      </Box>
                    </Flex>
                  </Box>
                )
              }
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  </section>
)

export default News