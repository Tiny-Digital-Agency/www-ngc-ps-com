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
            <Flex pt="20px" flexDirection={{ base: "column", sm: "row" }}>
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />

                <p>
                  <label>Your Name: <input type="text" name="name" /></label>

                </p>
                <p>
                  <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                  <label>Your Role: <select name="role[]" multiple>
                    <option value="leader">Leader</option>
                    <option value="follower">Follower</option>
                  </select></label>
                </p>
                <p>
                  <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                  <button type="submit">Send</button>
                </p>
              </form>
              <FormControl w={{ base: "100%", sm: "50%" }} pl="10px" pr="10px"
                name="contact" method="POST" data-netlify="true"
              >
                <Input type="hidden" name="form-name" value="contact" />
                <Flex w={{ base: "100%", sm: "50%" }} pl="10px" pr="10px" pt={{ base: "10px", sm: "0" }}>
                  <Input type='text' placeholder='FIRST NAME' name="name" _placeholder={{ opacity: 1, color: '#fff' }} />
                </Flex>
                <Flex w={{ base: "100%", sm: "50%" }} pl="10px" pr="10px" pt={{ base: "10px", sm: "0" }}>
                  <Input type='email' placeholder='LAST NAME' name="email" _placeholder={{ opacity: 1, color: '#fff' }} />
                </Flex>
                <Button
                  mt={4}
                  w="200px"
                  type='submit'
                  bg="#ef483e"
                  borderRadius={0}
                >
                  SUBMIT
                </Button>
              </FormControl>
              {/* <FormControl w={{ base: "100%", sm: "50%" }} pl="10px" pr="10px" pt={{ base: "10px", sm: "0" }}>
                <Input type='name' placeholder='LAST NAME' _placeholder={{ opacity: 1, color: '#fff' }} />
              </FormControl> */}

            </Flex>
            {/* <Flex pt={{ base: "10px", sm: "20px" }} flexDirection={{ base: "column", sm: "row" }}>
              <FormControl w={{ base: "100%", sm: "50%" }} pl="10px" pr="10px">
                <Input type='tel' placeholder='PHONE' _placeholder={{ opacity: 1, color: '#fff' }} />
              </FormControl>
              <FormControl w={{ base: "100%", sm: "50%" }} pl="10px" pr="10px" pt={{ base: "10px", sm: "0" }}>
                <Input type='email' placeholder='EMAIL' _placeholder={{ opacity: 1, color: '#fff' }} />
              </FormControl>
            </Flex> */}
            {/* <Flex pt="20px" w="100%" pl="10px" pr="10px">
              <Textarea placeholder='MESSAGE' _placeholder={{ opacity: 1, color: '#fff' }} />
            </Flex> */}
            {/* <Button
              mt={4}
              w="200px"
              type='submit'
              bg="#ef483e"
              borderRadius={0}
            >
              SUBMIT
            </Button> */}
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