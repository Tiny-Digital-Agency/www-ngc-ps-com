import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PrismicRichText } from "@prismicio/react";

export default function BannerSectionSideContent() {
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
            py="35%"
            color={"white"}
            fontSize={{ base: "3xl", lg: "4xl" }}
            lineHeight={1.2}
            textAlign="center"
            _before={{
              content: `""`,
              position: "absolute",
              m: "auto",
              right: "0",
              left: "0",
              mt: "-40px",
              w: "84px",
              borderTop: "2px solid #ef483e",
            }}
          >
            Lorem Ipsum
          </Text>
        </Stack>
      </VStack>
    </Flex>
  );
}
