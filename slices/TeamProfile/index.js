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
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Box
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
              textAlign={"center"}>
              <PrismicRichText field={slice.primary.team_content} />
            </Box>
          </Stack>
        </VStack>
      </Flex>
      <Accordion allowToggle pos={"relative"}>
        <AccordionItem
        >
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
                      slice?.items?.map((item, i) =>
                        <img src={item.profile_image.url} alt={item.profile_image.alt} />
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
                        <span >{item.position}</span>
                      )
                    }
                  </Box>
                  {
                    slice?.items?.map((item, i) =>
                      <PrismicRichText field={item.name} />
                    )
                  }
                  {
                    slice?.items?.map((item, i) =>
                      <PrismicRichText field={item.description} />
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