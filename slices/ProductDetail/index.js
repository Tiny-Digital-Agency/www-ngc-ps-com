import {
  Stack,
  Flex,
  Grid,
  Box
} from "@chakra-ui/react";
import { PrismicRichText } from "@prismicio/react";
import React from 'react'


const ProductDetail = ({ slice }) => (
  <>
    <Grid
      row={{ base: "1", md: "2" }}
      gridTemplateRows={{ base: "225px 480px", sm: "225px 360px", md: "360px 1fr", xl: '270px 1fr' }}
      gridTemplateColumns={{ base: "100%", md: '255px 1fr' }}
    >
      <Flex
        justifyContent={"center"}
        className="backgroundTHISBOX"
        bg={"radial-gradient(#d8d6d6, #54575a)"}
        p="10px"
        borderRight={{ base: "none", md: "solid 4px #ef483e" }}
      >
        <img src={slice.primary.product_image.url} alt={slice.primary.product_image.alt} />
      </Flex>
      <section>
        <Stack
          w={{ base: "85%", md: "64%" }}
          spacing={6}
          textColor="#fff;"
        >
          <Box
            color="#fff"
            fontSize={{ base: "3xl", lg: "40px" }}
            lineHeight={1.2}
          >
            <PrismicRichText field={slice.primary.title} />
          </Box>
          <Box fontSize="16px">
            <PrismicRichText field={slice.primary.description} />
          </Box>
        </Stack>
        <style jsx>{`
        section{
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url("${slice.primary.background_image.url}");
          background-size: cover;
          background-position: center;
        }
    `}</style>
      </section>
    </Grid>

    <Flex
      justifyContent="space-between"
      flexDirection={{ base: "column", md: "row" }}
      m={{ base: "30px auto", md: "55px auto" }}
      w={{ base: "85%", md: "60%" }}
      color="#53575a"
      fontSize={{ base: "18px", md: "24px" }}
      rowGap={"20px"}
    >
      <PrismicRichText field={slice.primary.product_name} />
      <PrismicRichText field={slice.primary.product_type} />
    </Flex>

    <Flex
      flexDirection="column"
      m="auto"
      w={{ base: "95%", md: "60%" }}
      fontSize={{ base: "14px", md: "16px" }}
    >
      <Flex
        flexDirection="row"
        justifyContent="flex-start"
        p="16px"
        textColor="#fff"
        bg="#0070c0"
      >
        <Box w={{ base: "60px", md: "110px" }}>Class</Box>
        <Box w="27%">Size Range</Box>
        <Box>Pressure Temperature Rating</Box>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="space-between"
        color="#53575a"
      >
        {
          slice?.items?.map((item, i) =>
            <>
              <Flex
                alignItems="center"
                flexDirection="row"
                justifyContent="flex-start"
                p="18px"
                className="child"
                columnGap={{ base: "10px", md: "0" }}
              >
                <Box w={{ base: "60px", md: "110px" }} h="fit-content">
                  <PrismicRichText field={item.table_class} />
                </Box>
                <Box w="27%" h="fit-content">
                  <PrismicRichText field={item.table_size_range} />
                </Box>
                <Box h="fit-content">
                  <PrismicRichText field={item.table_pressure_temperature_rating} />
                </Box>
              </Flex>
            </>
          )
        }
      </Flex>
    </Flex>

    <Flex
      flexDirection={{ base: "column", md: "row" }}
      w={{ base: "85%", md: "60%" }}
      m={{ base: "30px auto", md: "20px auto" }}
      columnGap="20px"
      rowGap={{ base: "30px", md: "0" }}
    >
      <Box w={{ base: "100%", md: "62%" }}
        color="#53575a"
      >
        <PrismicRichText field={slice.primary.product_details_right} />
      </Box>
      <Box
        w={{ base: "100%", md: "38%" }}
        p="42px 37px"
        color="#fff"
        bg={"#00629b"}
        borderLeft={{ base: "none", md: "solid 4px #ef483e" }}
      >
        <PrismicRichText field={slice.primary.product_resources_left} />
      </Box>
    </Flex>
  </>
)

export default ProductDetail