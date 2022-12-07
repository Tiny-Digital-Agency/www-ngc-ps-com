import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import { Flex, Box, Grid } from '@chakra-ui/react'

const ProductsList = ({ slice }) => (
  <Flex
    flexDirection="column"
    w="full"
  >
    {slice.primary.show_banner ?
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
          fontSize={{ base: "3xl", lg: "40px" }}
          lineHeight={1.2}
          textAlign="center"
        >
          <PrismicRichText field={slice.primary.title} />
        </Box>
      </Box>
      : ''}

    <Grid
      templateAreas={{ base: `"main"`, md: `"left main right"` }}
      gridTemplateRows='auto'
      gridTemplateColumns={{ base: "1fr", md: '185px 1fr' }}
    >
      <Flex>
        <Box display={{ base: "none", md: "flex" }} w={"185px"} position="relative" h="fit-content">
          <img src={slice.primary.left_hand_image.url} alt={slice.primary.left_hand_image.alt} />
          <Box
            position="absolute"
            right="32px"
            h="100%"
            borderLeft="solid 5px #ef483e"
          >
          </Box>
        </Box>
      </Flex>
      <Flex
        alignItems="flex-start"
        flexDirection="column"
        flexWrap="wrap"
        justifyContent="center"
        m={{ base: "40px", md: "10px 40px" }}
      >
        <Box color="#00629b" fontWeight="700">
          <PrismicRichText field={slice.primary.product_list_title} />
        </Box>

        <Flex
          flexDirection="row"
          flexWrap="wrap"
          gap="8px"

        >
          {
            slice?.items?.map((item, i) =>
              <Flex
                flexDirection="row"
                height="fit-content"
                gap="8px"
              >
                <Box
                  color="#53575a"
                  borderBottom="solid 2px transparent"
                  _hover={{ borderBottom: "solid 2px #ef483e" }}
                >
                  <PrismicRichText field={item.product_name_and_link} />
                </Box>
                <Box color="#ef483e">/</Box>
              </Flex>
            )
          }
        </Flex>
      </Flex>

      <Box
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        w="185px"
      >
        <Box h="fit-content">
          <img src={slice.primary.right_hand_image.url} alt={slice.primary.right_hand_image.alt} />
        </Box>
      </Box>
    </Grid>
  </Flex >
)

export default ProductsList