import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Flex, VStack, Box, useBreakpointValue } from "@chakra-ui/react";


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
          borderTop: "2px solid #4d8b3f",
        }}
      >
        <Box
          py="10px"
          color="#53575a"
          fontSize={{ base: "3xl", lg: "40px" }}
          lineHeight={1.2}
          textAlign="center"
        >
          <PrismicRichText field={slice.primary.title} />
        </Box>
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
            <>
              <Box
                w={{ base: "80%", sm: "47%", lg: "30%" }}
                h={{ sm: "320px", base: "250px" }}
                my="25px"
                mx={{ base: "5px" }}
              >
                <section>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mx="auto"
                    w="fit-content"
                    h="100%"
                    color="#fff"
                    fontSize={32}
                    fontWeight="bold"
                  // textAlign={"center"}
                  >
                    <Box
                      borderBottom={"4px solid transparent"}
                      _hover={{
                        borderBottom: "4px solid #ef483e",
                      }}>
                      <PrismicRichText field={item.text_content} />
                    </Box>
                  </Box>
                </section>
              </Box>
              <style jsx>{`
                  section{
                    background-image: url("${item.background_image.url}");
                    background-size: cover;
                    background-position: center;
                    height: 320px;
                    width: 100%;
                  }
              `}</style>
            </>
          )
        }
      </Flex>
    </VStack>
  </Flex>
)
export default CardsSection