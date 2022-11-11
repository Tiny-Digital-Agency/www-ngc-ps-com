import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PrismicRichText } from "@prismicio/react";

const BannerSectionSideContent = ({ slice }) => (

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
      align={"center"}
      px={useBreakpointValue({ base: 4, md: 8 })}
      pl={{ base: "10em", sm: "15em" }}
    >
      <Stack maxW={{ base: "95%", md: "75%" }} align={"center"} spacing={6}>
        <Text
          py="35%"
          color={"white"}
          fontSize={{ base: "3xl", lg: "4xl" }}
          lineHeight={1.2}
          textAlign="center"
        >
          <PrismicRichText field={slice.primary.title} />
        </Text>
      </Stack>
    </VStack>
  </Flex>
)
export default BannerSectionSideContent