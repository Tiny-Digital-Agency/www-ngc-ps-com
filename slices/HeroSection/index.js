import {
  Stack,
  Flex,
  VStack,
  useBreakpointValue,
  Box,
  Image,
  Link
} from "@chakra-ui/react";
import { ChevronRightIcon } from '@chakra-ui/icons'
import { PrismicRichText } from "@prismicio/react";

const HeroSection = ({ slice }) => (
  <section>
    <Flex w="full">
      <VStack
        w="full"
        justify="center"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack
          maxW={{ base: "95%", md: "75%" }}
          align="center"
          spacing={6}
        >
          <Box
            pt={{ base: "18%", md: "12%", xl: "8%" }}
            pb={{ base: "5%", md: "60px" }}
            color="#fff"
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontWeight="700"
            lineHeight={1.2}
            textAlign="center"
          >
            <PrismicRichText field={slice.primary.heading} />
          </Box>
          <Stack
            direction={"row"}
            flexWrap={{ base: "wrap", md: "nowrap" }}
            justifyContent={{ base: "center", md: "space-between" }}
            gap="20px"
            w="full"
            pb={{ base: "5%", md: "60px" }}
          >
            {
              slice?.items?.map((item, i) =>
                <Flex key={i}
                  align={"center"}
                  direction={{ base: "column", lg: "row" }}
                  gap="20px"
                  w={{ base: "auto", md: "20%" }}
                >
                  <Image
                    src={item.image.url}
                    alt={item.image.alt}
                    h="60px"
                  />
                  <Box
                    align="left"
                    color="#fff"
                    fontSize="20px"
                    fontWeight="600" >
                    <PrismicRichText field={item.image_title} />
                  </Box>
                </Flex>
              )
            }
          </Stack>
          <Box
            pb={{ base: "18%", md: "100px" }}>
            <Link
              href="`${slice.primary.button_link}`"
              _hover={{
                textDecoration: "none"
              }}>
              <Flex
                align="center"
                direction={{ base: "column", md: "row" }}
                gap={{ base: "0", md: "25px" }}
                w={{ base: "85%", lg: "45em" }}
                p={{ base: "15px 15px 20px", md: "18px 25px" }}
                m="auto"
                color="#fff"
                bg="rgba(16,65,17,0.8)"
                border="5px solid #fff;"
                _hover={{ bg: "rgba(32,80,29,255)" }}
              >
                <Box
                  w="fit-content"
                  fontSize={{ base: "xl", lg: "3xl" }}
                  fontWeight="600"
                >
                  <PrismicRichText field={slice.primary.button_title} />
                </Box>
                <Box
                  w="80%"
                  fontSize={{ base: "lg", lg: "2xl" }}
                  lineHeight="1.3"
                  textAlign={{ base: "center", md: "left" }}
                >
                  <PrismicRichText field={slice.primary.button_content} />
                  <Flex
                    alignItems="flex-end"
                  >
                    <Box
                      w="fit-content"
                      fontWeight="600"
                      borderBottom="2px solid #ff4438"
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      Read More
                    </Box>
                    <ChevronRightIcon />
                  </Flex>
                </Box>
              </Flex>
            </Link>
          </Box>
        </Stack>
      </VStack>
    </Flex>
    <style jsx>{`
        section{
          background-image: url("${slice.primary.banner.url}");
          background-size: cover;
          background-position: center;
        }
    `}</style>
  </section>
)
export default HeroSection
