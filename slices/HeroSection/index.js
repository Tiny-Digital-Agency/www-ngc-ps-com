import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  Image,
  Link,
} from "@chakra-ui/react";
import { PrismicRichText } from "@prismicio/react";

const WithBackgroundImage = ({ slice }) => (
  <Flex
    w={"full"}
    backgroundImage={`${slice.primary.banner.url}`}
    backgroundSize={"cover"}
    backgroundPosition={"center center"}
  >
    <VStack
      w={"full"}
      justify={"center"}
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
    >
      <Stack maxW={{ base: "95%", md: "75%" }} align={"center"} spacing={6}>
        <Text
          pt={{ base: "18%", md: "12%", xl: "8%" }}
          pb={{ base: "5%", md: "60px" }}
          color={"white"}
          fontWeight={700}
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
          lineHeight={1.2}
          textAlign="center"
        >
          <PrismicRichText field={slice.primary.heading} />
        </Text>
        <Stack
          direction={"row"}
          justifyContent={{ base: "center", md: "space-between" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          gap="20px"
          w={"full"}
          pb={{ base: "5%", md: "60px" }}
        >
          {
            slice?.items?.map((item, i) =>
              <Flex
                align={"center"}
                direction={{ base: "column", lg: "row" }}
                w={{ base: "auto", md: "20%" }}
                gap={"20px"}
              >
                <Image src={item.image.url} alt={item.image.alt} h={"60px"} />
                <Text align={"left"} color="#fff" fontWeight={"600"} fontSize="20px">
                  <PrismicRichText field={item.image_title} />
                </Text>
              </Flex>
            )
          }
        </Stack>
        <Box pb={{ base: "18%", md: "100px" }}>
          <Flex
            align={"center"}
            direction={{ base: "column", md: "row" }}
            gap={{ sm: "0", md: "25px" }}
            w={{ base: "85%", lg: "65%" }}
            p={{ base: "15px 15px 20px", md: "18px 25px" }}
            m={"auto"}
            color={"white"}
            bg={"rgba(16,65,17,0.8)"}
            border={"5px solid #fff;"}
            _hover={{ bg: "rgba(32,80,29,255)" }}
          >
            <Text
              w={"fit-content"}
              fontSize={{ base: "xl", lg: "3xl" }}
              fontWeight="bold"
            >
              <PrismicRichText field={slice.primary.ButtonTitle} />
            </Text>
            <Text
              fontSize={{ base: "lg", lg: "2xl" }}
              lineHeight="1.3"
              textAlign={{ base: "center", md: "left" }}
            >
              <PrismicRichText field={slice.primary.ButtonContent} />
              <Link
                fontWeight="bold"
                borderBottom="2px solid #ff4438"
                _hover={{
                  textDecoration: "none",
                }}
              >
                Read More{" "}
              </Link>
            </Text>
          </Flex>
        </Box>
      </Stack>
    </VStack>
  </Flex>
)
export default WithBackgroundImage
