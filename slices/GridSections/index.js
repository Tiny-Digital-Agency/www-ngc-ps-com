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
      direction="row"
      my="50px"
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
        justify="flex-start"
        // w={{ xl: "80em", base: "full" }}
        w={{ md: "90%", xl: "87%" }}
      // borderLeft={{ base: "none", sm: "solid 1px #adadad" }}
      >
        {
          slice?.items?.map((item, i) =>
            <Box
              key={i}
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              flexDirection={"column"}
              w={{ base: "49%", sm: "33%", xl: "20%" }}
              h={{ base: "auto", lg: "268px" }}
              p="0 15px"
              borderRight="solid 1px #2c2e35"
              borderLeft={{ base: "solid 1px #2c2e35", sm: "none" }}
              borderBottom="solid 1px #2c2e35"
              _hover={{
                textDecoration: "none",
              }}
            // _last={{
            //   borderRight: "none"
            // }}
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