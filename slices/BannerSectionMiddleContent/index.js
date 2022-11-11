import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PrismicRichText } from "@prismicio/react";

const BannerSectionMiddleContent = ({ slice }) => (

  <Flex
    w={"full"}
    backgroundImage={`${slice.primary.backgroundimage.url}`}
    backgroundSize={"cover"}
    backgroundPosition={"center center"}
    p="45px"
  >
    <VStack
      w={"full"}
      justify={"center"}
      px={useBreakpointValue({ base: 4, md: 8 })}
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
          <PrismicRichText field={slice.primary.title} />
        </Text>
      </Stack>
    </VStack>
  </Flex>
)
export default BannerSectionMiddleContent