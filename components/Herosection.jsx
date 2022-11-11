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

export default function WithBackgroundImage() {
  return (
    <Flex
      w={"full"}
      backgroundImage={"url(/hero-section.png)"}
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
            pb={{ base: "5%", md: "10%" }}
            color={"white"}
            fontWeight={700}
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            lineHeight={1.2}
            textAlign="center"
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>

          <Stack
            direction={"row"}
            justifyContent={{ base: "center", md: "space-between" }}
            flexWrap={{ base: "wrap", md: "nowrap" }}
            gap="20px"
            w={"full"}
            pb={{ base: "5%", md: "10%" }}
          >
            <Flex
              align={"center"}
              direction={{ base: "column", lg: "row" }}
              w={{ base: "auto", md: "20%" }}
              gap={"20px"}
            >
              <Image src={"/best-document.png"} h={"60px"} />
              <Text align={"center"} color="#fff">
                Test
              </Text>
            </Flex>
            <Flex
              align={"center"}
              direction={{ base: "column", lg: "row" }}
              w={{ base: "auto", md: "20%" }}
              gap={"20px"}
            >
              <Image src={"/NGC-logo.webp"} h={"60px"} />
              <Text align={"center"} color="#fff">
                Test
              </Text>
            </Flex>
            <Flex
              align={"center"}
              direction={{ base: "column", lg: "row" }}
              w={{ base: "auto", md: "20%" }}
              gap={"20px"}
            >
              <Image src={"/best-document.png"} h={"60px"} />
              <Text align={"center"} color="#fff">
                Test
              </Text>
            </Flex>
            <Flex
              align={"center"}
              direction={{ base: "column", lg: "row" }}
              w={{ base: "auto", md: "20%" }}
              gap={"20px"}
            >
              <Image src={"/best-document.png"} h={"60px"} />
              <Text align={"center"} color="#fff">
                Test
              </Text>
            </Flex>
          </Stack>

          <Box pb={{ base: "18%", md: "6%" }}>
            <Flex
              align={"center"}
              direction={{ base: "column", md: "row" }}
              gap={{ sm: "0", md: "20px" }}
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
                News
              </Text>
              <Text
                fontSize={{ base: "lg", lg: "2xl" }}
                lineHeight="1.3"
                textAlign={{ base: "center", md: "left" }}
              >
                NGC is now the master distributor for Crane Cast Steel Gate,
                Globe and Check Valves.
                <Link
                  ml={"10px"}
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
  );
}
