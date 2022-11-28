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
            <form className='forms' name="contact" method="POST" data-netlify="true">
              <Flex pt={{ base: "10px", sm: "20px" }} flexDirection={{ base: "column", sm: "row" }}>
                <input type="hidden" name="form-name" value="contact" />
                <Box w={{ base: "80%", sm: "50%" }} pl="10px" pr="10px">
                  <input type="text" name="first-name" placeholder="FIRST NAME" />
                </Box>
                <Box w={{ base: "80%", sm: "50%" }} pl="10px" pr="10px" pt={{ base: "10px", sm: "0" }}>
                  <input type="text" name="last-name" placeholder="LAST NAME" />
                </Box>
              </Flex>
              <Flex pt={{ base: "10px", sm: "20px" }} flexDirection={{ base: "column", sm: "row" }}>
                <Box w={{ base: "80%", sm: "50%" }} pl="10px" pr="10px">
                  <input type="tel" name="phone" placeholder="PHONE" />
                </Box>
                <Box w={{ base: "80%", sm: "50%" }} pl="10px" pr="10px" pt={{ base: "10px", sm: "0" }}>
                  <input type="email" name="email" placeholder="EMAIL" />
                </Box>
              </Flex>
              <Box pt="20px" w="100%" pl="10px" pr="10px">
                <textarea name="message" placeholder="MESSAGE"></textarea>
              </Box>
              <Box>
                <button className='btn' type="submit">Submit</button>
              </Box>
            </form>

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
  </section >
)

export default Contact