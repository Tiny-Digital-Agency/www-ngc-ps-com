import {
  Flex,
  VStack,
  Box,
  useBreakpointValue,
  Image
} from "@chakra-ui/react";
import { PrismicRichText } from '@prismicio/react'

const GridSection = ({ slice }) => (
  <Flex w="full">
    <VStack
      w="full"
      justify="center"
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
        <Box
          py="10px"
          color="#53575a"
          fontSize={{ base: "3xl", lg: "4xl" }}
          lineHeight={1.2}
          textAlign="center"
        >
          <PrismicRichText field={slice.primary.title} />
        </Box>
      </Box>
      <Flex
        flexWrap="wrap"
        direction="row"
        justify={{ base: "center", sm: "flex-start" }}
        w={{ xl: "80em", base: "full" }}
        my="50px"
        borderLeft={{ base: "none", sm: "solid 3px #2a2424" }}
      >
        {
          slice?.items?.map((item, i) =>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              flexDirection={"column"}
              w={{ base: "80%", sm: "50%", lg: "33.3%" }}
              h="300px"
              borderRight={{ base: "none", sm: "solid 3px #333333" }}
              borderBottom={{ base: "solid 3px #333333" }}
              _hover={{
                textDecoration: "none",
              }}
              _last={{
                borderRight: "solid 3px #333333"
              }}
            >
              {item.image.url ?
                <Image h="60%" src={item.image.url} alt={item.image.alt} />
                : ""
              }
              <Box
                mt="10px"
                color="#626669"
                fontSize="18px"
                fontWeight="bold"
                textAlign="center"
                _hover={{
                  color: "#ef483e",
                }}
              >
                <Flex flexDirection="column">
                  <PrismicRichText field={item.text_content} />
                </Flex>
              </Box>
            </Box>
          )
        }
      </Flex>
    </VStack >
  </Flex >
)
export default GridSection