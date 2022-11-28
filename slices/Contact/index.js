import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import {
  Stack,
  Flex,
  Button,
  Box,
  VStack,
  useBreakpointValue,
  FormControl,
  Textarea,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
/**
 * @typedef {import("@prismicio/client").Content.ContactSlice} ContactSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContactSlice>} ContactProps
 * @param { ContactProps }
 */
const Contact = ({ slice }) => (
  <section>
    <Flex
      w={"full"}>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={{ base: "95%", md: "75%" }} align={"center"} spacing={6}>
          <Box
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
            }}>
            <PrismicRichText field={slice.primary.heading} />
            <PrismicRichText field={slice.primary.description} />
            <Flex pt={{ base: "10px", sm: "20px" }} flexDirection={{ base: "column", sm: "row" }} color="#000">
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <Flex w={{ base: "100%", sm: "50%" }} pl="10px" pr="10px">
                  <input type="text" name="first-name" />
                </Flex>
                <Flex w={{ base: "100%", sm: "50%" }} pl="10px" pr="10px">
                  <input type="text" name="last-name" />
                </Flex>
                <Flex w={{ base: "100%", sm: "50%" }} pl="10px" pr="10px">
                  <label>Your Email: <input type="tel" name="phone" /></label>
                </Flex>
                <Flex w={{ base: "100%", sm: "50%" }} pl="10px" pr="10px">
                  <label>Your Email: <input type="email" name="email" /></label>
                </Flex>
                <p>
                  <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
            </Flex>
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

export default Contact