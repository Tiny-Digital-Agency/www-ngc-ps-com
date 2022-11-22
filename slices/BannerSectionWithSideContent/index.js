import {
  Stack,
  Flex,
  Box,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PrismicRichText } from "@prismicio/react";

const BannerSectionWithSideContent = ({ slice }) => (
  <section>
    <Flex w="full">
      <VStack
        w="full"
        justify="flex-end"
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack
          // maxW={{ base: "95%", md: "75%" }}
          w={{ base: "50%", lg: "630px" }}
          ml="40%"
          align="center"
          spacing={6}
        >
          <Box
            py="35%"
            // w="630px"
            color="#fff"
            fontSize={{ base: "3xl", lg: "4xl" }}
            lineHeight={1.2}
            textAlign="left"
          >
            <PrismicRichText field={slice.primary.title} />
          </Box>
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