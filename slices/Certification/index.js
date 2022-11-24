import React from 'react'
import { PrismicLink } from '@prismicio/react'
import {
  Box,
  Stack,
  Flex,
  Image,
} from '@chakra-ui/react';

const Certification = ({ slice }) => (
  <section>
    <Stack paddingTop={"2em"} paddingBottom={"2em"} _before={{
      content: `""`,
      backgroundColor: '#4d8b3f',
      width: '84px',
      height: '2px',
      margin: '0 auto',
      left: '0',
      right: '0',
      top: '-20px',

    }}>
      <Flex
        justifyContent={'center'}
        alignItems={"center"}
        flexDirection={{ base: 'row' }}
        flexWrap="wrap"
      >
        {
          slice.items?.map((item, i) =>

            <Flex
              justifyContent={"center"}
              alignItems="center"
              maxW={{ base: "unset", lg: "190px" }}
              w={{ base: "45%", md: "28%", lg: "auto" }}
              margin={{ base: "15px 0", lg: "20px" }}

            >
              <PrismicLink field={item.image_link} key={i}>
                <Image src={item.image.url} alt={item.image.alt} />
              </PrismicLink>
            </Flex>

          )
        }
      </Flex>
    </Stack>
  </section >
)

export default Certification