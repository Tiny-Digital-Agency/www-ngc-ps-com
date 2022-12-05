import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Flex, VStack, Box, useBreakpointValue, Grid, GridItem } from "@chakra-ui/react";


const CardsSection = ({ slice }) => (
  <Flex w="full" bgGradient={"linear(to-r, blackAlpha.600, transparent)"}>
    <VStack
      direction="row"
      justify="center"
      w={{ md: "90%", xl: "62%" }}
      margin={"auto"}
      px={useBreakpointValue({ base: 4, md: 8 })}
    >
      <Box
        p="55px 0 30px"
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
          fontSize={{ base: "3xl", lg: "35px" }}
          lineHeight={1.2}
          textAlign="center"
        >
          <PrismicRichText field={slice.primary.title} />
        </Box>
      </Box>

      {slice.primary.card_count ?
        <Grid
          pb="30px"
          w={{ xl: "auto", base: "full" }}
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          gap={6}
        >
          {
            slice?.items?.map((item, i) =>
              <>
                <GridItem
                  key={slice.id}
                  colSpan="1"
                  h={{ base: "190px", md: "320px" }}
                  w="100%"
                >
                  <section>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mx="auto"
                      h="100%"
                      color="#fff"
                      fontSize={{ base: "20px", md: "32px" }}
                      fontWeight="bold"
                      textAlign="center"
                    >
                      <Box
                        m={{ base: "0 20px", sm: "0 50px" }}
                        borderBottom={"4px solid transparent"}
                        _hover={{
                          borderBottom: "4px solid #ef483e",
                        }}>
                        <PrismicRichText field={item.text_content} />
                      </Box>
                    </Box>
                  </section>
                </GridItem>
                <style jsx>{`
                  section{
                    background-image: url("${item.background_image.url}");
                    background-size: cover;
                    background-position: center;
                    height: inherit;
                    width: 100%;
                  }
                `}</style>
              </>
            )
          }
        </Grid>
        : <Grid
          pb="30px"
          w={{ xl: "auto", base: "full" }}
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
          gap={6}
        >
          {
            slice?.items?.map((item, i) =>
              <>
                <GridItem
                  key={slice.id}
                  colSpan="1"
                  h={{ base: "190px", md: "320px" }}
                  w="100%"
                >
                  <section>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mx="auto"
                      h="100%"
                      color="#fff"
                      fontSize={{ base: "20px", md: "32px" }}
                      fontWeight="bold"
                      textAlign="center"
                    >
                      <Box
                        m={{ base: "0 20px", sm: "0 50px" }}
                        borderBottom={"4px solid transparent"}
                        _hover={{
                          borderBottom: "4px solid #ef483e",
                        }}>
                        <PrismicRichText field={item.text_content} />
                      </Box>
                    </Box>
                  </section>
                </GridItem>
                <style jsx>{`
                 section{
                   background-image: url("${item.background_image.url}");
                   background-size: cover;
                   background-position: center;
                   width: 100%;
                   height: inherit;
                 }
               `}</style>
              </>
            )
          }
        </Grid>
      }
    </VStack>
  </Flex>
)
export default CardsSection