import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import {
  Box,
  Stack,
  Flex,
  VStack,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  Text,
  Img,
  Center,
  useColorModeValue,
  HStack,


} from '@chakra-ui/react';
/**
 * @typedef {import("@prismicio/client").Content.TeamProfileSlice} TeamProfileSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamProfileSlice>} TeamProfileProps
 * @param { TeamProfileProps }
 */
const TeamProfile = ({ slice }) => (
  <section>
    <Flex flexDirection="column">
      <Flex
        w='100%'
        h='400px'
        bg='blue'
        bgImage="https://www.ngc-ps.com/wp-content/uploads/2019/02/ngc-home-banner-blue.png"
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
              lineHeight={1.2}
              textAlign={"center"}>
              <Box fontSize={"30px"}>
                <PrismicRichText field={slice.primary.heading_1} />
              </Box>
              <Box fontSize={"28px"} fontWeight={"600"}>
                <PrismicRichText field={slice.primary.heading_2} />
              </Box>
              <Box fontSize={"24px"} fontWeight={"400"}>
                <PrismicRichText field={slice.primary.description} />
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
            <Center py={6}>
              <Box
                w="300px"
                rounded={'sm'}
                my={5}
                mx={[0, 5]}
                overflow={'hidden'}
                bg="white"
                border={'1px'}
                borderColor="black"
                boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
                <Box h={'300px'} borderBottom={'1px'} borderColor="black">
                  <Box
                    roundedTop={'sm'}
                    objectFit="cover"
                    h="full"
                    w="full"
                    alt={'Blog Image'}>           {
                      slice.items.map((item, i) =>
                        <img src={item.profile_image.url} alt={item.profile_image.alt} key={i} />
                      )
                    }</Box>
                </Box>
                <Box p={4}>
                  <Box
                    bg="black"
                    display={'inline-block'}
                    px={2}
                    py={1}
                    color="white"
                    mb={2}>
                    {
                      slice?.items?.map((item, i) =>
                        <span key={i}>{item.position}</span>
                      )
                    }
                  </Box>
                  {
                    slice?.items?.map((item, i) =>
                      <Box key={i}>
                        <PrismicRichText field={item.name} />
                      </Box>
                    )
                  }
                  {
                    slice?.items?.map((item, i) =>
                      <Box key={i}>
                        <PrismicRichText field={item.description} />
                      </Box>
                    )
                  }
                </Box>
                <HStack borderTop={'1px'} color="black">
                </HStack>
              </Box>
            </Center>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  </section>

)

export default TeamProfile