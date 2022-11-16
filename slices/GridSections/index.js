import {
  Flex,
  VStack,
  Box,
  useBreakpointValue,
  Image,
  Text
} from "@chakra-ui/react";
import { PrismicRichText, PrismicLink } from '@prismicio/react'

const GridSection = ({ slice }) => (
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
          color={"#53575a"}
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
        justify={"center"}
        my="50px"
      >
        {
          slice?.items?.map((item, i) =>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={"center"}
              flexDirection={"column"}
              w={{ sm: "45%", md: "50%", lg: "32%", base: "250px" }}
              h="auto"
              pt={{ base: "0", sm: "25px" }}
              px={{ base: "0", sm: "40px" }}
              pb={{ base: "35px", sm: "10px" }}
              my="25px"
              borderX={{ base: "none", sm: "solid 1px gray" }}
              borderBottom={{ base: "solid 1px gray", sm: "none" }}
              className="grid-item"
              _hover={{
                textDecoration: "none",
              }}
            >
              {item.image.url ? <Image src={item.image.url} alt={item.image.alt} /> : ""}

              <Box
                mt="10px"
                color="#626669"
                fontSize={18}
                fontWeight="bold"
                textAlign={"center"}
                _hover={{
                  color: "#ef483e",
                }}
              >
                <Flex flexDirection={"column"}>
                  <PrismicRichText field={item.text_content} />
                </Flex>
              </Box>
            </Box>
          )
        }
      </Flex>
    </VStack>
  </Flex>
)
export default GridSection