import {
  Flex,
  VStack,
  Box,
  useBreakpointValue,
  Image,
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
              borderLeft={{ base: "none", sm: "solid 1px gray" }}
              borderBottom={{ base: "solid 1px gray", sm: "none" }}
              _hover={{
                textDecoration: "none",
              }}
            >
              {item.logoimage.url ? <Image src={item.logoimage.url} alt={item.logoimage.alt} /> : ""}

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
                  <PrismicLink field={item.gridlink}>
                    <PrismicRichText field={item.gridcontent} />
                  </PrismicLink>
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