import React from 'react'
import { PrismicRichText, PrismicLink } from '@prismicio/react'
import { Flex, VStack, Box, useBreakpointValue, Text, Link } from "@chakra-ui/react";


const CardsSection = ({ slice }) => (
  <Flex w={"full"}>
    <VStack
      w="full"
      justify={"center"}
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      direction="row"
    >
      <Box
        pt="55px"
        _before={{
          content: `""`,
          position: "absolute",
          m: "auto",
          right: "0",
          left: "0",
          mt: "-20px",
          w: "84px",
          borderTop: "2px solid #ef483e",
        }}
      >
        <Text
          py="10px"
          color={"white"}
          fontSize={{ base: "3xl", lg: "4xl" }}
          lineHeight={1.2}
          textAlign="center"
        >
          <PrismicRichText field={slice.primary.title} />
        </Text>
      </Box>
      <Flex
        w={{ xl: "80em", base: "full" }}
        flexWrap="wrap"
        direction="row"
        justify={"space-evenly"}
        my="50px"
      >
        {
          slice?.items?.map((item, i) =>
            <PrismicLink field={item.cardlink}
            // _hover={{
            //   textDecoration: "none",
            // }}
            >
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"center"}
                w={{ sm: "320px", base: "250px" }}
                h={{ sm: "320px", base: "250px" }}
                my="25px"
                mx={{ base: "5px" }}
                backgroundImage={`${item.backgroundimage.url}`}
                backgroundSize={"cover"}
                backgroundPosition={"center center"}
              >
                <Box
                  mt="1"
                  color="#fff"
                  fontSize={32}
                  fontWeight="bold"
                  textAlign={"center"}
                  borderBottom={"4px solid transparent"}
                  _hover={{
                    borderBottom: "4px solid #ef483e",
                  }}
                >
                  <PrismicRichText field={item.cardtitle} />
                </Box>
              </Box>
            </PrismicLink>
          )
        }
      </Flex>
    </VStack>
  </Flex>
)
export default CardsSection