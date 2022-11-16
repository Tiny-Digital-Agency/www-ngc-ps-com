import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PrismicRichText } from "@prismicio/react";

const BannerSectionWithSideContent = ({ slice }) => (
  <section>
    <Flex
      w={"full"}
    >
      <VStack
        w={"full"}
        justify={"flex-end"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={{ base: "95%", md: "75%" }} ml="15em" align={"center"} spacing={6}>
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
    <style jsx>{`
        section{
          background-image: url("${slice.primary.background_image.url}");
          background-size: cover;
          background-position: center;

        }
    `}</style>
  </section>
)

export default BannerSectionWithSideContent